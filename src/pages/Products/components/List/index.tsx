import Pagination from '@/components/Pagination';
import Product from '@/components/Product';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import { useEffect, useState } from 'react';
import { ListingStyle } from './Listing.styled';

const Listing = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const params = {
          page,
          sort: '-created',
        };
        const response = await productService.getProducts(params);
        setProducts(response.data?.items);
        setTotalPages(response.data?.totalPages);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    getNewProducts();
  }, [page]);

  return (
    <ListingStyle>
      <div className="container-ct">
        <div className="filter">
          <div className="filter__item filter__item--cate">
            <div className="filter__head">
              <span>Danh mục</span>
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="filter__list">
              <ul className="filter__list--menu">
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <a href="/">Giới thiệu</a>
                </li>
                <li>
                  <div>
                    <a href="/">Sản phẩm</a>
                    <i className="fas fa-angle-down"></i>
                    <i className="fas fa-angle-up"></i>
                  </div>
                  <ul className="filter__list--submenu">
                    <li>
                      <a href="/">Giày Training & Gym</a>
                    </li>
                    <li>
                      <a href="/">Giày Basketball</a>
                    </li>
                    <li>
                      <a href="/">Giày Running</a>
                    </li>
                    <li>
                      <a href="/">Giày Jodan</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Tin tức</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter__item filter__item--color">
            <div className="filter__head">
              <span>Màu sắc</span>
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="filter__list">
              <div className="color">
                <div className="color-item">
                  <label htmlFor="yellow">
                    <input type="checkbox" id="yellow" />
                  </label>
                </div>
                <div className="color-item">
                  <label htmlFor="red">
                    <input type="checkbox" id="red" />
                  </label>
                </div>
                <div className="color-item">
                  <label htmlFor="green">
                    <input type="checkbox" id="green" />
                  </label>
                </div>
                <div className="color-item">
                  <label htmlFor="blue">
                    <input type="checkbox" id="blue" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter__item filter__item--size">
            <div className="filter__head">
              <span>Kích cỡ</span>
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="filter__list">
              <div className="size">
                <div className="size-item">
                  <label htmlFor="s35">
                    <input type="checkbox" id="s35" />
                  </label>
                  <span>35</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s36">
                    <input type="checkbox" id="s36" />
                  </label>
                  <span>36</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s37">
                    <input type="checkbox" id="s37" />
                  </label>
                  <span>37</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s38">
                    <input type="checkbox" id="s38" />
                  </label>
                  <span>38</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s39">
                    <input type="checkbox" id="s39" />
                  </label>
                  <span>39</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s40">
                    <input type="checkbox" id="s40" />
                  </label>
                  <span>40</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s41">
                    <input type="checkbox" id="s41" />
                  </label>
                  <span>41</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s42">
                    <input type="checkbox" id="s42" />
                  </label>
                  <span>42</span>
                </div>
                <div className="size-item">
                  <label htmlFor="s43">
                    <input type="checkbox" id="s43" />
                  </label>
                  <span>43</span>
                </div>
              </div>
            </div>
          </div>
          <div className="filter__item filter__item--size">
            <div className="filter__head">
              <span>Thương hiệu</span>
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="filter__list">
              <div className="size">
                <div className="size-item">
                  <label htmlFor="adidas">
                    <input type="checkbox" id="adidas" />
                  </label>
                  <span>Adidas</span>
                </div>
                <div className="size-item">
                  <label htmlFor="puma">
                    <input type="checkbox" id="puma" />
                  </label>
                  <span>Puma</span>
                </div>
                <div className="size-item">
                  <label htmlFor="nike">
                    <input type="checkbox" id="nike" />
                  </label>
                  <span>Nike</span>
                </div>
                <div className="size-item">
                  <label htmlFor="asics">
                    <input type="checkbox" id="asics" />
                  </label>
                  <span>Asics</span>
                </div>
                <div className="size-item">
                  <label htmlFor="balance">
                    <input type="checkbox" id="balance" />
                  </label>
                  <span>New Balance</span>
                </div>
              </div>
            </div>
          </div>
          <div className="filter__item filter__item--sort">
            <div className="filter__head">
              <span>Sắp xếp</span>
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="filter__list">
              <ul className="sort">
                <li>
                  <a href="/">Mặc định</a>
                </li>
                <li>
                  <a href="/">
                    A<i className="las la-long-arrow-alt-right"></i>Z
                  </a>
                </li>
                <li>
                  <a href="/">
                    Z<i className="las la-long-arrow-alt-right"></i>A
                  </a>
                </li>
                <li>
                  <a href="/">Giá tăng dần</a>
                </li>
                <li>
                  <a href="/">Giá giảm dần</a>
                </li>
                <li>
                  <a href="/">Hàng mới nhất</a>
                </li>
                <li>
                  <a href="/">Hàng cũ nhất</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="list col-ct">
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product.id} product={product} isShowSlide={false} />
            ))
          ) : (
            <></>
          )}
        </div>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </ListingStyle>
  );
};

export default Listing;
