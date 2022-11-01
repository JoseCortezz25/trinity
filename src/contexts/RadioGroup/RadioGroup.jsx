import { createContext, useContext, useState } from 'react'

import { noop } from '../../helpers/noop'

const RadioContext = createContext({
  name: '',
  value: '',
  onChange: noop,
})

function RadioProvider({ name, value, onChange, children }) {
  const [valueCtx, setValueCtx] = useState(value)

  if (!name) throw new Error('you need put some value to property `name`')

  const handleChange = (newValue) => {
    setValueCtx(newValue)
    onChange && onChange(newValue)
  }

  return (
    <RadioContext.Provider
      value={{ name, value: valueCtx, onChange: handleChange }}
    >
      {children}
    </RadioContext.Provider>
  )
}

const useRadio = () => useContext(RadioContext)

export { RadioContext, useRadio }
export default RadioProvider
