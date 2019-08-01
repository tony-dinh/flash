import React from 'react'
import App from 'components/app'
import SEO from 'components/seo'
import Page from 'components/page'

const HomePage = () => {
    return (
        <Page>
            <SEO title="Flash" />
            <App />
        </Page>
    )
}


export default HomePage
