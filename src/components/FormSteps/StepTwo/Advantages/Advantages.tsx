import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Advantages.module.scss'
import { StepTwoInfo } from '../../../../shared/types'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { FormButtons } from '../../../FormButtons/FormButtons'
import {
    formActions,
    selectAdvantages,
    selectCheckboxesOptions,
    selectRadioOptions,
} from '../../../../store/slices/form.slice'
import { CheckboxGroup } from '../../../Groups/CheckboxGroup/CheckboxGroup'
import { RadioGroup } from '../../../Groups/RadioGroup/RadioGroup'
import { Steps } from '../../../../shared/enums'
import { AdvantagesList } from '../../../AdvantagesList'

export const Advantages: FC = () => {
    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectAdvantages)
    const checkboxesOptions = useAppSelector(selectCheckboxesOptions)
    const radioOptions = useAppSelector(selectRadioOptions)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<StepTwoInfo>({
        mode: 'onChange',
        defaultValues: {
            advantages,
            checkboxesOptions,
            radioOptions,
        },
    })

    const onSubmit: SubmitHandler<StepTwoInfo> = () => {
        dispatch(formActions.setActiveStep(Steps.Three))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.wrapper}>
                <AdvantagesList errors={errors.advantages?.message} />
                <CheckboxGroup control={control} />
                <RadioGroup control={control} />
            </div>
            <FormButtons />
        </form>
    )
}
