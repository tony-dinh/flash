import React from 'react'
import classNames from 'classnames'
import {CSSTransition} from 'react-transition-group'
import FlashCard from 'components/flash-card'
import './styles.scss'

const FlashCards = ({cards, className, flipCard}) => {
    const classes = classNames('c-flash-cards', className)

    return (
        <ol className={classes}>
            {cards.map((card, i) => {
                const classes = classNames('c-flash-cards__card', {
                    'c-flash-cards__card--hidden': !card.isActive && !card.direction,
                    [`c-flash-cards__card--appear-${card.direction}`]: card.isActive && card.direction,
                    [`c-flash-cards__card--fade-${card.direction}`]: !card.isActive && card.direction,
                })

                return (
                    <CSSTransition key={`card-${i}`}
                        in={card.isActive}
                        timeout={{
                            appear: 750,
                            exit: 500
                        }}
                        unmountOnExit
                    >
                        <FlashCard as="li" className={classes} {...card} onFlip={flipCard} />
                    </CSSTransition>
                )
            })}
        </ol>
    )
}

export default FlashCards
