import { ChangeEvent, SelectHTMLAttributes, forwardRef } from 'react';
import styles from './Select.module.scss';
import { SexOption } from '../../types';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  id?: string;
  name?: string;
  options?: SexOption[];
  labeltext?: string;
  error?: any;
  onChangeOption?: (option: any) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { id, name, options, placeholder, error, labeltext, onChange, onChangeOption, ...rest } =
    props;

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value);
    }
  };
  return (
    <div className={styles.selectWrapper}>
      {labeltext && (
        <label htmlFor={id} className={styles.label}>
          {labeltext}
        </label>
      )}
      <select ref={ref} className={styles.select} onChange={onChangeCallback} {...rest}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className={styles.errorContainer}>
          {error && <span className={styles.errorText}>{error}</span>}
        </div>
      )}
      <span className={styles.arrow} />
    </div>
  );
});
