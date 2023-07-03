export interface FormRequest {
  phone: string | null;
  email: string | null;
  nickname: string | null;
  name: string | null;
  sername: string | null;
  sex: string | null;
  advantages: string[];
  checkboxGroup: number[];
  radioGroup: string | null;
  about: string | null;
}

export type ResponseSuccess = {
  status: 'success';
  message: 'Форма успешно отправлена';
};

export type ResponseError = {
  status: 'error';
  message: 'Ошибка';
};

export type ResponseType = ResponseSuccess | ResponseError;
