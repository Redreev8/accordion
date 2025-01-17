"use client"
import { Children, forwardRef, ReactNode } from 'react'
import style from './list.module.scss'
import classNames from 'classnames'
interface ListInterface {
    children: ReactNode
    className?: string
    isBorder?: boolean
    isBorderBottom?: boolean
}

const List = forwardRef<HTMLUListElement, ListInterface>(
    ({ className = '', children, isBorder = false, isBorderBottom }, ref) => {
        const cl = classNames(style.list, className, {
            [style['list--border']]: isBorder,
            [style['list--no-border-last']]: isBorderBottom
        })

        return (
            <ul ref={ ref } className={ cl }>
            {
                    Children.map(children, child => (
                        <li className={ style['list__item'] }>{ child }</li>
                    ))
                }
            </ul>
        )
})

export default List
