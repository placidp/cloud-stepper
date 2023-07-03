import { FC } from 'react'
import styles from './Avatar.module.scss'
import { userFullName } from '../../constants'
import { getInitials } from '../../helpers'

const initials = getInitials(userFullName)

export const Avatar: FC = () => (
    <div className={styles.avatar}>
        <h5>{initials}</h5>
    </div>
)
