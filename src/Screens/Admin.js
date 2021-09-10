import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {
  getUsersAction,
  selectOneUserAction,
  deleteUsersAction,
} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import { Link } from "react-router-dom";
import Pagination from "../components/MainPagination";
import AllUsers from "./AllUsers";
import MainPaginationData from "../components/MainPaginationData";

const Admin = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, user } = allStateObject;
  const { allUsers } = user;

  const filterUsers = (userArray, filterKey) =>{
    return userArray.filter(eachUser => eachUser.type_of_user === filterKey);
  }

  const [defaultUserType, setDefaultUserType] = useState('user');

  const [allUserArray, setUserArray] = useState(filterUsers(allUsers, 'user'));

  //pagination datas
  const dataLimit = 5;
  const [pages] = useState(Math.round(allUserArray.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [userCounter, setUserCounter] = useState(1);
  const {getPaginatedData:mainUserData} = MainPaginationData({data:allUserArray, dataLimit, currentPage})

  useEffect(() => {
    setUserArray(filterUsers(allUsers, defaultUserType));
  }, [defaultUserType]);


  useEffect(() => {
    if (loginData.isLogged === true) {
      dispatch(getUsersAction(loginData, allUsers));
    }
  }, []);

  const deleteHandler = (unique_id, type_of_user, loginData) => {
    if (loginData.isLogged === true) {
      dispatch(deleteUsersAction({unique_id, type_of_user, loginData}));
    }
  };

  // const deleteHandler = (unique_id, loginData) => {
  //   if (loginData.isLogged === true) {
  //     dispatch(selectOneUserAction(unique_id, loginData));
  //   }
  // };

  let loadingStatus = false;
  if (user.loading === true) {
    loadingStatus = true;
  }

  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    user.success,
    user.error,
    user.message,
    user,
    loadingStatus
  );

  const userTypesObject = {user:'USERS', 'admin':'admins', 'mid-admin':'mid-admin', 'super-admin':'super-admin' }

  return (
    <>
      <div>
        <section
          className="bg-dark-body bg-food-white pt-80 pb-20"
          data-overlay={7}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 bg-food-white">
                <div className="text-center">
                  <h2 className="page-title text-white" />
                  <ol className="breadcrumb bg-transparent justify-content-center">
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    />
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-50" style={{ backgroundColor: "#fafbfd" }}>
          <div className="container">
            <div className="row">

              <div className="col-12 col-sm-12"><h2 className="text-center">{userTypesObject[defaultUserType].toUpperCase()}</h2></div>

              <div className="col-6 col-sm-10"></div>
              <div className="col-6 col-sm-2">
                <select value={defaultUserType} className="form-control" onChange={ (e) => setDefaultUserType(e.target.value)}>
                  <option value="">Select Type of User</option>
                  <option value="user">Normal Users</option>
                  <option value="admin">Admin</option>
                  <option value="mid-admin">Mid Level Admin</option>
                  <option value="super-admin">Super Admin</option>
                </select>
              </div>

              <div className="col-12 col-sm-12">

                {errorMessage && (
                    <p className="alert alert-danger  text-center">{errorMessage}</p>
                )}

                {successMessage && (
                    <p className="alert alert-success  text-center">
                      {successMessage}
                    </p>
                )}

                {mainUserData.length > 0 ? (
                    <>
                      <table className="table table-striped table-condensed">
                        <thead>
                        <tr className="text-center">
                          <th scope="col">ID</th>
                          <th scope="col">Full Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Type Of User</th>
                          <th scope="col">Delete Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*style={{user.deleted_at === null ? ({}) : ('background:"red"')}}*/}
                        {mainUserData.map((user, index) => (
                            <>
                              <tr style={{background: user.deleted_at === null ? ('') : ("#ddd")}} className="text-center" key={index}>
                                {/* {alert(user.deleted_at)}*/}
                                <th scope="row">{index + 1}</th>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.type_of_user}</td>
                                <td>{user.deleted_at !== null ? (<span className="btn btn-warning btn-sm">Deleted</span>):(<span className="btn btn-success btn-sm">Not Deleted</span>) }</td>
                                <td>
                                  {" "}
                                  <DropdownButton id="dropdown-basic-button" title="Options" size="sm">
                                    <Dropdown.Item onClick={() => deleteHandler(user.unique_id, user.type_of_user, loginData)}
                                    >Delete User</Dropdown.Item>
                                    <Dropdown.Item href={`/get-single/user/${user.unique_id}`}>Edit User</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                  </DropdownButton>

                                </td>
                              </tr>
                            </>
                        ))}
                        </tbody>
                      </table>
                    </>
                ):(
                  <h3 className="alert alert-warning text-center">No Data Available</h3>
                  )}

              </div>

              <div className="col-12 col-sm-12">
                <Pagination
                    data={allUserArray}
                    title={''}
                    pageLimit={pages}
                    dataLimit={dataLimit}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pages={pages}
                />

              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admin;
