import cs from 'classnames'
import s from './Input.module.css'

const Input = ({
  placeholder,
  value,
  name,
  onChange,
  id,
  type,
  className,
  minLength,
  ...props
}) => {
  const classes = cs(s.input, className)

  return (
    <input
      id={id}
      type={type}
      className={classes}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      minLength={minLength}
      {...props}
    />
  )
}

export default Input
