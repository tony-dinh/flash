import DefaultTemplate from 'components/flash-card/templates/default'
import {randomInt} from 'global/utils'

export const CARDS = Array(30)
    .fill()
    .map(() => {
        const firstNumber = randomInt(1, 12)
        const secondNumber = randomInt(1, 12)

        return {
            front: {text: `${firstNumber} × ${secondNumber} = ?`},
            back: {text: `${firstNumber * secondNumber}`},
            renderBack: DefaultTemplate,
            renderFront: DefaultTemplate,
        }
    })
