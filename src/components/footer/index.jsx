import React from 'react'
import Flex from 'components/flex'
import Icon from 'components/icon'
import './styles.scss'

const MEDIA_LINKS = [
    {
        href: 'https://tonydinh.me/github',
        iconName: 'fab fa-github'
    },
    {
        href: 'https://tonydinh.me/linkedin',
        iconName: 'fab fa-linkedin'
    },
    {
        href: 'https://tonydinh.me',
        iconName: 'fas fa-globe'
    }
]

const Footer = () => {
    const classes = 'c-footer'
    const mediaLinksClasses = 'c-footer__media-links'
    const bylineClasses = 'c-footer__byline'

    return (
        <Flex as="footer" direction="column" className={classes}>
            <ul className={mediaLinksClasses}>
                {MEDIA_LINKS.map(({href, iconName}, i) => (
                    <li key={`media-${i}`}>
                        <a href={href}>
                            <Icon name={iconName} />
                        </a>
                    </li>
                ))}
            </ul>

            <span className={bylineClasses}>Copyright © Tony Dinh • 2019</span>
        </Flex>
    )
}


export default Footer
