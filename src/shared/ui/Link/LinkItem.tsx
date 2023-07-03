import { FC } from 'react';
import styles from './LinkItem.module.scss';
import { ReactComponent as LinkIcon } from '../../assets/folder.svg';

interface LinkItemProps {
  title: string;
  href: string;
}

export const LinkItem: FC<LinkItemProps> = (props) => {
  const { title, href } = props;

  return (
    <li className={styles.root}>
      <LinkIcon />
      <a href={href}>{title}</a>
    </li>
  );
};
