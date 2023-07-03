import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './HomeForm.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import {
    formActions,
    selectEmail,
    selectPhone,
} from '../../../store/slices/form.slice'
import { HomeFormSchema } from '../../../shared/validations'
import { Button } from '../../../shared/ui/Button'
import { ControllerInput } from '../../FormControllers/ControllerInput'
import { ControllerPhoneInput } from '../../FormControllers/ControllerPhoneInput'
import { InputThemes } from '../../../shared/enums'
import { HomeFormInfo } from '../../../shared/types'

export const HomeForm: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const phoneNumber = useAppSelector(selectPhone)
    const email = useAppSelector(selectEmail)

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<HomeFormInfo>({
        defaultValues: {
            phoneNumber,
            email,
        },
        mode: 'onChange',
        resolver: yupResolver(HomeFormSchema),
    })

    const onSubmit: SubmitHandler<HomeFormInfo> = (data) => {
        const { phoneNumber, email } = data
        dispatch(formActions.setPhoneNumber(phoneNumber))
        dispatch(formActions.setEmail(email))

        dispatch(formActions.setActiveStep(1))
        dispatch(formActions.setIsFormStarted(true))
        navigate('/create')
    }

    useEffect(() => {
        dispatch(formActions.setActiveStep(0))
    }, [dispatch])

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapper}>
                <ControllerPhoneInput
                    control={control}
                    id='phoneNumber'
                    name='phoneNumber'
                    labeltext='Phone number'
                    type='tel'
                    placeholder='+7 999 999-99-99'
                    error={errors?.phoneNumber?.message}
                    theme={InputThemes.Gray}
                />

                <ControllerInput
                    control={control}
                    id='email'
                    name='email'
                    labeltext='Email'
                    placeholder='tim.jennings@example.com'
                    error={errors?.email?.message}
                    theme={InputThemes.Gray}
                />
            </div>
            <div className={styles.actions}>
                <Button type='submit' className={styles.button}>
                    Начать
                </Button>
            </div>
        </form>
    )
}
