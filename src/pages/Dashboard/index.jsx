import React, { useState, useEffect } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { BACKEND_API } from '../../constants'
import { authenticationService } from '../../services/authentication.service';
import { toastrService } from '../../services/toastr.service';

const columns = [
  { name: "#", selector: "id" },
  { name: "First name", selector: "first_name" },
  { name: 'Last Name', selector: "last_name" },
  { name: 'Email', selector: "email" },
  {
    name: "action",
    cell: (row) => {
      return (
        <>
          <Link to={`/users/${row.id}/edit`}>Edit</Link>&nbsp; <Link to={`/users/${row.id}/delete`}>Delete</Link>
        </>
      )
    },
  }
];

const Dashboard = () => {
  const [loginLoading, setLoginLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const currentUser = authenticationService.getCurrentUser();

  const fetchData = async () => {
    setLoginLoading(true);

    try {
      const { data } = await axios
        .get(BACKEND_API + "users?secret_token="+ currentUser.token)
      if (data && data.users) {
        setUsers(data.users);
        setLoginLoading(false);
      } else {
        toastrService.error(data.message)
      }
      return [];
    } catch (err) {
      setLoginLoading(false);
        toastrService.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={'wrap-login-full wrap-content'}>
        {loginLoading && <div className={'logonFormLoader'}>&nbsp;</div>}
        {!loginLoading && (<>
          <div className="row">
          <div className="col-md-12"><h1>Users</h1></div>
        </div>
        <hr/>
        {users && users.length > 0 && 
        (<DataTable striped bordered
          data={users}
          columns={columns}
          pagination
        />)}
        </>)}
      </div>
    </>
  );
};

export default Dashboard;
