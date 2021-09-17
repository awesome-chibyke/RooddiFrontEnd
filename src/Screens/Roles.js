/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { getallRolesActionPost, addRolesActionPost } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import { each } from "jquery";

const Roles = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, role } = allStateObject;
  const { allRoles, loading: fetchAllRolesLoading } = role;

  let [StartIndex, setStartIndex] = useState(0);
  useEffect(() => {
    if (loginData.isLogged === true) {
      dispatch(getallRolesActionPost(loginData, allRoles));
    }
  }, []);
  return (
    <>
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
            <div className="col-12 col-sm-12">
              <h2 className="text-center">Roles</h2>
              {fetchAllRolesLoading === false && allRoles.length > 0 ? (
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Roles</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allRoles.map((eachRole, index) => (
                      <tr key={index}>
                        <td>{StartIndex++ + 1}</td>
                        <td>{eachRole.role}</td>
                        <td>{eachRole.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                ""
              )}

              {fetchAllRolesLoading === false && allRoles.length === 0 ? (
                <h3 className="alert alert-warning text-center">
                  No Data Available
                </h3>
              ) : (
                ""
              )}

              {fetchAllRolesLoading && (
                <h3 className="alert alert-warning text-center">
                  Loading.....
                </h3>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roles;
