import {FC} from "react"
import VisaSvg from '/assets/visa.svg'
import MastercardSvg from '/assets/mastercard.svg'
import AmexSvg from '/assets/amex.svg'
import CreditCardSvg from '/assets/credit-card.svg'
import Image from 'next/image'
import {CARD_NUMBER_PREFIX} from '@/app/constants/cardType'

const getCardIcon = (prefix) => {
    switch (prefix) {
        case CARD_NUMBER_PREFIX.AMEX:
            return AmexSvg
        case CARD_NUMBER_PREFIX.VISA:
            return VisaSvg
        case CARD_NUMBER_PREFIX.MASTERCARD:
            return MastercardSvg
        default:
            return CreditCardSvg
    }
}

type Props = {
    firstSymbol: string
}

const CardIcon: FC<Props> = ({firstSymbol}) => {
    return (
        <Image
            priority
            height={32}
            width={32}
            src={getCardIcon(firstSymbol)}
            alt='visa'
        />
    )
}

export default CardIcon