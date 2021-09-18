/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {
  getUsersAction,
  deleteUsersAction,
  resetUserState,
  reverseDeleteHandler
} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";
import { Link } from "react-router-dom";
import Pagination from "../components/MainPagination";
import AllUsers from "./AllUsers";
import MainPaginationData from "../components/MainPaginationData";
import {BACKEND_BASE_URL} from "../common_variables";

import { LightBox } from 'react-lightbox-pack';
import "react-lightbox-pack/dist/index.css";

const Admin = () => {

  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, user } = allStateObject;
  const { allUsers, delete_loading, loading:fetchAllUsersLoading, government_id_back, government_id_front, faceUploads } = user;

  const [defaultUserType, setDefaultUserType] = useState('user');
  const [filteredUserArray, setFilteredUserArray] = useState([]);
  const [mainUserArrayForDisplay, setMainUserArrayForDisplay] = useState([]);

  //sarch value
  const [searchValue, setSearchValue] = useState("");

  //pagination datas
  const dataLimit = 5;
  const [pages, setPage] = useState(Math.round(filteredUserArray.length / dataLimit));
  let [StartIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [userToDelete, setUserToDelete] = useState(0);

  useEffect(() => {
    if (loginData.isLogged === true) {
      dispatch(getUsersAction(loginData, allUsers, {government_id_back, government_id_front, faceUploads}));//get the user from the server
    }
    return () => {
      dispatch(resetUserState());
    }
  }, [defaultUserType]);

  useEffect(() => {

    const filterUsers = (userArray, filterKey) =>{
      return userArray.filter(eachUser => eachUser.type_of_user === filterKey);
    }

    if (loginData.isLogged === true && searchValue === '') {

      const filteredData = filterUsers(allUsers, defaultUserType);//call the filter funtion for user type

      //set the data for display
      const {getPaginatedData:mainUserData, startIndex, endIndex} = MainPaginationData({data:filteredData, dataLimit, currentPage});
      setMainUserArrayForDisplay(mainUserData);//set the data that will be display on the screen
      setFilteredUserArray(filteredData);//set the filtered data based on user type
      setPage(Math.round(filteredData.length / dataLimit));
      setStartIndex(startIndex);//set the current start index for numbering the datas on the table
    }

    //console.log('I ran')
  }, [defaultUserType, allUsers, currentPage, searchValue]);

  useEffect(() => {//first_name last_name email phone

    if(searchValue !== ''){
      const currentFilteredArray = filteredUserArray.filter(eachUser =>{

        eachUser.first_name = eachUser.first_name === null ? '': eachUser.first_name;
        eachUser.last_name = eachUser.last_name === null ? '': eachUser.last_name;
        eachUser.phone = eachUser.phone === null ? '': eachUser.phone;
        eachUser.email = eachUser.email === null ? '': eachUser.email;

        return eachUser.first_name.toLowerCase().includes(searchValue.toLowerCase()) || eachUser.last_name.toLowerCase().includes(searchValue.toLowerCase())  || eachUser.phone.includes(searchValue) || eachUser.email.toLowerCase().includes(searchValue.toLowerCase())

      } );
      setMainUserArrayForDisplay(currentFilteredArray);
    }

  }, [searchValue])

  const deleteHandler = (unique_id, type_of_user, loginData) => {
    if (loginData.isLogged === true) {
      dispatch(deleteUsersAction({unique_id, type_of_user, loginData}));
    }
  };

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

  const userTypesObject = {user:'USERS', 'admin':'admins', 'mid-admin':'mid-admin', 'super-admin':'super-admin' };

  const ReturnFullName = (user) => {
    return user.first_name === null && user.last_name === null ? 'None':user.first_name+' '+user.last_name
  }

  //light box
  // State
  const [toggle, setToggle] =  useState(false);
  const [sIndex, setSIndex] =  useState(0);

  // Handler
  const  lightBoxHandler  = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  const [dataForLightBox, setDataForLightBox] = useState([]);

  /*useEffect(() => {

  }, [dataForLightBox])

  const dataForLightBox = mainUserArrayForDisplay.map(eachObject => {
    return {
      id:  4,
      image:BACKEND_BASE_URL+faceUploads+eachObject.face_picture_name,
      title:  ReturnFullName(eachObject),
      description: ""
    }
  } )*/

  return (
    <>
      <div>
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

              <div className="col-12 col-sm-12"><h2 className="text-center">{userTypesObject[defaultUserType].toUpperCase()}</h2></div>

              <div className="col-12 col-sm-8"></div>
              <div className="col-6 col-sm-2" style={{marginTop:"20px"}}>
                <input placeholder="Search....." typeof="text" className="form-control" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              </div>
              <div className="col-6 col-sm-2" style={{marginTop:"20px"}}>
                <select value={defaultUserType} className="form-control" onChange={ (e) => setDefaultUserType(e.target.value)}>
                  <option value="user">Normal Users</option>
                  <option value="admin">Admin</option>
                  <option value="mid-admin">Mid Level Admin</option>
                  <option value="super-admin">Super Admin</option>
                </select>
              </div>

              <div className="col-12 col-sm-12 table-responsive" style={{marginTop:"20px"}}>

                {errorMessage && (
                    <p className="alert alert-danger  text-center">{errorMessage}</p>
                )}

                {successMessage && (
                    <p className="alert alert-success  text-center">
                      {successMessage}
                    </p>
                )}

                {fetchAllUsersLoading === false && mainUserArrayForDisplay.length > 0 ? (
                    <>
                      <table className="table table-striped table-condensed mainResponsiveTable" style={{marginBottom: "50px"}}>
                        <thead>
                        <tr className="text-center">
                          <th scope="col">S/N</th>
                          <th scope="col">Full Name</th>
                          <th scope="col">Email/Phone</th>
                          <th scope="col">Type Of User</th>
                          <th scope="col">Passport</th>
                          <th scope="col">ID Display<br />Front/Back</th>
                          <th scope="col">Delete Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*style={{user.deleted_at === null ? ({}) : ('background:"red"')}}*/}
                        {mainUserArrayForDisplay.map((user, index) => (
                            <tr style={{background: user.deleted_at === null ? ('') : ("#ddd")}} className="text-center" key={index} >
                                {/* {alert(user.deleted_at)}*/}

                                <td><span className="mobile-head">S/N</span> {" "}{StartIndex++ + 1}</td>
                                <td><span className="mobile-head">Full Name</span> {ReturnFullName(user)}</td>
                                <td><span className="mobile-head">Email/Phone</span> <div >{" "}{user.email}<br />{user.phone === null ? 'None':user.phone}</div></td>
                                <td><span className="mobile-head">Type Of User</span>{" "}{user.type_of_user}</td>
                                <td>
                                    <span className="mobile-head">Passport</span>
                                    {" "}
                                    {user.face_picture_name === null ? 'None':(<div style={{width:"30px", marginLeft:"auto", marginRight:"auto", cursor:"pointer"}} className="custom-box-shadow"><img style={{width:"100%"}} src={BACKEND_BASE_URL+faceUploads+user.face_picture_name} onClick={() => {
                                      setDataForLightBox([{id:1, image:BACKEND_BASE_URL+faceUploads+user.face_picture_name, title:  ReturnFullName(user), description: ""}]);
                                      lightBoxHandler(true, 0);
                                    }} /></div>)}
                                </td>

                                <td>
                                  {/*government_id_back, government_id_front*/}
                                    <span className="mobile-head">ID Display</span>{" "}
                                {user.id_name === null ? 'None':(<div className="custom-box-shadow" style={{width:"30px", display:"inline-block", marginLeft:"auto", marginRight:"auto", cursor:"pointer"}}><img title="Front Page" onClick={() => {
                                  setDataForLightBox([{id:1, image:BACKEND_BASE_URL+government_id_front+user.id_name, title:  ReturnFullName(user), description: ""}]);
                                  lightBoxHandler(true, 0);
                                }} style={{width:"100%"}} src={BACKEND_BASE_URL+government_id_front+user.id_name} /></div>) }
                                    {" "}
                                {user.id_back_name === null ? 'None':(<div className="custom-box-shadow" style={{width:"30px", display:"inline-block", marginLeft:"auto", marginRight:"auto", cursor:"pointer"}}><img title="Back Page" onClick={() => {
                                  setDataForLightBox([{id:1, image:BACKEND_BASE_URL+government_id_back+user.id_back_name, title:  ReturnFullName(user), description: ""}]);
                                  lightBoxHandler(true, 0);
                                }} style={{width:"100%"}} src={BACKEND_BASE_URL+government_id_back+user.id_back_name} /></div>)}
                                </td>

                                <td><span className="mobile-head">Delete Status</span> {" "}{delete_loading === true && user.unique_id === userToDelete ? 'Loading...' : user.deleted_at !== null ? (<span className="btn btn-warning btn-sm">Deleted</span>):(<span className="btn btn-success btn-sm">Not Deleted</span> ) }</td>
                                

                                <td>
                                  <span className="mobile-head">Options</span>
                                  {" "}
                                  <DropdownButton id="dropdown-basic-button" title="Options" size="sm">
                                    {user.deleted_at === null ? (
                                        <Dropdown.Item onClick={() =>{ deleteHandler(user.unique_id, user.type_of_user, loginData); setUserToDelete(user.unique_id)  } }
                                        >Delete User</Dropdown.Item>
                                    ):(
                                      <Dropdown.Item onClick={() =>{ dispatch(reverseDeleteHandler({unique_id:user.unique_id, type_of_user:user.type_of_user, loginData})); setUserToDelete(user.unique_id)  } }
                                      >Restore User</Dropdown.Item>
                                      )}

                                    <Dropdown.Item href={`/edit-user/${user.unique_id}`} >Edit User</Dropdown.Item >
                                    <Dropdown.Item href="#/action-3">Make User</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Make Admin</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Make Mid-Admin</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Make Super-Admin</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Make Status Active</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Make Status Inactive</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Confirm ID Upload</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Unconfirm ID Upload</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Decline ID Upload</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Confirm Face Upload</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Unconfirm Face Upload</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Decline Face Upload</Dropdown.Item>
                                  </DropdownButton>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                      </table>
                    </>
                ):('')}

                {fetchAllUsersLoading === false && mainUserArrayForDisplay.length === 0 ? (
                    <h3 className="alert alert-warning text-center">No Data Available</h3>
                ) : ('')}

                {fetchAllUsersLoading && <h3 className="alert alert-warning text-center">Loading.....</h3> }

              </div>

              <div className="col-12 col-sm-12" style={{marginTop:"20px"}}>
                <Pagination
                    data={filteredUserArray}
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

      <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={dataForLightBox}
          imageWidth="60vw"
          imageHeight="70vh"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
      />
    </>
  );
};

export default Admin;
