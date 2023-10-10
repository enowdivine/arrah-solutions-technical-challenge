import React from "react";
import StepWizard from "react-step-wizard";
import ProfileInfo from "./ProfileInfo";
import BusinessInfo from "./BusinessInfo";
import FinalDetails from "./FinalDetails";

const SetupWizard = () => {
  return (
    <StepWizard>
      <ProfileInfo />
      <BusinessInfo />
      <FinalDetails />
    </StepWizard>
  );
};

export default SetupWizard;
