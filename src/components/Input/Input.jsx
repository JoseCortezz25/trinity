import cs from 'classnames';
import s from './Input.module.css';


const Input = ({ placeholder, value, name, onChange, id, type, className, ...props }) => {
  const classes = cs(s.input);

  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  )
}

export default Input
