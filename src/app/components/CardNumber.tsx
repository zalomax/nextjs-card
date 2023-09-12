'use client'
import {FC} from "react"
import MaskedCardNumberWithIcon from '@/app/components/MaskedCardNumberWithIcon'

export const config = {
    name: 'cardNumber',
    nextFieldName: 'expirationDate',
    label: 'Card number',
    mask: '9999 9999 9999 9999 999',
}

const CardNumber: FC<any> = (props) => {
    const {watch} = props
    const fieldValue = watch(config.name)

    return (
        <MaskedCardNumberWithIcon
            {...props}
            config={config}
            prefix={fieldValue[0]}
        />
    )
}

export default CardNumber