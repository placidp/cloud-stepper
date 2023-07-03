import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './Credentials.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { SexOptions } from '../../../../shared/mockData'

import { FormButtons } from '../../../FormButtons/FormButtons'
import {
    formActions,
    selectName,
    selectNickname,
    selectSex,
    selectSurname,
} from '../../../../store/slices/form.slice'
import { ControllerInput } from '../../../FormControllers/ControllerInput'
import { StepOneSchema } from '../../../../shared/validations'
import { ControllerSelect } from '../../../FormControllers/ControllerSelect'
import { Steps } from '../../../../shared/enums'
import { StepOneInfo } from '../../../../shared/types'

export const Credentials: FC = () => {
    const dispatch = useAppDispatch()
    const nickname = useAppSelector(selectNickname)
    const name = useAppSelector(selectName)
    const surname = useAppSelector(selectSurname)
    const sex = useAppSelector(selectSex)

    const {
        handleSubmit,

        formState: { errors },
        control,
    } = useForm<StepOneInfo>({
        mode: 'onChange',
        defaultValues: {
            nickname,
            name,
            surname,
            sex,
        },
        resolver: yupResolver(StepOneSchema),
    })
    const onSubmit: SubmitHandler<StepOneInfo> = (data) => {
        const { name, nickname, surname, sex } = data
        dispatch(formActions.setName(name))
        dispatch(formActions.setNickname(nickname))
        dispatch(formActions.setSurname(surname))
        dispatch(formActions.setSex(sex))

        dispatch(formActions.setActiveStep(Steps.Two))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.wrapper}>
                <ControllerInput
                    control={control}
                    id='nickname'
                    name='nickname'
                    labeltext='Nickname'
                    type='text'
                    placeholder='johncode'
                    error={errors?.nickname?.message}
                />

                <ControllerInput
                    control={control}
                    id='name'
                    name='name'
                    labeltext='Name'
                    type='text'
                    placeholder='John'
                    error={errors?.name?.message}
                />

                <ControllerInput
                    control={control}
                    id='surname'
                    name='surname'
                    labeltext='Surname'
                    type='text'
                    placeholder='Doe'
                    error={errors?.surname?.message}
                />

                <ControllerSelect
                    control={control}
                    id='sex'
                    name='sex'
                    labeltext='Sex'
                    options={SexOptions}
                    placeholder='Не выбрано'
                />
            </div>

            <FormButtons />
        </form>
    )
}
