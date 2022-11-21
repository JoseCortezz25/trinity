const numberGenerateRandomly = (min, max) => {
  const num = Math.random() * (max - min);
  return Math.round(num + min, 1)
}

const generateRandomUsername = (fullname) => `${fullname.replaceAll(' ', '_')}_${numberGenerateRandomly(0, 15000)}_${Date.now()}`

export { numberGenerateRandomly, generateRandomUsername }
