import cn from 'classnames'

import s from './Label.module.css'

const Label = ({ children, name, className, htmlFor, ...props }) => {
  return (
    <label
      className={cn(s.label, className)}
      name={name}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  )
}
export default Label
