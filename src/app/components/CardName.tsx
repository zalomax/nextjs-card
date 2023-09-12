import {FC} from "react"
import MaskedInput from '@/app/components/MaskedInput'

const config = {
    name: 'cardName',
    nextFieldName: '',
    label: 'Card name',
    mask: 'rrrrrrrrrrrrrrrrrrrrrrrrr',
    formatChars: {r: '[a-zA-Z ]'}
}

const CardName: FC<any> = (props) => {
    return (
        <MaskedInput
            {...props}
            config={config}
        />
    )
}

export default CardName