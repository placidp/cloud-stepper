import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    forwardRef,
} from 'react'
import styles from './Textarea.module.scss'
import { useAppDispatch } from '../../../store/hooks'
import { formActions } from '../../../store/slices/form.slice'
import { classNames } from '../../helpers'

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>

type TextareaPropsType = DefaultInputPropsType & {
    id?: string
    name?: string
    labeltext?: string
    textLength?: number
    textMaxLength?: string
    error?: any
    onChangeText?: (value: string) => void
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsType>(
    (props, ref) => {
        const {
            id,
            name,
            labeltext,
            textLength,
            textMaxLength,
            error,
            onChange,
            onChangeText,
            ...restProps
        } = props

        const dispatch = useAppDispatch()
        const textareaClassNames = classNames(styles.textarea, {
            [styles.error]: error,
        })

        const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
            if (onChange) {
                onChange(e)
                dispatch(formActions.setAboutText(e.currentTarget.value))
            }
            if (onChangeText) {
                onChangeText(e.currentTarget.value)
            }
        }

        return (
            <div className={styles.textareaWrapper}>
                {labeltext && (
                    <label htmlFor={id} className={styles.label}>
                        {labeltext}
                    </label>
                )}
                <textarea
                    ref={ref}
                    placeholder={props.placeholder}
                    id={id}
                    name={name}
                    className={textareaClassNames}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <div className={styles.textareaLength}>
                    {textLength} / {textMaxLength}
                </div>

                {error && (
                    <div className={styles.errorWrapper}>
                        {error && (
                            <span className={styles.errorText}>{error}</span>
                        )}
                    </div>
                )}
            </div>
        )
    },
)
