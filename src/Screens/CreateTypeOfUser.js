/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTypeOfUserActionPost, resetTypeOfUserState } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const CreateTypeOfUser = () => {
  const [type_of_user, setTypeOfUser] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, typeOfUser } = allStateObject;
  const { loading } = typeOfUser;

  let loadingStatus = false;
  if (typeOfUser.loading === true) {
    loadingStatus = true;
  }

  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    typeOfUser.success,
    typeOfUser.error,
    typeOfUser.message,
    typeOfUser,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetTypeOfUserState());
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
              <h2 className="text-center">Create Type Of User</h2>
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
                    id="type_of_user"
                    placeholder="Enter Type Of User"
                    value={type_of_user}
                    onChange={(e) => setTypeOfUser(e.target.value)}
                  />
                  <span className="error_displayer err_type_of_user"></span>
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
                        await addTypeOfUserActionPost({
                          loginData,
                          type_of_user: type_of_user,
                          description: description,
                        })
                      );
                    }}
                    className="btn btn-primary"
                  >
                    {typeOfUser.loading === true
                      ? "Adding Type Of User....."
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

export default CreateTypeOfUser;
