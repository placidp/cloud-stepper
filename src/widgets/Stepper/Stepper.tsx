import { FC } from 'react'
import { useAppSelector } from '../../store/hooks'
import { selectActiveStep, selectSteps } from '../../store/slices/form.slice'
import styles from './Stepper.module.scss'

export const Stepper: FC = () => {
    const steps = useAppSelector(selectSteps)
    const activeStep = useAppSelector(selectActiveStep)

    function getStepClass(step: number) {
        let cls = styles.step
        if (activeStep === step) {
            cls += ` ${styles.stepActive}`
        } else if (activeStep > step) {
            cls += ` ${styles.stepDone}`
        } else {
            cls += ` ${styles.stepInactive}`
        }
        return cls
    }

    return (
        <div className={styles.stepsContainer}>
            {steps.map((label, index) => (
                <div className={getStepClass(index + 1)} key={label}>
                    <div>
                        <div className={styles.circle} />
                    </div>
                    <div className={styles.label}>{index + 1}</div>
                    {index < steps.length - 1 && (
                        <div className={styles.line} />
                    )}
                </div>
            ))}
        </div>
    )
}
