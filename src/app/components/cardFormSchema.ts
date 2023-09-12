import { z } from 'zod'
import luhn from 'luhn'
import { CARD_NUMBER_PREFIX } from '@/app/constants/cardType'

const CURRENT_YEAR = 23

const cardFormSchema = z.object({
    cardNumber: z.string().refine((val) => {
        const cardNumber = val.replace(/ /g, '')

        if (!val || cardNumber.length < 16 || !luhn.validate(cardNumber as any)) {
            return false
        }

        return true
    }, { message: 'invalid card number' }),
    expirationDate: z.string().refine((val) => {
        const expirationDateParts = val.split('/')
        if (expirationDateParts.length < 2) {
            return false
        }
        const month = parseInt(expirationDateParts[0])
        const year = parseInt(expirationDateParts[1])

        const isMonth = month > 0 && month <= 12
        const isYear = year >= CURRENT_YEAR && year <= 99

        return isMonth && isYear
    }, { message: 'invalid date' }),
    cvv: z.string().min(3, { message: 'invalid CVV' }),
    // cardName: z.string().min(2, {message: 'invalid card name'}).max(25, {message: 'invalid card name'}),
}).refine((data) => {
    const { cardNumber, cvv } = data

    if (cardNumber && cardNumber[0] === CARD_NUMBER_PREFIX.AMEX && (!cvv || cvv.length < 4)) {
        return false
    }

    if (!cvv || cvv.length < 3) {
        return false
    }

    return true
}, {
    path: ['cvv'],
    message: "invalid CVV",
})

export default cardFormSchema