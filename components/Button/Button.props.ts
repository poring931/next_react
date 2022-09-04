import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes <HTMLButtonElement>,HTMLButtonElement > {
	children: ReactNode;
    type: 'primary' | 'hollow';
    arrow?:'right' | 'down' | 'none';
}