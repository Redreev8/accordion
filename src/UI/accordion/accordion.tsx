'use client'
import { FC, ReactNode, createContext, } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import useAccordion from './useAccordion'
import { UseBooleanReturn } from '../../hook/useBoolean'

export interface AccordionInterface {
    children: ReactNode
    onChange?: (n?: boolean) => void
    className?: string
    isActive?: boolean
}

export const AccordionContext = createContext<UseBooleanReturn[1]>(() => {})

const Accordion: FC<AccordionInterface> = ({ className, children, onChange, isActive = false, ...props }) => {
    const { refDiv, value, toggle } = useAccordion(isActive, onChange)
    const cl = classNames(style.accordion, className, {
        [style['accordion--active']]: value
    })
    return (
        <AccordionContext.Provider value={toggle}>
            <div ref={ refDiv } className={ cl } { ...props }>
                { children }
            </div>
        </AccordionContext.Provider>
    )
}

export default Accordion