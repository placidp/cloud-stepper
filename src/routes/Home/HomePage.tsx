import styles from './HomePage.module.scss';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { UserInfo } from '../../widgets/UserInfo';
import { HomeForm } from '../../components/FormSteps';

const HomePage = () => (
  <PageWrapper className={styles.homePage}>
    <UserInfo />
    <HomeForm />
  </PageWrapper>
);

export default HomePage;
