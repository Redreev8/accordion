'use client'
import { ButtonHTMLAttributes, FC, ReactNode, useContext } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import { AccordionContext } from './accordion'
interface AccordionTitleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
}

const AccordionTitle: FC<AccordionTitleInterface> = ({ children, className, ...props }) => {
    const toggle = useContext(AccordionContext)
    const cl = classNames(style['accordion__btn'], className)
    return (
        <button className={ cl } onClick={ () => toggle() } { ...props }>
           { children }
        </button>
    )
}

export default AccordionTitle