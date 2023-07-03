import { CheckboxOption, RadioOption, SexOption } from './types';

export const userLinks = [
  {
    id: 1,
    title: 'Telegram',
    href: 'https://t.me/placidp',
  },
  {
    id: 2,
    title: 'GitHub',
    href: 'https://github.com/placidp',
  },
  {
    id: 3,
    title: 'Резюме',
    href: 'https://github.com/placidp',
  },
];

export const checkboxesOptions: CheckboxOption[] = [
  {
    id: 'field-checkbox-group-option-1',
    name: '1',
    checked: true,
  },
  {
    id: 'field-checkbox-group-option-2',
    name: '2',
    checked: false,
  },
  {
    id: 'field-checkbox-group-option-3',
    name: '3',
    checked: false,
  },
];

export const radioOptions: RadioOption[] = [
  {
    id: 'field-radio-group-option-1',
    name: 'radio-group',
    value: '1',
    checked: true,
  },
  {
    id: 'field-radio-group-option-2',
    name: 'radio-group',
    value: '2',
    checked: false,
  },
  {
    id: 'field-radio-group-option-3',
    name: 'radio-group',
    value: '3',
    checked: false,
  },
];

export const SexOptions: SexOption[] = [
  { value: 'man', label: 'man' },
  { value: 'woman', label: 'woman' },
];
