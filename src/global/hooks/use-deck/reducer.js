export const initialState = {
    activeIndex: 0,
    cards: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INIT': {
            const {cards} = action.payload
            return {
                ...initialState,
                cards: cards.map((card, i) => ({
                    ...card,
                    isActive: i === initialState.activeIndex,
                    isFlipped: false,
                }))
            }
        }

        case 'FLIP': {
            const {isFlipped} = action.payload
            const {activeIndex, cards} = state

            if (!cards.length) {
                return state
            }
            const nextCards = [...cards]
            const currentCard = {...nextCards[activeIndex]}
            nextCards[activeIndex] = currentCard

            currentCard.isFlipped = typeof isFlipped === 'boolean'
                ? isFlipped
                : !currentCard.isFlipped

            return {
                ...state,
                cards: nextCards
            }
        }

        case 'NEXT': {
            const {activeIndex, cards} = state

            if (!cards.length) {
                return state
            }

            const newCards = [...cards]
            const nextIndex = (activeIndex + 1) % newCards.length

            const currentCard = {...newCards[activeIndex], direction: 'left', isActive: false}
            const nextCard = {...newCards[nextIndex], direction: 'left', isActive: true}

            newCards[activeIndex] = currentCard
            newCards[nextIndex] = nextCard

            return {
                ...state,
                activeIndex: nextIndex,
                cards: newCards
            }
        }

        case 'PREV': {
            const {activeIndex, cards} = state

            if (!cards.length) {
                return state
            }

            const newCards = [...cards]
            const nextIndex = (activeIndex - 1 + newCards.length) % newCards.length

            const currentCard = {...newCards[activeIndex], direction: 'right', isActive: false}
            const nextCard = {...newCards[nextIndex], direction: 'right', isActive: true}

            newCards[activeIndex] = currentCard
            newCards[nextIndex] = nextCard

            return {
                ...state,
                activeIndex: nextIndex,
                cards: newCards
            }
        }

        default:
            return state
    }
}
