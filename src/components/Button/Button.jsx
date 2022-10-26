import cs from 'classnames'
// import { FiLoader } from 'react-icons/fi'

import s from './Button.module.css'

export const Button = ({
  children,
  className,
  variant = 'normal' | 'blue' | 'back',
  isLoading = false,
  color = 'gray' | 'blue' | 'back',
}) => {
  return (
    <button className={cs(s.button, s[`button-${color}`], className)}>
      {isLoading ? <span className={s.spinner} /> : children}
    </button>
  )
}
