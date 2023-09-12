import {FC, useState, useEffect} from 'react'
import MaskedInput from '@/app/components/MaskedInput'
import {config as cardNumberConfig} from '@/app/components/CardNumber'
import {CARD_NUMBER_PREFIX} from '@/app/constants/cardType'

const config = {
    name: 'cvv',
    nextFieldName: 'cardName',
    label: 'CVV',
    mask: '999',
    maxLength: 3
}

const configAmex = {
    name: 'cvv',
    nextFieldName: 'cardName',
    label: 'CVV',
    mask: '9999',
    maxLength: 4
}

const CVV: FC<any> = (props) => {
    const {watch, setValue} = props
    const [previousType, setPreviousType] = useState(false)
    const fieldValue = watch(cardNumberConfig.name)
    const firstNumber = fieldValue ? fieldValue[0] : null
    const isAmexType = firstNumber === CARD_NUMBER_PREFIX.AMEX
    const currentConfig = firstNumber === CARD_NUMBER_PREFIX.AMEX ? configAmex : config

    useEffect(() => {
        if (isAmexType !== previousType) {
            setValue(config.name, '')
            setPreviousType(isAmexType)
        }
    }, [isAmexType])

    return (
        <MaskedInput
            {...props}
            config={currentConfig}
        />
    )
}

export default CVV