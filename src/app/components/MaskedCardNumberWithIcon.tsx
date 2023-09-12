'use client'
import {FC} from "react"
import InputMask from 'react-input-mask'
import {useController} from 'react-hook-form'
import {useEffect} from 'react'
import CardIcon from '@/app/components/CardIcon'

const MaskedCardNumberWithIcon: FC<any> = ({formState: {errors}, control, setFocus, config, prefix}) => {
    const {name, nextFieldName, placeholder, label, mask, formatChars} = config

    const {
        field,
        fieldState: {invalid, isDirty},
    } = useController({name, control})

    const {onChange, onBlur, value} = field

    const handleOnChange = (e) => {
        e.persist()
        onChange(e.target.value)
    }

    useEffect(() => {
        if (isDirty && invalid === false) {
            nextFieldName && setFocus(nextFieldName)
        }
    }, [invalid])

    return (
        <div className="block-wrapper">
            <label htmlFor={name} className="label">{label}</label>
            <InputMask
                id={name}
                value={value}
                name={name}
                mask={mask}
                formatChars={formatChars}
                maskChar=''
                onChange={handleOnChange}
                onBlur={onBlur}
            >
                {(inputProps) => (
                    <div className="card-number-input-wrapper">
                        <input
                            {...inputProps}
                            ref={field.ref}
                            name={name}
                            type='text'
                            placeholder={placeholder}
                            className="input card-number-input"
                            suppressHydrationWarning
                            aria-invalid={errors[name]?.message ? 'true' : 'false'}
                        />
                        <div className="card-type-icon-wrapper">
                            <CardIcon firstSymbol={prefix}/>
                        </div>
                    </div>
                )}
            </InputMask>
            {errors[name]?.message &&
                <div className="errors">{errors[name]?.message}</div>}
        </div>
    )
}

export default MaskedCardNumberWithIcon