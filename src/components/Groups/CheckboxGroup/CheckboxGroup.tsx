import { checkboxesOptions } from '../../../shared/mockData';
import { CheckboxOption } from '../../../shared/types';
import { ControllerCheckbox } from '../../FormControllers/ControllerCheckbox';
import styles from './CheckboxGroup.module.scss';

interface CheckboxGroupExcerptProps {
  id: string;
  name: string;
  control: any;
}

interface CheckboxGroupProps {
  control: any;
}

const CheckboxGroupExcerpt = (props: CheckboxGroupExcerptProps) => {
  const { id, name, control } = props;

  return <ControllerCheckbox id={id} name={name} control={control} />;
};

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { control } = props;

  return (
    <div className={styles.checkboxGroup}>
      <p className={styles.title}>Checkbox Group</p>
      {checkboxesOptions.map((checkbox: CheckboxOption) => (
        <CheckboxGroupExcerpt
          key={checkbox.id}
          id={checkbox.id}
          name={checkbox.name}
          control={control}
        />
      ))}
    </div>
  );
};
