import Pagination from '@/components/Pagination';
import { IMAGE_URL, PATH } from '@/config/path';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductStyle } from './ProductList.style';

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const params = {
          page,
          sort: '-created',
        };
        const response = await productService.getProducts(params);
        setProducts(response.data.items);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    getAllProducts();
  }, [page]);

  const handleRemoveProduct = (id: string) => {
    productService.deleteProduct(id);
  };
  return (
    <ProductStyle>
      <h2 className="head">User List</h2>
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
                      to={`../../${PATH.adminEditProduct}/${product.id}`}
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
