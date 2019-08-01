// @flow
import React from 'react'
import type {Element, ComponentType, Node} from 'react'
import classNames from 'classnames'

import Flex from 'components/flex'
import './styles.scss'

const FlashCard = ({
    as: Element,
    back,
    children,
    className,
    front,
    isFlipped,
    isKept,
    renderBack: Back,
    renderFront: Front,
    showTip,
    onFlip,
}: Props) => {
    const classes = classNames('c-flash-card', className)
    const innerClasses = classNames('c-flash-card__inner', {
        'c-flash-card__inner--flipped': isFlipped,
        'c-flash-card__inner--show-tip': showTip,
    })
    const frontClasses = classNames('c-flash-card__front')
    const backClasses = classNames('c-flash-card__back')

    return (
        <Element className={classes} onClick={onFlip}>
            <div className={innerClasses}>
                {/* Front */}
                <Flex align="center" className={frontClasses} justify="center">
                    {Front && <Front {...front} />}
                </Flex>

                {/* Back */}
                <Flex align="center" className={backClasses} justify="center">
                    {Back && <Back {...back} />}
                </Flex>
            </div>
        </Element>
    )
}

type Props = {
    as: ComponentType<any>,
    back: {},
    children?: Node,
    className?: string,
    front: {},
    isFlipped: bool,
    renderBack: (props: {}) => Element,
    renderFront: (props: {}) => Element,
    showTip: bool,
    onFlip: () => void,
}

FlashCard.defaultProps = {
    as: 'div',
    isFlipped: false,
    showTip: true,
}

export default FlashCard
