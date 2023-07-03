import {
    ChangeEvent,
    ForwardedRef,
    InputHTMLAttributes,
    forwardRef,
} from 'react'
import styles from './Input.module.scss'
import { InputThemes } from '../../enums'
import { classNames } from '../../helpers'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string
    name?: string
    id?: string
    labeltext?: string
    placeholder?: string
    error?: any
    theme?: InputThemes.White | InputThemes.Gray
    onChangeText?: (value: string) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            type,
            name,
            id,
            placeholder,
            labeltext,
            theme = InputThemes.White,
            onChange,
            error,
            value,
            ...rest
        } = props

        const inputClassNames = classNames(styles.input, {
            [styles[theme]]: true,
            [styles.error]: error,
        })

        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)
        }

        return (
            <div className={styles.inputGroup}>
                {labeltext && <label htmlFor={id}>{labeltext}</label>}

                <input
                    ref={ref}
                    name={name}
                    type={type}
                    onChange={onChangeCallback}
                    id={id}
                    className={inputClassNames}
                    placeholder={placeholder}
                    value={value}
                    {...rest}
                />

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
