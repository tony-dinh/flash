import React from 'react'
import classNames from 'classnames'
import Layout from 'components/layout'
import './styles.scss'

const Page = ({children, className}) => {
    const classes = classNames('c-page', className)
    return (
        <Layout className={classes}>
            {children}
        </Layout>
    )
}

export default Page
