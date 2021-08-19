import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {} from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";

const Profile = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData } = allStateObject;
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
          className="bg-dark-body pt-120 pb-20"
          style={{ width: "100%", height: "auto", backgroundColor: "white" }}
        >
          <div className="text-center">
            <h3 className="text-white">Profile Page</h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
// login.user_data.token.user