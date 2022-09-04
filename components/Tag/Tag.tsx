import React from 'react'
import { TagProps } from './Tag.props'
import styles from './Tag.module.css';

const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
  const Sizes = {
      'm':  styles.m,
      's':  styles.s,
  }
  const Colors = {
      'ghost':  styles.ghost,
      'red':  styles.red,
      'grey':  styles.grey,
      'green':  styles.green,
      'primary':  styles.primary,
  }

  return (
		<div className= { [ styles.tag, className, Sizes[size], Colors[color] ].join(' ') }
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
  )

}

export default Tag