import styled from 'styled-components';

export const TableStyle = styled.div`
  .table {
    padding: 16px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow-x: auto;
  }

  .table td p {
    white-space: nowrap;
    margin-bottom: 8px;
  }

  .table td i {
    margin-right: 8px;
    color: #666;
  }

  .table_image {
    display: flex;
    align-items: center;
  }

  .table_image img {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  .table .action {
    display: flex;
    align-items: center;
  }

  .table .action svg {
    width: 16px;
    height: 16px;
    margin-right: 0;
    cursor: pointer;
    color: #fff;
  }

  .table .action a {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    padding: 0;
    border-radius: 4px;
  }

  .table .action .btn-edit {
    background-color: #ffc107;
  }

  .table .action .btn-remove {
    background-color: #dc3545;
  }
`;
