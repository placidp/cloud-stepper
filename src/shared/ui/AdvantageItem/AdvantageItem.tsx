import { FC, SyntheticEvent, useCallback } from 'react'
import { ReactComponent as BinIcon } from '../../assets/bin.svg'

import styles from './AdvantageItem.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { formActions, selectAdvantages } from '../../../store/slices/form.slice'
import { Advantage } from '../../types/formDataTypes'

interface AdvantageItemProps {
    id?: string
    name?: string
    advantage: Advantage
    onChange?: (value: string) => void
}

export const AdvantageItem: FC<AdvantageItemProps> = (props) => {
    const { advantage } = props
    const dispatch = useAppDispatch()
    const advantages = useAppSelector(selectAdvantages)

    const changeAdvantageTextCallback = useCallback(
        (e: SyntheticEvent<HTMLInputElement>) => {
            const { value } = e.currentTarget
            dispatch(
                formActions.changeAdvantageText({
                    id: advantage.id,
                    text: value,
                }),
            )
        },
        [dispatch, advantage.id],
    )

    const deleteAdvantageCallback = useCallback(() => {
        dispatch(formActions.deleteAdvantage({ id: advantage.id }))
    }, [dispatch, advantage.id])

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                placeholder='Placeholder'
                value={
                    advantages?.find((item) => item.id === advantage.id)
                        ?.text || ''
                }
                onChange={changeAdvantageTextCallback}
            />
            <div className={styles.removeIconContainer}>
                <button
                    className={styles.removeButton}
                    type='button'
                    onClick={deleteAdvantageCallback}>
                    <BinIcon className={styles.icon} />
                </button>
            </div>
        </div>
    )
}
