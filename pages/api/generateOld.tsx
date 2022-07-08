import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: 'text-curie-001',
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
    prompt: generatePrompt(req.body.hobby, req.body.difficulty, req.body.purpose),
    temperature: 1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(hobby, difficulty, purpose) {
  const capitalizedHobby = hobby[0].toUpperCase() + hobby.slice(1).toLowerCase();
  const capitalizedPurpose = purpose.toUpperCase() + purpose.slice(1).toLowerCase();
  const capitalizedDifficulty = difficulty.toUpperCase() + difficulty.slice(1).toLowerCase();
  return `Give me 5 difficulty ${difficulty === 'ridiculous' ? '' : 'achievable quantifiable'} hobby goals.
    Hobby: Skiing
    Goals: goals
    Difficulty: Hard
    Names: Perform a back-flip., Jump off a 12ft cliff., Ski backwards for 10 minutes., Balance a ski boot on your head for 1 minute., Hang on to a ski mobile up a slope.    
    Hobby: Skiing
    Goals: goals
    Difficulty: Ridiculous
    Names: Do a quad back-flip with a mute grab as you jump out of a heli-copter., Jump off a 40ft cliff., Ski a triple black run with only one ski on., Pull up a snowboarder with only your pole to the top of the mountain., Get lots of speed and jump over the chairlift crowd line.
    Hobby: Running
    Goals: purposes
    Difficulty: Ridiculous
    Names: Become the greatest runner that has ever lived., Raise 1 billion dollars with a run event you created., Get all the teenagers in the USA to run a marathon., End the world fat epidemic with a project related to running., Make a you-Tube series of you running around the world across each continent.
    Hobby: Eating
    Difficulty: Hard
    Goals: goals
    Names: Eat a fresh ghost chilli., Eat 3 large dominoes pizzas in 30 minutes., Go on a carnivore diet for 3 months., Blend all of your food for a week., Put a smashed avocado through your nose.
    Hobby: Eating
    Difficulty: Easy
    Goals: goals
    Names: Eat a lemon., Make a pizza from scratch., Make a vegan meal., Blend your dinner and drink it., Make some hummus to share with your friends.
    Hobby: Dancing
    Difficulty: Easy
    Goals: goals
    Names: Go to your first dance class., Do two dancing lessons online., Learn the first basic salsa steps., Get your friend to come to a dance class with you., Move your body to the beat for 5 minutes.
    Hobby: ${capitalizedHobby}    
    Difficulty: ${capitalizedDifficulty}
    Goals: ${capitalizedPurpose}
    Names:`;
}
