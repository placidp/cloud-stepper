import React, { ChangeEvent, forwardRef, useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import { classNames } from '../../helpers';
import { Sex, SexOption } from '../../types';

interface DropdownProps {
  placeholder: string;
  id?: string;
  name?: string;
  options?: SexOption[];
  labeltext?: string;
  error?: any;
  onChange?: (e: ChangeEvent) => void;
  value: any;
  onChangeOption?: (option: SexOption) => void;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const {
    id,
    name,
    options,
    placeholder,
    error,
    labeltext,
    onChange,
    onChangeOption,
    value,
    ...rest
  } = props;
  const [isActive, setIsActive] = useState(false);
  const dropdownWrapperStyle = {
    minHeight: `calc(50px * ${options?.length || 1})`,
  };
  const dropdownClassNames = classNames(styles.dropdownWrapper, {
    [styles.error]: error,
  });
  const [selectedOption, setSelectedOption] = useState<Sex>(value);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleOptionKeyDown = (option: SexOption, e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (!onChangeOption) return;
    if (!option) return;

    switch (e.key) {
      case 'Enter': {
        onChangeOption(option);
        setSelectedOption(option.value);
        setIsActive(false);
        dropdownRef.current?.focus();
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();

        const nextTarget = target?.nextElementSibling as HTMLElement;
        if (!nextTarget) return;
        nextTarget.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();

        const previousTarget = target?.previousElementSibling as HTMLElement;
        if (!previousTarget) return;
        previousTarget.focus();
        break;
      }

      case 'Tab': {
        if (!target?.nextElementSibling) setIsActive(false);
        break;
      }

      default:
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!options) return;

    if (e.key === 'Enter') {
      setIsActive((isActive) => !isActive);
      dropdownRef.current?.focus();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      setIsActive(true);

      const target = e.target as HTMLElement;
      const nextSibling = target?.nextElementSibling as HTMLElement;
      const nextSiblingChild = nextSibling?.firstElementChild as HTMLElement;
      if (!nextSiblingChild) return;

      nextSiblingChild.focus();
    }
  };
  const handleOptionClick = (option: SexOption) => {
    if (!onChangeOption) return;
    onChangeOption(option);
    setSelectedOption(option.value);
    setIsActive((isActive) => !isActive);
    setIsActive(false);
  };
  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current?.contains(e.target as Node)) return;

    const { classList } = e.target as HTMLElement;
    if (classList.contains(`.${styles.dropdownWrapper}`)) return;

    setIsActive(false);
  };

  const handleOutsideKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false);
      dropdownRef.current?.focus();
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleOutsideKey);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleOutsideKey);
    }

    return (): void => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleOutsideKey);
    };
  }, [isActive]);

  return (
    <div ref={ref} className={dropdownClassNames} style={dropdownWrapperStyle} {...rest}>
      {labeltext && (
        <label htmlFor={id} className={styles.label}>
          {labeltext}
        </label>
      )}

      <div
        tabIndex={0}
        className={styles.dropdownBtn}
        onClick={handleDropdownClick}
        onKeyDown={handleDropdownKeyDown}
      >
        {selectedOption}

        <span className={styles.arrow} />
      </div>
      {isActive && (
        <div className={styles.dropdownContent} ref={dropdownRef}>
          {options?.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownItem}
              tabIndex={0}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(event) => handleOptionKeyDown(option, event)}
            >
              {option.value.toLowerCase()}
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className={styles.errorWrapper}>
          {error && <span className={styles.errorText}>{error}</span>}
        </div>
      )}
    </div>
  );
});
