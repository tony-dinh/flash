// @flow

import React, {useMemo} from 'react'
import type {ComponentType, Node} from 'react'

const Flex = ({
    as: Element,
    align,
    children,
    className,
    direction = 'row',
    flex,
    justify
}: Props) => {
    const styles = useMemo(() => ({
        display: 'flex',
        flexDirection: direction,
        flex,
        alignItems: align,
        justifyContent: justify
    }), [direction, align, justify])

    return (
        <Element className={className} style={styles}>
            {children}
        </Element>
    )
}

type Props = {
    as: string | ComponentType<any>,
    align?: string,
    children?: Node,
    className?: string,
    direction?: 'column' | 'row',
    flex?: string,
    justify?: string
}

Flex.defaultProps = {
    as: 'div',
    direction: 'row'
}

export default Flex
