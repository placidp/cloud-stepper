import { Stepper } from '../../widgets/Stepper'
import styles from './FormPage.module.scss'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import { useAppSelector } from '../../store/hooks'
import { selectActiveStep } from '../../store/slices/form.slice'
import { StepOne, StepThree, StepTwo } from '../../components/FormSteps'

const FormPage = () => {
    const activeStep = useAppSelector(selectActiveStep)

    function getSectionComponent() {
        switch (activeStep) {
            case 1:
                return <StepOne />
            case 2:
                return <StepTwo />
            case 3:
                return <StepThree />
            default:
                return null
        }
    }

    return (
        <PageWrapper className={styles.formPage}>
            <Stepper />
            {getSectionComponent()}
        </PageWrapper>
    )
}

export default FormPage
