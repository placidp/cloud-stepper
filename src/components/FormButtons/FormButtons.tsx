import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FormButtons.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { formActions, selectActiveStep } from '../../store/slices/form.slice';
import { Button } from '../../shared/ui/Button';
import { ButtonThemes, RouteEndpoints, Steps } from '../../shared/enums';

interface FormButtonsProps {
  step?: number;
}

export const FormButtons: FC<FormButtonsProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const activeStep = useAppSelector(selectActiveStep);

  const NextButtonText = activeStep === Steps.Three ? 'Отправить' : 'Далее';

  let cb: (() => void) | { payload: number; type: 'form/setActiveStep' };

  switch (activeStep) {
    case Steps.One:
      cb = () => navigate(RouteEndpoints.Home);
      break;
    case Steps.Two:
      cb = () => dispatch(formActions.setActiveStep(Steps.One));
      break;
    default:
      cb = () => dispatch(formActions.setActiveStep(Steps.Two));
      break;
  }

  return (
    <div className={styles.formButtons}>
      <Button theme={ButtonThemes.Outline} className={styles.buttonPrevious} onClick={cb}>
        Назад
      </Button>
      <Button theme={ButtonThemes.Primary} className={styles.buttonNext} type="submit">
        {NextButtonText}
      </Button>
    </div>
  );
};
