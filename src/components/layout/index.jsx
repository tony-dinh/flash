// @flow

import React from 'react'
import type { Node } from 'react'
import Footer from 'components/footer'
import Flex from 'components/flex'
import './styles.scss'

const Layout = ({ children, className }: Props) => (
    <Flex align="center" className={className} direction="column" justify="center">
        <main>
            {children}
        </main>
        <Footer />
    </Flex>
)

type Props = {
    children: Node,
    className: string,
}

export default Layout
