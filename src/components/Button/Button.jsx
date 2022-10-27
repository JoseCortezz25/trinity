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
  isDisabled,
  ...props
}) => {
  const handleClick = () => onClick()

  return (
    <button
      type={type}
      className={cs(s.button, s[color], isLoading && s.loading, className)}
      color={colorButton}
      disabled={isLoading || isDisabled}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? <span className={s.spinner} /> : children}
    </button>
  )
}

export { Button, colorSchema }
