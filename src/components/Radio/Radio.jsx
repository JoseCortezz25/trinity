import { useId } from 'react'
import cn from 'classnames'

import { Label } from '../Label'
import { useRadio } from '../../contexts'

import s from './Radio.module.css'

const Radio = ({
  innerRef,
  className,
  isDisabled,
  value,
  children,
  defaultChecked,
  ...props
}) => {
  const { name, onChange, value: valueCtx } = useRadio()
  const radioId = useId()

  const handleChange = (event) => {
    event.preventDefault()
    onChange(value)
  }

  return (
    <div className={cn(s.container, className)} tabIndex={0}>
      <span
        className={cn(
          s.baseRadio,
          valueCtx === value && s.isChecked,
          isDisabled && s.isDisabled
        )}
      />
      <input
        id={radioId}
        type="radio"
        ref={innerRef}
        className={s.input}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        disabled={isDisabled}
        onChange={handleChange}
        {...props}
      />
      <Label className={s.label} htmlFor={radioId}>
        {children}
      </Label>
    </div>
  )
}

export default Radio
