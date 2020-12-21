/**
 * Calculate something
 * @param num1 The first Number
 * @param num2 The second Number
 * @param type The operation type (Types accepted: "+", "=", "*", "/")
 */
export const calculator = (num1: number, num2: number, type: string): number => {
    if (type === '+') return num1 + num2
    else if (type === '-') return num1 - num2
    else if (type === '*') return num1 * num2
    else if (type === '/') {
        if (num1 === 0) return num1 / num2
        else if (num2 === 0) return num2 / num1
        else return num1 / num2
    }
}
