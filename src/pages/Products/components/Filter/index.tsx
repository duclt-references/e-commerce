import { PATH } from '@/config/path';
import { categoryService } from '@/services/categoryService';
import { ICategory } from '@/types/category.type';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterStyle } from './Filter.styled';

const Filter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await categoryService.getCategories({});
        setCategories(response.data.items);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    getCategories();
  }, []);
  return (
    <FilterStyle>
      <div className="filter">
        <div className="filter__item filter__item--cate">
          <div className="filter__head">
            <span>Danh mục</span>
            <FontAwesomeIcon icon={faSortDown} />
          </div>
          <div className="filter__list">
            <ul className="filter__list--menu">
              {categories.map((category: ICategory) => (
                <li key={category.id}>
                  <Link to={`${PATH.products}/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter__item filter__item--sort">
          <div className="filter__head">
            <span>Sắp xếp</span>
            <FontAwesomeIcon icon={faSortDown} />
          </div>
          <div className="filter__list">
            <ul className="sort">
              <li>
                <Link to={`?sort=asc`}>Hàng mới nhất</Link>
              </li>
              <li>
                <Link to={`?sort=desc`}>Hàng cũ nhất</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FilterStyle>
  );
};

export default Filter;
