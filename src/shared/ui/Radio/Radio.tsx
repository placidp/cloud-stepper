import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    forwardRef,
} from 'react'
import styles from './Radio.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

type RadioPropsType = DefaultInputPropsType & {
    id: string
    name: string
    value: string
    onChangeChecked?: (checked: boolean) => void
}

export const Radio = forwardRef<HTMLInputElement, RadioPropsType>(
    (props: RadioPropsType, ref) => {
        const {
            id,
            name,
            value,
            onChange,
            onChangeChecked,
            children,
            ...restProps
        } = props

        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)
            onChangeChecked && onChangeChecked(e.target.checked)
        }
        return (
            <div className={styles.radioWrapper}>
                <input
                    ref={ref}
                    id={id}
                    name={name}
                    type='radio'
                    onChange={onChangeCallback}
                    className={styles.radio}
                    {...restProps}
                />
                <label htmlFor={id} className={styles.label}>
                    {value}
                </label>
            </div>
        )
    },
)
