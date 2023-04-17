import { PaginationStyle } from './Pagination.styled';

interface IProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination = ({ page, totalPages, setPage }: IProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyle>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination__item ${
              number === page ? 'pagination__item--active' : ''
            }`}
            onClick={() => setPage(number)}
            aria-hidden={true}
          >
            {number}
          </li>
        ))}
      </ul>
    </PaginationStyle>
  );
};

export default Pagination;
