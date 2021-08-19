import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { activateTwoFactorAction } from "../redux";
import DelayedRedirect from "../components/Includes/DelayedRedirect";

const TwoFactor = () => {
  const dispatch = useDispatch();
  const allStateObject = useSelector((state) => state);
  let { login: loginData, twofactor } = allStateObject;

  const activateTwoFactorHandler = (loginData) => {
    if (loginData.isLogged === true) {
      dispatch(activateTwoFactorAction(loginData));
    }
  };
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
          className="bg-dark-body bg-food-white pt-120 pb-20"
          style={{ width: "100%", height: "auto", backgroundColor: "white" }}
        >
          <div className="text-center">
            <h3 className="text-white">Activate Two Factor</h3>
            <span
              className="btn btn-success mt-4 mb-4"
              /*onClick={() => activateTwoFactorHandler(loginData)}*/
            >
              {" "}
              Activate Two Factor
            </span>
            {/* Redireect to two factor */}
            {twofactor.activate_twofactor === true ? (
              <DelayedRedirect to={`/two_factor_finalize`} delay={500} />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default TwoFactor;
