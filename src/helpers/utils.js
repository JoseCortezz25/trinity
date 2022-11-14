const numberGenerateRandomly = (min, max) => {
  const num = Math.random() * (max - min);
  return Math.round(num + min, 1)
}

const generateRandomUsername = (fullname) => `${fullname.replaceAll(' ', '_')}_${numberGenerateRandomly(0, 15000)}_${Date.now()}`

function validURL(str) {
  // eslint-disable-next-line prefer-regex-literals, no-useless-escape
  const pattern = new RegExp('^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$');
  return !!pattern.test(str);
}

export { numberGenerateRandomly, generateRandomUsername, validURL }
