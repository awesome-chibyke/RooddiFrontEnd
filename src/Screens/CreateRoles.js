/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRolesActionPost, resetRolesState } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const CreateRoles = () => {
  const [role, setRoles] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, roles } = allStateObject;
  const { loading } = roles;

  let loadingStatus = false;
  if (roles.loading === true) {
    loadingStatus = true;
  }

  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    roles.success,
    roles.error,
    roles.message,
    roles,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetRolesState());
    };
  }, []);
  return (
    <>
      {loginData.isLogged === false ? (
        <DelayedRedirect to={`/login`} delay={500} />
      ) : (
        ""
      )}
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
              <h2 className="text-center">Create Role</h2>
              {errorMessage && (
                <p className="alert alert-danger  text-center">
                  {errorMessage}
                </p>
              )}

              {successMessage && (
                <p className="alert alert-success  text-center">
                  {successMessage}
                </p>
              )}
              <form className="container col-lg-8">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Role</label>
                  <input
                    type="email"
                    className="form-control"
                    id="role"
                    placeholder="Enter Role"
                    value={role}
                    onChange={(e) => setRoles(e.target.value)}
                  />
                  <span className="error_displayer err_role"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <input
                    type="email"
                    className="form-control"
                    id="description"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <span className="error_displayer err_description"></span>
                </div>
                {loginData.isLogged === true ? (
                  <button
                    type="submit"
                    onClick={async (e) => {
                      dispatch(
                        await addRolesActionPost({
                          loginData,
                          role: role,
                          description: description,
                        })
                      );
                    }}
                    className="btn btn-primary"
                  >
                    {roles.loading === true
                      ? "Adding Role....."
                      : "Submit"}
                  </button>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateRoles;
