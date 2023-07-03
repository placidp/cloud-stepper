export type Sex = 'man' | 'woman';

export interface SexOption {
  value: Sex;
  label: string;
}

export interface Advantage {
  id: string;
  text: string;
}

export interface CheckboxOption {
  id: string;
  name: string;
  checked: boolean;
}

export interface RadioOption {
  id: string;
  name: string;
  value: string;
  checked: boolean;
}

export interface HomeFormInfo {
  phoneNumber: string;
  email: string;
}

export interface StepOneInfo {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex;
}

export interface StepTwoInfo {
  advantages: Advantage[];
  checkboxesOptions: CheckboxOption[];
  radioOptions: RadioOption[];
}

export interface StepThreeInfo {
  aboutTextValue: string;
}

export interface FormData {
  homeInfo: HomeFormInfo;
  stepOne: StepOneInfo;
  stepTwo: StepTwoInfo;
  stepThree: StepThreeInfo;
}
