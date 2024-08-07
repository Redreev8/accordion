'use client'
import useBoolean from '../../hook/useBoolean'
import { useContext, useEffect, useRef } from 'react'
import { AccordionListContext } from './accordion-list'
import { AccordionInterface } from './accordion'
const useAccordion = (isActive: AccordionInterface['isActive'], onChange: AccordionInterface['onChange'],) => {
    const { itemsActive, push, remove } = useContext(AccordionListContext)
    const [value, toggle] = useBoolean(isActive)
    const refDiv = useRef<HTMLDivElement>(null)
    const check = () => {
        if (!refDiv.current) return
        const isActive = itemsActive.includes(refDiv.current)
        onChange && onChange(isActive)
        toggle(isActive)
    }

    useEffect(() => {
        check()
    }, [itemsActive])
    useEffect(() => {
        if (value) push(refDiv.current!)
        if (!value) remove(refDiv.current!)
    }, [value])

    return { refDiv, value, toggle }
}

export default useAccordion
