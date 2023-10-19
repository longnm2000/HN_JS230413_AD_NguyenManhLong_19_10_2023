import React from "react";
import SetupComp from "../components/SetupComp";

function SetupPage() {
  return (
    <>
      <div className="bg-light" style={{height:"100vh"}}>
        <div className="w-50 mx-auto pt-5">
          <SetupComp />
        </div>
      </div>
    </>
  );
}

export default SetupPage;
