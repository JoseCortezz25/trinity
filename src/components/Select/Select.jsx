import { useState } from 'react'
import cn from 'classnames'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import s from './Select.module.css'

const Select = ({ options = [], placeholder = 'Select options', onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(placeholder)
  const classes = cn(s.container)

  const handleClick = () => setIsOpen(!isOpen)

  const handleOption = ({ target: { textContent, dataset } }) => {
    setTitle(textContent)
    onChange({ id: dataset.value, label: textContent })
    setIsOpen(false)
  }

  return (
    <div className={classes}>
      <div className={s.dropdown} onClick={handleClick}>
        {title}
        <div>{(isOpen && <FaChevronUp />) || <FaChevronDown />}</div>
      </div>
      <div className={cn(s.options, isOpen && s.isOpen)}>
        {options.map(({ label, id }) => (
          <li key={id} data-value={id} onClick={handleOption}>
            {label}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Select
