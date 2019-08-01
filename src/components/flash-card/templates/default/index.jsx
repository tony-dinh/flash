// @flow
import React from 'react'
import './styles.scss'

const DefaultCardTemplate = ({label, text}: Props) => {
    const classes = 'c-flash-card-default'
    return (
        <div className={classes}>
            <p>{text}</p>
        </div>
    )
}

type Props = {
    label: string,
    text: string
}

export default DefaultCardTemplate
