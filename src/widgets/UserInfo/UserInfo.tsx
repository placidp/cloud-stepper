import { FC } from 'react'
import styles from './UserInfo.module.scss'
import { Avatar } from '../../shared/ui/Avatar'
import { userFullName } from '../../shared/constants'
import { LinksList } from '../../components/LinksList'

export const UserInfo: FC = () => (
    <div className={styles.userInfoWrapper}>
        <div className={styles.header}>
            <Avatar />
            <div className={styles.userDetails}>
                <h3 className={styles.fullName}>{userFullName}</h3>
                <LinksList />
            </div>
        </div>
    </div>
)
