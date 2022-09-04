import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.module.css';
import ArrowIcon from './arrow-right__icon.svg';

const Button = ({ type, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
        className={
            [
                styles.button,
                className,
                type != 'primary' ? styles.hollow : styles.primary
            ]
            .join(' ')
        }
        {...props}
    >
        {children}
        {
          console.log(ArrowIcon)
        }
        { 
          arrow != 'none' && 
          <span className={            [
                styles.arrow,
                arrow == 'down' ? styles.down : styles.right
            ]
            .join(' ')} >
                <img loading='lazy' decoding='async' height={ArrowIcon.height} width={ArrowIcon.width} src={ArrowIcon.src} alt="" />
          </span> 
        }
    </button>
  )
}

export default Button