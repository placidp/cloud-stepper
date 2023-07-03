import { FC } from 'react';
import styles from './ErrorPage.module.scss';
import { RouteEndpoints } from '../../shared/enums';
import { Button } from '../../shared/ui/Button';

const ErrorPage: FC = () => (
  <div className={styles.errorPage}>
    <h1>Такой страницы не существует ☹️</h1>
    <Button to={RouteEndpoints.Home}>Вернуться</Button>
  </div>
);
export default ErrorPage;
