export default function BrainTextAnimation(brainTexts, speed) {
  const elts = {
    text1: document.getElementById('text1'),
    text2: document.getElementById('text2'),
  };

  const texts = brainTexts;

  const morphTime = 1;
  const cooldownTime = 0.25;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }

  function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${fraction ** 0.4 * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${fraction ** 0.4 * 100}%`;
    elts.text1.style.top = `${fraction ** 0.4 * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  }

  function doCooldown() {
    morph = 0;

    elts.text2.style.filter = '';
    elts.text2.style.opacity = '100%';

    elts.text1.style.filter = '';
    elts.text1.style.opacity = '0%';
    elts.text1.style.top = '0%';
  }

  function animate() {
    requestAnimationFrame(animate);

    const newTime = new Date();
    const shouldIncrementIndex = cooldown > 0;
    const dt = (newTime - time) / speed || 500;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  }

  animate();
}
