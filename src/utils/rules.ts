import * as yup from 'yup';

const phoneRegExp = /^0[0-9]{9}/;

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(8, 'Độ dài từ 8 - 100 ký tự')
    .max(160, 'Độ dài từ 8 - 30 ký tự'),
  name: yup.string().trim().required('Tên là bắt buộc'),
  phone: yup
    .string()
    .trim()
    .required('SĐT là bắt buộc')
    .matches(phoneRegExp, 'SĐT không đúng định dạng'),
});

export const userSchema = yup.object({
  name: yup.string().max(160, 'Độ dài tối đa là 100 ký tự'),
  phone: yup.string().max(20, 'Độ dài tối đa là 20 ký tự'),
  address: yup.string().max(160, 'Độ dài tối đa là 160 ký tự'),
  date_of_birth: yup.date().max(new Date(), 'Hãy chọn một ngày trong quá khứ'),
  password: schema.fields['password'],
  new_password: schema.fields['password'],
});

export type UserSchema = yup.InferType<typeof userSchema>;

export type Schema = yup.InferType<typeof schema>;
