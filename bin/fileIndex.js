const fs = require('fs')
const path = require('path')

const componentsFolder = path.resolve(process.cwd(), 'src/components')

const folders = fs.readdirSync(componentsFolder, { withFileTypes: true })

folders.filter(({ name }) => name !== 'index.js').forEach(({ name }) => {
  fs.writeFileSync(path.resolve(componentsFolder, name, 'index.js'), `export { default } from './${name}'`)

  console.log(`[+] component ${name} completed ✔🐱‍💻`)
})
