import {FC} from "react"
import MaskedInput from '@/app/components/MaskedInput'

const config = {
    name: 'expirationDate',
    nextFieldName: 'cvv',
    label: 'Expiration date',
    placeholder: '  /  ',
    mask: '99/99',
}

const ExpirationDate: FC<any> = (props) => {
    return (
        <div className="mr-8">
            <MaskedInput
                {...props}
                config={config}
            />
        </div>
    )
}

export default ExpirationDate