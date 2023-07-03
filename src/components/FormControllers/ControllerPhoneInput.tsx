import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import styles from '../../shared/ui/Input/Input.module.scss'
import { classNames } from '../../shared/helpers'
import { InputThemes } from '../../shared/enums'

interface ControllerPhoneInputProps {
    id?: string
    name: string
    placeholder?: string
    labeltext?: string
    control: any
    type?: string
    theme?: string
    error?: any
}

export const ControllerPhoneInput = (props: ControllerPhoneInputProps) => {
    const {
        name,
        placeholder,
        labeltext,
        control,
        id,
        type,
        theme = InputThemes.White,
        error,
    } = props

    const inputClassNames = classNames(styles.input, {
        [styles[theme]]: true,
        [styles.error]: error,
    })
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }: any) => (
                <div className={styles.inputGroup}>
                    {labeltext && <label htmlFor={id}>{labeltext}</label>}
                    <InputMask
                        {...field}
                        mask='+7 (999) 999-99-99'
                        className={inputClassNames}
                        type={type}
                        id={id}
                        labeltext={labeltext}
                        placeholder={placeholder}
                        value={field.value}
                        theme={theme}
                        error={error}
                    />
                    {error && (
                        <div className={styles.errorWrapper}>
                            {error && (
                                <span className={styles.errorText}>
                                    {error}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            )}
        />
    )
}
