import Pagination from '@/components/Pagination';
import HttpStatusCode from '@/config/httpStatusCode';
import { IMAGE_URL, PATH } from '@/config/path';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductStyle } from './ProductList.style';

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const params = {
    page,
    sort: '-created',
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await productService.getProducts(params);
        setProducts(response.data.items);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
      }
    };

    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleRemoveProduct = async (id: string) => {
    try {
      const response = await productService.deleteProduct(id);
      if (response.status === HttpStatusCode.NO_CONTENT) {
        toast.success('Delete Success!!!', { autoClose: 1000 });
        const response = await productService.getProducts(params);
        setProducts(response.data.items);
      }
    } catch (error) {
      toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
    }
  };

  return (
    <ProductStyle>
      <h2 className="head">
        Product List
        <Link to={`${PATH.adminAddProduct}`} className="head__btn">
          <FontAwesomeIcon icon={faPlus} /> Add
        </Link>
      </h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Thumbnail</td>
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
              <td>Discount</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct, index: number) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td className="table_image">
                  <img
                    src={`${IMAGE_URL}/${product.id}/${product.thumbnail}`}
                    alt=""
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}$</td>
                <td>{product.discount}%</td>
                <td>{product.stock}</td>
                <td>
                  <div className="action">
                    <Link
                      to={`${PATH.adminEditProduct}/${product.id}`}
                      className="btn-edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      className="btn-remove"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </ProductStyle>
  );
};

export default ProductList;
