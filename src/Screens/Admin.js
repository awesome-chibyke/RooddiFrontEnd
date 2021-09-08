import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersAction,
  selectOneUserAction,
  deleteUsersAction,
} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import { Link } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, user } = allStateObject;
  const { allUsers } = user;

  useEffect(() => {
    if (loginData.isLogged === true) {
      dispatch(getUsersAction(loginData, allUsers));
    }
  }, []);
  // console.log(allUsers, "All users");
  const deleteHandler = (unique_id, type_of_user, loginData) => {
    if (loginData.isLogged === true) {
      dispatch(deleteUsersAction(unique_id, type_of_user, loginData));
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
            {errorMessage && (
              <p className="alert alert-danger  text-center">{errorMessage}</p>
            )}

            {successMessage && (
              <p className="alert alert-success  text-center">
                {successMessage}
              </p>
            )}
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Type Of User</th>
                  <th scope="col">Unique Id</th>
                  <th scope="col">DeletedAt</th>
                  <th scope="col">Dellet/Edit</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user) => (
                  <tr key={user.unique_id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.type_of_user}</td>
                    <td>{user.unique_id}</td>
                    <td>{user.deleted_at}</td>
                    <td>
                      {" "}
                      <button
                      className="btn btn-primary btn-block w-p100 mt-15"
                        onClick={() =>
                          deleteHandler(user.unique_id, user.type_of_user, loginData)
                        }
                      >
                        <i className="bx bx-trash" />Delete User
                      </button>
                      <Link to={`/get-single/user/${user.unique_id}`}>
                        <i className="bx bx-edit" /> Edit User
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admin;
