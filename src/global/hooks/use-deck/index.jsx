// @flow

import {useCallback, useEffect, useReducer} from 'react'
import useKeypress from 'hook-book/use-keypress'
import reducer, {initialState} from './reducer'

const useDeck = (initCards: Array<any> = []) => {
    const {ArrowLeft, ArrowRight, ' ': Spacebar} = useKeypress()
    const [{activeIndex, cards}, dispatch] = useReducer(reducer, initialState)

    const flipCard = useCallback((isFlipped) => dispatch({type: 'FLIP', payload: {isFlipped}}), [dispatch])
    const nextCard = useCallback(() => dispatch({type: 'NEXT'}), [dispatch])
    const prevCard = useCallback(() => dispatch({type: 'PREV'}), [dispatch])

    useEffect(() => { dispatch({type: 'INIT', payload: {cards: initCards}}) }, [initCards])
    useEffect(() => { flipCard(!!Spacebar) }, [Spacebar, flipCard])
    useEffect(() => {
        if (ArrowLeft) {
            prevCard()
        } else if (ArrowRight) {
            nextCard()
        }
    }, [ArrowLeft, ArrowRight, nextCard, prevCard])

    return {
        activeIndex,
        cards: cards,
        flip: flipCard,
        next: nextCard,
        previous: prevCard,
    }
}

export default useDeck
