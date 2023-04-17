import * as yup from 'yup';

export const addProductSchema = yup.object({
  title: yup
    .string()
    .required('Tiêu đề là bắt buộc')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  description: yup
    .string()
    .required('Mô tả là bắt buộc')
    .min(5, 'Độ dài từ 5 - 160 ký tự'),
  price: yup
    .number()
    .typeError('Giá chưa đúng định dạng')
    .required('Giá là bắt buộc')
    .min(0, 'Giá lớn hơn 0'),
  stock: yup
    .number()
    .typeError('Số lượng là số nguyên')
    .integer('Số lượng là số nguyên')
    .required('Số lượng là bắt buộc')
    .min(0, 'Số lượng lớn hơn 0'),
  brand: yup
    .string()
    .required('Thương hiệu là bắt buộc')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  category: yup
    .string()
    .required('Danh mục là bắt buộc')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  thumbnail: yup.string().required('Ảnh bìa là bắt buộc'),
  images: yup.string().required('Ảnh bìa là bắt buộc'),
});
