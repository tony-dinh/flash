// @flow
import React, { useCallback } from 'react'
import classNames from 'classnames'
import Icon from 'components/icon'
import './styles.scss'

const HUDItem = ({className, helperText, id, iconName, isActive, onClick}: Props) => {
    const classes = classNames('c-hud-item', className, {
        'c-hud-item--active': isActive
    })
    const iconClasses = classNames('c-hud-item__icon')
    const click = useCallback(() => onClick(id), [id])

    return (
        <div className={classes} id={id} onClick={click}>
            <Icon className={iconClasses} name={iconName} />
            <span>{helperText}</span>
        </div>
    )
}

type Props = {
    className?: string,
    helperText: string,
    iconName: string,
    id: string,
    isActive: bool,
    onClick: (id: string) => void
}

export default HUDItem
