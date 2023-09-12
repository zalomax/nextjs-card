'use client'
import { FC, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { useController } from 'react-hook-form'

const MaskedInput: FC<any> = ({ formState: { errors }, control, setFocus, config }) => {
    const { name, nextFieldName, placeholder, label, mask, formatChars, maxLength = null } = config

    const {
        field,
        fieldState: { invalid, isDirty },
    } = useController({ name, control })

    const { onChange, onBlur, value } = field

    const handleOnChange = (e: any) => {
        e.persist()
        onChange(e.target.value)
    }

    useEffect(() => {
        if (isDirty && invalid === false) {
            nextFieldName && setFocus(nextFieldName)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {(inputProps: any) => (
                    <input
                        {...inputProps}
                        ref={field.ref}
                        name={name}
                        type='text'
                        placeholder={placeholder}
                        maxLength={maxLength}
                        className="input"
                        suppressHydrationWarning
                        aria-invalid={errors[name]?.message ? 'true' : 'false'}
                    />
                )}
            </InputMask>
            {errors[name]?.message &&
                <div className="errors">{errors[name]?.message}</div>}
        </div>
    )
}

export default MaskedInput