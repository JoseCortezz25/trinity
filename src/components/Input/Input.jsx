import cs from 'classnames';
import s from './Input.module.css';


const Input = ({ placeholder, value, name, onChange, id, type, className, ...props }) => {
  const classes = cs(s.test);

  return (
    <input
      type={type}
      className={classes(s.input)}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  )
}

export default Input
