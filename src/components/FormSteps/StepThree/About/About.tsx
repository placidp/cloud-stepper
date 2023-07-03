import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './About.module.scss'
import { FormButtons } from '../../../FormButtons/FormButtons'
import { StepThreeInfo } from '../../../../shared/types'
import { ControllerTextarea } from '../../../FormControllers/ControllerTextarea'
import { useSendDataMutation } from '../../../../store/api/formApi'
import { StepThreeSchema } from '../../../../shared/validations'
import { useAppSelector } from '../../../../store/hooks'
import { CSSTransition } from 'react-transition-group'
import {
    selectAboutText,
    selectFormData,
} from '../../../../store/slices/form.slice'
import { Modal } from '../../../../widgets/Modal'

export const About: FC = () => {
    const [sendFormData, { data, isError, isSuccess }] = useSendDataMutation()
    const aboutTextValue = useAppSelector(selectAboutText)
    const formData = useAppSelector(selectFormData)
    console.log('formData', formData)
    console.log(data, isError, isSuccess)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<StepThreeInfo>({
        mode: 'onChange',
        defaultValues: {
            aboutTextValue,
        },
        resolver: yupResolver(StepThreeSchema),
    })

    const onSubmit: SubmitHandler<StepThreeInfo> = async () => {
        try {
            await sendFormData(formData)
        } catch (e) {
            if (typeof e === 'string') {
                console.log(e)
            } else if (e instanceof Error) {
                console.log(e.message)
            }
        }
        setIsModalOpen(true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
            <div className={styles.wrapper}>
                <ControllerTextarea
                    id='field-about'
                    name='aboutTextValue'
                    placeholder='Placeholder'
                    labeltext='About'
                    control={control}
                    error={errors.aboutTextValue?.message}
                    textMaxLength='200'
                />

                <CSSTransition
                    in={isModalOpen}
                    timeout={200}
                    classNames='modal'
                    unmountOnExit>
                    <Modal
                        setIsModalOpen={setIsModalOpen}
                        isSuccess={isSuccess}
                        isError={isError}
                        response={data}
                    />
                </CSSTransition>
            </div>
            <FormButtons />
        </form>
    )
}
