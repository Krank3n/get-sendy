import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: generatePrompt(req.body.animal),
    temperature: 1,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(hobby) {
  const capitalizedHobby = hobby[0].toUpperCase() + hobby.slice(1).toLowerCase();
  return `Give me 3 relatively difficult goals suitable that relates to my favourite hobby.
    Hobby: Skiing
    Names: Perform a back-flip., Jump off a 12ft cliff., ski backwards for 10 minutes.
    Hobby: Running
    Names: Run 5km in under 20 minutes., Run a marathon by the end of the year., Do an ultra-marathon.
    Hobby: Eating
    Names: Eat a fresh ghost chilli., Eat 3 large dominoes pizzas in 30 minutes., Go on a carnivore diet for 3 months.
    Hobby: ${capitalizedHobby}
    Names:`;
}
