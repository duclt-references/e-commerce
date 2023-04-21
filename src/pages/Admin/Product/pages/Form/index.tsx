import Button from '@/components/Button';
import Input from '@/components/Input';
import HttpStatusCode from '@/config/httpStatusCode';
import { PATH } from '@/config/path';
import { categoryService } from '@/services/categoryService';
import { productService } from '@/services/productService';
import { ICategory } from '@/types/category.type';
import { IProduct } from '@/types/product.type';
import { addProductSchema } from '@/utils/admin-rules';
import { convertToSlug, randomId } from '@/utils/common';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductFormStyle } from './ProductForm.styled';

interface IProps {
  title: string;
  description: string;
  price: string;
  discount: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
}

const ProductForm = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
  const [thumbnail, setThumbnail] = useState<FileList | null | string>(null);
  const [images, setImages] = useState<FileList[] | null | string[]>(null);
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    if (id) {
      const getProductById = async () => {
        try {
          const response = await productService.getProductDetail(id as string);
          setCurrentProduct(response.data);
          setValue('title', response.data.title);
          setValue('price', response.data.price);
          setValue('stock', response.data.stock);
          setValue('discount', response.data.discount);
          setValue('description', response.data.description);
          setValue('category', response.data.category);
          setValue('brand', response.data.brand);
          setValue('thumbnail', response.data.thumbnail);
          setValue('images', response.data.images);
        } catch (error) {
          toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
        }
      };

      getProductById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const params = {};
        const response = await categoryService.getCategories(params);
        setCategories(response.data.items);
      } catch (error) {
        toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
      }
    };

    getAllCategories();
  }, []);

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm<IProps>({
    resolver: yupResolver(addProductSchema),
  });

  const onSubmit = async (data: IProps) => {
    let isValid = true;
    const formData = new FormData();
    const thumbnailInput = document.getElementById(
      'thumbnail'
    ) as HTMLInputElement;

    if (
      thumbnailInput &&
      thumbnailInput.files &&
      thumbnailInput.files.length > 0
    ) {
      for (const file of thumbnailInput.files) {
        formData.append('thumbnail', file);
      }
    } else {
      if (currentProduct === null) {
        setError('thumbnail', {
          type: 'filetype',
          message: 'Ảnh bìa là bắt buộc',
        });
        isValid = false;
      }
    }
    const imagesInput = document.getElementById('images') as HTMLInputElement;
    if (imagesInput && imagesInput.files && imagesInput.files.length > 0) {
      for (const file of imagesInput.files) {
        formData.append('images', file);
      }
    } else {
      if (currentProduct === null) {
        setError('images', {
          type: 'filetype',
          message: 'Ảnh là bắt buộc',
        });
        isValid = false;
      }
    }
    if (!isValid) return;
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('stock', data.stock);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('brand', data.brand);
    formData.append('discount', data.discount);

    let response = null;
    try {
      if (id) {
        response = await productService.updateProduct(id, formData);
      } else {
        const productId = randomId(15);
        formData.append('id', productId);
        formData.append('slug', convertToSlug(data.title, productId));
        response = await productService.addProduct(formData);
      }
    } catch (error) {
      toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
    }

    if (response?.status === HttpStatusCode.OK) {
      toast.success(
        id ? 'Cập nhật sản phẩm thành công!!!' : 'Thêm sản phẩm thành công!!!',
        {
          autoClose: 1000,
        }
      );
      setTimeout(() => {
        navigation(`${PATH.adminProduct}`);
      }, 2000);
    } else {
      toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
    }
  };

  const handleUploadThumbnail = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!event.target.files) return;
    const fileLoaded = URL.createObjectURL(event.target.files[0]);
    clearErrors('thumbnail');
    setThumbnail(fileLoaded);
  };

  const handleUploadImages = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!event.target.files) return;
    const fileUpload: string[] = [];
    Array.from(event.target.files).forEach((file) => {
      fileUpload.push(URL.createObjectURL(file));
    });
    clearErrors('images');
    setImages(fileUpload);
  };

  return (
    <ProductFormStyle>
      <h2 className="head">{id ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Input
          name="title"
          label="Tiêu đề"
          placeholder="Tiêu đề"
          type="text"
          required
          defaultValue={currentProduct?.title}
          register={register}
          errorMessage={errors.title?.message}
        />
        <Input
          name="price"
          label="Giá"
          placeholder="Giá"
          defaultValue={currentProduct?.price}
          type="text"
          required
          register={register}
          errorMessage={errors.price?.message}
        />
        <Input
          name="discount"
          label="Khuyến mại"
          placeholder="Khuyến mại"
          defaultValue={currentProduct?.discount}
          type="text"
          required
          register={register}
          errorMessage={errors.discount?.message}
        />
        <Input
          name="stock"
          label="Số lượng"
          placeholder="Số lượng"
          defaultValue={currentProduct?.stock}
          type="text"
          required
          register={register}
          errorMessage={errors.stock?.message}
        />
        <Input
          name="brand"
          label="Thương hiệu"
          placeholder="Thương hiệu"
          defaultValue={currentProduct?.brand}
          type="text"
          required
          register={register}
          errorMessage={errors.brand?.message}
        />
        <div className="form__group">
          <label htmlFor="city" className="label">
            Danh mục<span>*</span>
          </label>
          <select
            id="category"
            className="form-select"
            value={currentProduct?.category}
            {...register('category')}
          >
            <option value="">Chọn danh mục</option>
            {categories.map((category: ICategory) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <p className="error">{errors.category?.message}</p>
        </div>
        <div className="form__group">
          <label htmlFor="description">
            Mô tả <span>*</span>
          </label>
          <textarea
            id="description"
            {...register('description')}
            defaultValue={currentProduct?.description}
          ></textarea>
          <p className="error">{errors.description?.message}</p>
        </div>
        <div className="form__group">
          <label htmlFor="thumbnail" className="label">
            Thumbnail <span>*</span>
          </label>
          <div className="row form-file">
            <label htmlFor="thumbnail" className="label label-file">
              <FontAwesomeIcon icon={faCloudArrowUp} />
              <span>Select a thumbnail</span>
            </label>
            <input
              id="thumbnail"
              type="file"
              {...register('thumbnail', { required: true })}
              onChange={handleUploadThumbnail}
            />
          </div>
          <div className="img-preview">
            {thumbnail ? <img src={thumbnail as string} alt="" /> : <></>}
          </div>
          <p className="error">{errors.thumbnail?.message}</p>
        </div>
        <div className="form__group">
          <label htmlFor="images" className="label">
            Images <span>*</span>
          </label>
          <div className="row form-file">
            <label htmlFor="images" className="label label-file">
              <FontAwesomeIcon icon={faCloudArrowUp} />
              <span>Select images</span>
            </label>
            <input
              id="images"
              type="file"
              multiple
              {...register('images', { required: true })}
              onChange={handleUploadImages}
            />
          </div>
          <p className="error">{errors.images?.message}</p>
          <div className="img-preview">
            {images?.map((image, index) => (
              <img key={index} src={image as string} alt="" />
            ))}
          </div>
        </div>
        <Button
          classStyle="form__btn"
          label={id ? 'Sửa' : 'Thêm'}
          type="submit"
        />
      </form>
    </ProductFormStyle>
  );
};

export default ProductForm;
