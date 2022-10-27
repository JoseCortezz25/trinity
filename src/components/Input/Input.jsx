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
      {...props}
    />
  )
}

export default Input
