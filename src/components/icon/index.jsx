import React from 'react'
import classNames from 'classnames'
import './styles.scss'

const Icon = ({className, name}) => {
    const classes = classNames(className, name)
    return (<i className={classes} />)
}

export default Icon
