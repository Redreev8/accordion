'use client'
import { createContext, FC, HTMLProps, ReactNode, useRef } from 'react'
import style from './accordion.module.scss'
import classNames from 'classnames'
import List from '../list'
import useMaxItem, { UseMaxItemReturn } from '../../hook/useMaxItem'
import useIsBorder from '../../hook/useIsBorder'
interface AccordionListInterface extends HTMLProps<HTMLUListElement> {
    children: ReactNode
    className?: string
    max?: number
}

export const AccordionListContext = createContext<UseMaxItemReturn<HTMLDivElement>>({ itemsActive: [], push: () => {}, remove: () => {} })

const AccordionList: FC<AccordionListInterface> = ({ children, className, max = 1, ...props }) => {
    const cl = classNames(style['accordion-list'], className)
    const ref = useRef<HTMLUListElement>(null)
    const [isBorderBottom] = useIsBorder({ tag: ref.current, gap: 16 })
    const { itemsActive, push, remove } = useMaxItem<HTMLDivElement>(max)
    return (
        <AccordionListContext.Provider value={{ itemsActive, push, remove }}>
            <List className={ cl } isBorder ref={ ref } isBorderBottom={ isBorderBottom } { ...props }>
                { children }
            </List>
        </AccordionListContext.Provider>
    )
}

export default AccordionList
