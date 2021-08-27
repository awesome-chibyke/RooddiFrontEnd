/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetIdUploadState, editUserProfileAction } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";
import ErrorSuccessHook from "../redux/ErrorSuccessHook";

const UploadID = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, idUpload } = allStateObject;
  // const { user: userData } = loginData.user_data;

  const [upload_id_card_front, setUploadIdCardFront] = useState("");
  const [upload_id_card_back, setUploadIdCardBack] = useState("");
  const [document_number, setDocumentNumber] = useState("");

  let loadingStatus = false;
  if (idUpload.loading === true) {
    loadingStatus = true;
  }
  const { error: errorMessage, success: successMessage } = ErrorSuccessHook(
    idUpload.success,
    idUpload.error,
    idUpload.message,
    idUpload,
    loadingStatus
  );

  useEffect(() => {
    return () => {
      dispatch(resetIdUploadState());
    };
  }, []);
  return (
    <>
      {/*Redirect to login if isLogged is false  */}
      {loginData.isLogged === false ? (
        <DelayedRedirect to={`/login`} delay={500} />
      ) : (
        ""
      )}
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
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="box box-body">
                  <div className="content-top-agile pb-0 pt-20">
                    <h2 className="text-primary">Upload Your ID</h2>
                  </div>
                  <div>
                    <form action method="post">
                      <div className="form-group">
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
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlFile1">
                          ID Card Front
                        </label>
                        <div className="input-group mb-15">
                          <input
                            type="file"
                            class="form-control-file"
                            id="upload_id_card_front"
                            value={upload_id_card_front}
                            onChange={(e) =>
                            setUploadIdCardFront(e.target.value)
                            }
                          />
                        </div>
                        <span className="error_displayer err_upload_id_card_front"></span>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlFile1">
                          ID Card Back
                        </label>
                        <div className="input-group mb-15">
                          <input
                            type="file"
                            class="form-control-file"
                            id="upload_id_card_back"
                            value={upload_id_card_back}
                            onChange={(e) =>
                            setUploadIdCardBack(e.target.value)
                            }
                          />
                        </div>
                        <span className="error_displayer err_upload_id_card_back"></span>
                      </div>

                      <div className="form-group">
                        <label>Document Number</label>
                        <div className="input-group mb-15">
                          <input
                            id="document_number"
                            className="form-control ps-15 bg-transparent"
                            value={document_number}
                            onChange={(e) => setDocumentNumber(e.target.value)}
                          />
                        </div>
                        <span className="error_displayer err_document_number"></span>
                      </div>

                      <div className="row">
                        <div className="col-12 text-center">
                          {loginData.isLogged === true ? (
                            <button
                              type="submit"
                              onClick={async () =>
                                dispatch(
                                  await editUserProfileAction({
                                    loginData,
                                    upload_id_card_front,
                                    upload_id_card_back,
                                    document_number,
                                  })
                                )
                              }
                              className="btn btn-primary btn-block w-p100 mt-15"
                            >
                              Submit
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UploadID;
