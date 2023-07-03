import { string, object, array, number } from 'yup';
import { emailRegex, phoneRegExp } from './regex';

export const HomeFormSchema = object().shape({
  phoneNumber: string().matches(phoneRegExp, 'Invalid phone format').required('Phone is required'),
  email: string().matches(emailRegex, 'Email is not valid').required(),
});

export const StepOneSchema = object().shape({
  nickname: string()
    .max(30, 'Must be at most 30 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Incorrect nickname')
    .required('Required field'),
  name: string()
    .max(50, 'Name must be at most 50 characters')
    .matches(/^[a-zA-Z]+$/, 'Name can only contain letters')
    .required('Name is required'),
  surname: string()
    .max(50, 'Surname must be at most 50 characters')
    .matches(/^[a-zA-Z]+$/, 'Surname can only contain letters')
    .required('Surname is required'),
  sex: string().oneOf(['man', 'woman'], 'Invalid sex').required('Sex is required'),
});

export const StepTwoSchema = object().shape({
  advantages: array()
    .of(string().required('Advantage is required'))
    .min(1, 'At least one advantage is required'),
  radio: number().required('Radio selection is required'),
  checkbox: array()
    .of(number().required('Checkbox option is required'))
    .min(1, 'At least one checkbox option is required'),
});

export const StepThreeSchema = object().shape({
  aboutTextValue: string()
    .max(200, 'About must be at most 200 characters')
    .required('About is required'),
});
