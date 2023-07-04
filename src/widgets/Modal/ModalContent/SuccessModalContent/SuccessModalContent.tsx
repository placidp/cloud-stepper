import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../shared/ui/Button'
import { ReactComponent as SuccessIcon } from '../../../../shared/assets/success.svg'
import { RouteEndpoints } from '../../../../shared/enums'
import { classNames } from '../../../../shared/helpers'
import styles from './SuccessModalContent.module.scss'
import { ResponseType } from '../../../../shared/types'
import { FC } from 'react'

interface SuccessModalContentProps {
    response?: ResponseType
}

export const SuccessModalContent: FC<SuccessModalContentProps> = ({
    response,
}) => {
    const navigate = useNavigate()

    return (
        <div className={styles.modalContainer}>
            <div className={styles.success}>
                <div className={styles.successHeader}>
                    <p className={styles.successTitle}>
                        {response?.message || 'Success!'}
                    </p>
                </div>
                <div
                    className={classNames(styles.imageContainer, {
                        [styles.successImage]: true,
                    })}>
                    <SuccessIcon />
                </div>
                <div className={styles.successFooter}>
                    <Button onClick={() => navigate(RouteEndpoints.Home)}>
                        На главную
                    </Button>
                </div>
            </div>
        </div>
    )
}
