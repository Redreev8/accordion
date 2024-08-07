'use client'
import { ButtonHTMLAttributes, forwardRef, ReactNode, useContext } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import { AccordionContext } from './accordion'
interface AccordionTitleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
}

const AccordionTitle = forwardRef<HTMLButtonElement, AccordionTitleInterface>(({ children, className, ...props }, ref) => {
    const toggle = useContext(AccordionContext)
    const cl = classNames(style['accordion__btn'], className)
    return (
        <button className={ cl } ref={ ref } onClick={ () => toggle() } { ...props }>
           { children }
        </button>
    )
})

export default AccordionTitle