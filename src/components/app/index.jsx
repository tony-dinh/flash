// @flow
import React, {useCallback} from 'react'
import useKeypress from 'hook-book/use-keypress'
import {CARDS} from 'global/constants'
import useDeck from 'global/hooks/use-deck'
import FlashCards from 'components/flash-cards'
import HUDItem from 'components/hud-item'
import './styles.scss'

const App = () => {
    const {ArrowLeft, ArrowRight} = useKeypress()
    const {cards, flip, next, previous} = useDeck(CARDS)

    const onHUDClick = useCallback((key) => {
        switch (key) {
            case 'ArrowLeft': return previous()
            case 'ArrowRight': return next()
            case 'Spacebar': return flip()

            default: return
        }
    }, [flip, next, previous])

    const prevHudClasses = 'c-app__hud-prev'
    const nextHudClasses = 'c-app__hud-next'
    const cardsClasses = 'c-app__cards'

    return (
        <>
            <HUDItem
                className={prevHudClasses}
                helperText="Prev"
                id="ArrowLeft"
                iconName="fas fa-caret-square-left"
                isActive={ArrowLeft}
                onClick={onHUDClick}
            />

            <FlashCards
                className={cardsClasses}
                cards={cards}
                flipCard={flip}
                nextCard={next}
                previousCard={previous}
            />

            <HUDItem
                className={nextHudClasses}
                helperText="Next"
                id="ArrowRight"
                iconName="fas fa-caret-square-right"
                isActive={ArrowRight}
                onClick={onHUDClick}
            />
        </>
    )

}

export default App
