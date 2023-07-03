import { FC } from 'react'
import styles from './LinksList.module.scss'
import { userLinks } from '../../shared/mockData'
import { LinkItem } from '../../shared/ui/Link'

export const LinksList: FC = () => (
    <div className={styles.linksList}>
        {userLinks.map((link) => (
            <LinkItem key={link.id} title={link.title} href={link.href} />
        ))}
    </div>
)
