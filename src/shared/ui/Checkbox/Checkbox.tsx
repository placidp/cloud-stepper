import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    forwardRef,
    useEffect,
    useState,
} from 'react'
import styles from './Checkbox.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import {
    formActions,
    selectCheckboxById,
} from '../../../store/slices/form.slice'

type CheckboxPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    id: string
    name: string
    onChangeChecked?: (checked: boolean) => void
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsType>(
    (props, ref) => {
        const { id, onChange, onChangeChecked, children, name, ...restProps } =
            props
        const dispatch = useAppDispatch()
        const checkbox = useAppSelector((state) =>
            selectCheckboxById(state, id),
        )
        const [checked, setChecked] = useState(checkbox?.checked || false)

        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e)

            const updatedCheckbox = {
                id,
                name,
                checked: e.target.checked,
            }

            onChangeChecked && onChangeChecked(e.target.checked)
            dispatch(formActions.changeCheckbox(updatedCheckbox))
        }

        useEffect(() => {
            if (checkbox) {
                setChecked(checkbox.checked)
            }
        }, [checkbox])

        return (
            <div className={styles.checkboxWrapper}>
                <input
                    id={id}
                    ref={ref}
                    type='checkbox'
                    onChange={onChangeCallback}
                    className={styles.checkbox}
                    defaultChecked={checked}
                    {...restProps}
                />
                <label htmlFor={id} className={styles.label}>
                    {children}
                </label>
            </div>
        )
    },
)
