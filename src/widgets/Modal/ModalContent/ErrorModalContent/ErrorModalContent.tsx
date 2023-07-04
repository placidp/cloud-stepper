import { FC } from 'react'
import { ReactComponent as ErrorIcon } from '../../../../shared/assets/error.svg'
import { ReactComponent as CloseIcon } from '../../../../shared/assets/close.svg'
import { classNames } from '../../../../shared/helpers'
import { Button } from '../../../../shared/ui/Button'
import { ResponseType } from '../../../../shared/types'

import styles from './ErrorModalContent.module.scss'

interface ErrorModalContentProps {
    onClose: () => void
    response?: ResponseType
}

export const ErrorModalContent: FC<ErrorModalContentProps> = ({
    onClose,
    response,
}) => (
    <div className={styles.modalContainer}>
        <div className={styles.error}>
            <div className={styles.errorHeader}>
                <p className={styles.errorTitle}>
                    {response?.message || 'Error!'}
                </p>
                <CloseIcon className={styles.iconClose} onClick={onClose} />
            </div>
            <div
                className={classNames(styles.imageContainer, {
                    [styles.errorImage]: true,
                })}>
                <ErrorIcon />
            </div>
            <div className={styles.errorFooter}>
                <Button onClick={onClose}>Закрыть</Button>
            </div>
        </div>
    </div>
)
