'use client'
import {FC} from "react"
import {useMemo} from 'react'
import {useForm} from 'react-hook-form'
import CardNumber from '@/app/components/CardNumber'
import ExpirationDate from '@/app/components/ExpirationDate'
import CardName from '@/app/components/CardName'
import CVV from '@/app/components/CVV'
import {zodResolver} from '@hookform/resolvers/zod'
import cardFormSchema from '@/app/components/cardFormSchema'

const CardForm: FC<any> = () => {
    const defaultValues = useMemo(() => {
        return {
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            cardName: '',
        }
    }, [])

    const {
        handleSubmit,
        ...restFormProps
        // formState: {errors},
        // control,
        // setFocus,
        // watch,
        // setValue
    } = useForm({
        defaultValues,
        resolver: zodResolver(cardFormSchema),
        mode: 'onBlur', //"onChange",
        reValidateMode: 'onChange',
        shouldUnregister: true
    })

    const onSubmitHandler = (values) => {
        console.log('form values: ', values)
        //reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="card-form-wrapper">
            <div className="px-6 py-4">
                <CardNumber {...restFormProps}/>
                <div className="flex justify-center">
                    <ExpirationDate {...restFormProps}/>
                    <CVV {...restFormProps}/>
                </div>
                <CardName {...restFormProps}/>
                <input
                    className="submit"
                    type="submit"
                    value='Pay'
                />
            </div>
        </form>
    )
}

export default CardForm