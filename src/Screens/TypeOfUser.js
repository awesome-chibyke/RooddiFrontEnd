/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallTypeOfUserActionPost, resetTypeOfUserState } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import { Link } from "react-router-dom";

const TypeOfUser = () => {
    const dispatch = useDispatch();
    const allStateObject = useSelector((state) => state);
    let { login: loginData, typeOfUser } = allStateObject;
    const { allTypeOfUser, loading: fetchAllTypeOfUserLoading } = typeOfUser;
  
    let [StartIndex, setStartIndex] = useState(0);
    useEffect(() => {
      if (loginData.isLogged === true) {
        dispatch(getallTypeOfUserActionPost(loginData, allTypeOfUser));
      }
    }, []);
  
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
        {loginData.isLogged === false ? <DelayedRedirect to={`/login`} delay={500} />  :'' }
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
            <div className="col-12 col-sm-2"></div>
            <div className="col-12 col-sm-8">
              <h2 className="text-center">Type Of User</h2>

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
              {fetchAllTypeOfUserLoading === false && allTypeOfUser.length > 0 ? (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Type Of User</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTypeOfUser.map((eachTypeOfUser, index) => (
                      <tr key={index}>
                        <td>{StartIndex++ + 1}</td>
                        <td>{eachTypeOfUser.type_of_user}</td>
                        <td>{eachTypeOfUser.description}</td>
                      </tr>
                    ))}
                  </tbody>
                  <br />
                  <Link className="btn btn-success" to="/create-type-of-user">
                    Create Type Of User
                  </Link>
                </table>
              ) : (
                ""
              )}

              {fetchAllTypeOfUserLoading === false && allTypeOfUser.length === 0 ? (
                <h3 className="alert alert-warning text-center">
                  No Data Available
                </h3>
              ) : (
                ""
              )}

              {fetchAllTypeOfUserLoading && (
                <h3 className="alert alert-warning text-center">
                  Loading.....
                </h3>
              )}
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default TypeOfUser
