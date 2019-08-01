// @flow
import React from 'react'
import classNames from 'classnames'
import HUDItem from 'components/hud-item'
import Flex from 'components/flex'
import './styles.scss'

const HUD = ({arrowLeft, arrowRight, className, spacebar, onItemClick}: Props) => {
    const classes = classNames('c-hud', className)

    return (
        <Flex className={classes} justify="space-between">
            <HUDItem
                id="ArrowLeft"
                helperText="Keep"
                iconName="fas fa-caret-square-left"
                isActive={arrowLeft}
                onClick={onItemClick}
            />
            <HUDItem
                id="Spacebar"
                helperText="Reveal"
                iconName="fas fa-rectangle-wide"
                isActive={spacebar}
                onClick={onItemClick}
            />
            <HUDItem
                id="ArrowRight"
                helperText="Done"
                iconName="fas fa-caret-square-right"
                isActive={arrowRight}
                onClick={onItemClick}
            />
        </Flex>
    )
}

type Props = {
    arrowLeft: bool,
    arrowRight: bool,
    className: string,
    spacebar: bool,
    onItemClick: (id: string) => void
}

export default HUD
