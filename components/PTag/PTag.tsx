import React from 'react'
import { PTagProps } from './PTag.props'
import styles from './PTag.module.css';

const PTag = ({ size = 'm', children, className, ...props }: PTagProps): JSX.Element => {
  const pSizes = {
      'm':  styles.m,
      's':  styles.s,
      'l':  styles.l,
  }

  return (
    <p
			className= { [ styles.p, className, pSizes[size] ].join(' ') }
			{...props}
		>
			{children}
		</p>
  )

}

export default PTag