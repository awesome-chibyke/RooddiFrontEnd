/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {alterPreviledgePost, getAllPriviledgeActionPost, resetPriviledgeState} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import Pagination from "../components/MainPagination";
import MainPaginationData from "../components/MainPaginationData";

const Priviledges = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, priviledge } = allStateObject;
  const { allPriviledges, loading: fetchAllPriviledgeLoading, priviledge_loading } = priviledge;

  const [defaultUserType, setDefaultUserType] = useState("user");
  const [filteredUserArray, setFilteredUserArray] = useState([]);
  const [mainUserArrayForDisplay, setMainUserArrayForDisplay] = useState([]);

  //set the click check box
  const [clickedCheckBox, setClickedCheckBox] = useState(-1);

  //sarch value
  const [searchValue, setSearchValue] = useState("");

  //pagination datas
  const [dataLimit, setDataLimit] = useState(5);
  const [pages, setPage] = useState(
    Math.round(filteredUserArray.length / dataLimit)
  );
  let [StartIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (loginData.isLogged === true) {
      dispatch(getAllPriviledgeActionPost(loginData, allPriviledges));
    }
  }, [defaultUserType]);

  const toggleCheckBox = ({checkStatus, current_index, role_unique_id, type_of_user_unique_id}) => {

    const retVal = window.confirm('please click ok to continue');

    if(retVal === true){
      setClickedCheckBox(current_index);
      const changedArray = filteredUserArray.map((eachPriveledgeObject) => {
        if(role_unique_id === eachPriveledgeObject.role_unique_id && type_of_user_unique_id === eachPriveledgeObject.type_of_user_unique_id){
          eachPriveledgeObject.status = checkStatus === true ? 'active':'inactive';
        }
        return eachPriveledgeObject;
      });

      //dispatch an action to redux
      dispatch(alterPreviledgePost({loginData, priviledgeArray:changedArray, old_priviledge_array:allPriviledges}));

      //setFilteredUserArray(changedArray);
    }

  }

  useEffect(() => {
    const filterUsers = (userArray, filterKey) => {
      return userArray.filter(
        (eachUser) => eachUser.type_of_user === filterKey
      );
    };

    if (loginData.isLogged === true && searchValue === "") {
      const filteredData = filterUsers(allPriviledges, defaultUserType); //call the filter funtion for user type

      //set the data for display
      const {
        getPaginatedData: mainUserData,
        startIndex,
        endIndex,
      } = MainPaginationData({ data: filteredData, dataLimit, currentPage });

      setMainUserArrayForDisplay(mainUserData); //set the data that will be display on the screen
      setFilteredUserArray(filteredData); //set the filtered data based on user type
      setPage(Math.round(filteredData.length / dataLimit));
      setStartIndex(startIndex); //set the current start index for numbering the datas on the table
    }

  }, [defaultUserType, allPriviledges, currentPage, searchValue, dataLimit]);

  //search the priviledge array
  useEffect(() => {

    if (searchValue !== "") {
      const currentFilteredArray = filteredUserArray.filter((eachUser) => {
        return eachUser.type_of_user.toLowerCase().includes(searchValue.toLowerCase()) || eachUser.role.toLowerCase().includes(searchValue.toLowerCase())
      });

      setMainUserArrayForDisplay(currentFilteredArray);
    }
  }, [searchValue]);

  let loadingStatus = false;
  if (priviledge.loading === true) {
    loadingStatus = true;
  }

  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    priviledge.success,
    priviledge.error,
    priviledge.message,
    priviledge,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetPriviledgeState());
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
            <div className="col-12 col-sm-2"></div>
            <div className="col-12 col-sm-8">
              <div className="row">
                <h2 className="text-center">Priviledges</h2>
                <div className="col-12 col-sm-6"></div>

                <div className="col-6 col-sm-2" style={{ marginTop: "20px",position:"relative" }}>
                <label style={{position:"absolute", top:"-22px"}}>Display Limit</label>
                  <select
                    value={dataLimit}
                    className="form-control"
                    onChange={(e) => setDataLimit(e.target.value)}
                  >
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">
                      50
                    </option>
                    <option value="100">
                      100
                    </option>
                  </select>
                </div>

                <div className="col-6 col-sm-2" style={{ marginTop: "20px" }}>
                  <input
                    placeholder="Search....."
                    typeof="text"
                    className="form-control"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                
                <div className="col-6 col-sm-2" style={{ marginTop: "20px" }}>
                  <select
                    value={defaultUserType}
                    className="form-control"
                    onChange={(e) => setDefaultUserType(e.target.value)}
                  >
                    <option value="user">Users</option>
                    <option value="admin">Admin</option>
                    <option value="mid-admin">Mid Level Admin</option>
                    <option value="super-admin">Super Admin</option>
                    <option value="super-adminstrator">
                      Super Adminstrator
                    </option>
                  </select>
                </div>

                {errorMessage && (
                  <p style={{marginTop:"20px"}} className="alert alert-danger  text-center">
                    {errorMessage}
                  </p>
                )}

                {successMessage && (
                  <p style={{marginTop:"20px"}} className="alert alert-success  text-center">
                    {successMessage}
                  </p>
                )}
                {fetchAllPriviledgeLoading === false &&
                mainUserArrayForDisplay.length > 0 ? (
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Type Of User</th>
                        <th scope="col">Roles</th>
                        <th scope="col">Status</th>
                        <th scope="col">options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mainUserArrayForDisplay.map((eachPriviledge, index) => (
                        <tr key={index}>
                          <td>{StartIndex++ + 1}</td>
                          <td>{eachPriviledge.type_of_user}</td>
                          <td>{eachPriviledge.role}</td>
                          <td>{priviledge_loading  === true && index === clickedCheckBox ? 'Loading...' : eachPriviledge.status === 'active' ? (
                              <span className="btn btn-success">Active</span>
                          ):(
                            <span className="btn btn-warning">In-active</span>
                          )}
                          </td>
                          <td>
                          <label class="switch-check-box">
                            <input type="checkbox" onClick={e => toggleCheckBox({checkStatus:e.target.checked, current_index:index, role_unique_id:eachPriviledge.role_unique_id, type_of_user_unique_id:eachPriviledge.type_of_user_unique_id}) }  checked={eachPriviledge.status === 'active' ? 'checked':''} />
                            <span class="slider-check-box round-check-box"></span>
                            </label>
                              
                            </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  ""
                )}

                {fetchAllPriviledgeLoading === false &&
                mainUserArrayForDisplay.length === 0 ? (
                  <h3 style={{ marginTop: "20px" }} className="alert alert-warning text-center">
                    No Data Available
                  </h3>
                ) : (
                  ""
                )}

                {fetchAllPriviledgeLoading && (
                  <h3 style={{ marginTop: "20px" }} className="alert alert-warning text-center">
                    Loading.....
                  </h3>
                )}

                <div className="col-12 col-sm-12" style={{ marginTop: "20px" }}>
                  <Pagination
                    data={filteredUserArray}
                    title={""}
                    pageLimit={pages}
                    dataLimit={dataLimit}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pages={pages}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Priviledges;
