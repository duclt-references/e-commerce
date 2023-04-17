import { AdminTableStyle } from './AdminTable.styled';

const AdminTable = () => {
  return (
    <AdminTableStyle>
      <h2 className="head">User List</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Information</td>
              <td>Skill</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </AdminTableStyle>
  );
};

export default AdminTable;
