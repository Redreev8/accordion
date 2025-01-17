import classNames from 'classnames'
import style from './container.module.scss'
import { Children, FC, ReactNode } from 'react'

interface Interface {
    children: ReactNode
    className?: string
}

const Container: FC<Interface> = ({ children, className }) => {
    const cl = classNames(style.container, className, {})
    return (
        <div className={ cl }>
            {
                Children.map(children, child => (
                    <div className={ style['container__col'] }>{ child }</div>
                ))
            }
        </div>
    )
}

export default Container