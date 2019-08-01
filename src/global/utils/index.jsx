// @flow

/**
 * Generates a random integer in the interval [min, max] (inclusive)
 */
export const randomInt = (min: Number = 0, max: Number = 100): Number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
