const numberGenerateRandomly = (min, max) => {
  const num = Math.random() * (max - min);
  return Math.round(num + min, 1)
}

const generateRandomUsername = (fullname) => `${fullname.replaceAll(' ', '_')}_${numberGenerateRandomly(0, 15000)}_${Date.now()}`
const generateRandomUrl = (fullname) => `${fullname.toLowerCase().replaceAll(' ', '-')}-${numberGenerateRandomly(0, 5)}-${Date.now()}`

function validURL(str) {
  // eslint-disable-next-line prefer-regex-literals, no-useless-escape
  const pattern = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})');
  return !!pattern.test(str);
}

export { numberGenerateRandomly, generateRandomUsername, validURL, generateRandomUrl }
