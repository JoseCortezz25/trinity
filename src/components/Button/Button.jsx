import cs from 'classnames'
// import { FiLoader } from 'react-icons/fi'

import s from './Button.module.css'

const colorSchema = {
  gray: 'colorGray',
  blue: 'colorBlue',
  black: 'colorBlack',
}

const Button = ({
  type = 'button',
  children,
  className,
  isLoading = false,
  color = 'colorGray',
  colorButton,
  onClick,
  ...props
}) => {
  console.log(color)
  const handleClick = () => onClick()

  return (
    <button
      type={type}
      className={cs(s.button, s[color], className)}
      color={colorButton}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? <span className={s.spinner} /> : children}
    </button>
  )
}

export { Button, colorSchema }
