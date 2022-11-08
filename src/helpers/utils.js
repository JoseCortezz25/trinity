const numberGenerateRandomly = (min, max) => {
  const num = Math.random() * (max - min);
  return Math.round(num + min, 1)
}

const generateRandomUsername = (fullname) => `${fullname.replaceAll(' ', '_')}_${numberGenerateRandomly(0, 15000)}_${Date.now()}`

function validURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

export { numberGenerateRandomly, generateRandomUsername, validURL }
