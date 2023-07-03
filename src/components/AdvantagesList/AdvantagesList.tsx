import { FC } from 'react'
import styles from './AdvantagesList.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { formActions, selectAdvantages } from '../../store/slices/form.slice'
import { Advantage } from '../../shared/types/formDataTypes'
import { AdvantageItem } from '../../shared/ui/AdvantageItem'
import { Button } from '../../shared/ui/Button'
import { ButtonThemes } from '../../shared/enums'

interface AdvantagesListProps {
    errors: any
}

export const AdvantagesList: FC<AdvantagesListProps> = (props) => {
    const { errors } = props

    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectAdvantages)

    const advantageId = new Date().getTime().toFixed()

    return (
        <div className={styles.advantages}>
            <label htmlFor='advantages'>Advantages</label>
            {advantages &&
                advantages.map((item: Advantage) => (
                    <div className={styles.formGroup} key={item.id}>
                        <AdvantageItem advantage={item} />
                    </div>
                ))}
            <Button
                theme={ButtonThemes.Add}
                onClick={() =>
                    dispatch(
                        formActions.addNewAdvantage({
                            id: advantageId,
                            text: '',
                        }),
                    )
                }
                type='button'>
                +
            </Button>
            {errors?.advantages && (
                <div style={{ color: 'red' }}>{errors?.advantages.message}</div>
            )}
        </div>
    )
}
