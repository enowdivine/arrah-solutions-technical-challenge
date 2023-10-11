import React, { useContext } from "react";
import "./styles/Header.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { RegistrantioContext } from "../../context/registration";

const styledLink = {
  textDecoration: "none",
};
const FinalDetails = (props) => {
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    brandName,
    brandType,
    streetAddress,
    city,
    zipCode,
    taxID,
    documentOne,
    documentTwo,
    pdfDocument,
    //
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setPassword,
    setBrandName,
    setBrandType,
    setStreetAddress,
    setCity,
    setZipCode,
    setTaxID,
    setDocumentOne,
    setDocumentTwo,
    setPdfDocument,
  } = useContext(RegistrantioContext);

  const submitHandler = () => {
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      brandName,
      brandType,
      streetAddress,
      city,
      zipCode,
      taxID,
      documentOne,
      documentTwo,
      pdfDocument,
    });
    alert("Details Submmited");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setBrandName("");
    setBrandType("");
    setStreetAddress("");
    setCity("");
    setZipCode("");
    setTaxID("");
    setDocumentOne("");
    setDocumentTwo("");
    setPdfDocument("");
    // Navigate to login
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="shadow-lg rounded">
        <div className="row m-0 fw-bold header">
          <div className={`col text-center p-4 div-tab-active-next`}>
            <span className="step-number-active">1</span> Your Profile
          </div>
          <div
            className={
              props.isActive
                ? "col text-center p-4 div-tab-active-next"
                : "col text-center p-4"
            }
          >
            <span
              className={props.isActive ? "step-number-active" : "step-number"}
            >
              2
            </span>{" "}
            Business Information
          </div>
          <div
            className={
              props.isActive
                ? "col text-center p-4 div-tab-active"
                : "col text-center p-4"
            }
          >
            <span
              className={props.isActive ? "step-number-active" : "step-number"}
            >
              3
            </span>
            Final Details
          </div>
        </div>
        <div className="p-5">
          <div className="text-center w-50 m-auto mt-4 mb-5">
            <p className="m-0">Step {props.currentStep}</p>
            <h3 className="text-primary">Final Details</h3>
            <p>Confirm information below submitting</p>
          </div>

          <Form className="w-75 mt-4 mb-5 m-auto">
            <Row>
              <p className="text-primary">BASIC INFORMATION</p>
            </Row>
            <Row>
              <Col>First Name</Col>
              <Col>{firstName}</Col>
            </Row>
            <Row>
              <Col>Last Name</Col>
              <Col>{lastName}</Col>
            </Row>
            <Row>
              <Col>Email</Col>
              <Col>{email}</Col>
            </Row>
            <Row>
              <Col>Phone Number</Col>
              <Col>{phoneNumber}</Col>
            </Row>
            <Row>
              <Col>Password</Col>
              <Col>{password}</Col>
            </Row>
            <Row className="mt-3">
              <p className="text-primary">GENERAL INFORMATION</p>
            </Row>
            <Row>
              <Col>Brand Name</Col>
              <Col>{brandName}</Col>
            </Row>
            <Row>
              <Col>Brand type</Col>
              <Col>{brandType}</Col>
            </Row>
            <Row>
              <Col>Street Address</Col>
              <Col>{streetAddress}</Col>
            </Row>
            <Row>
              <Col>City</Col>
              <Col>{city}</Col>
            </Row>
            <Row>
              <Col>Zip Code</Col>
              <Col>{zipCode}</Col>
            </Row>
            <Row>
              <Col>Tax ID Number</Col>
              <Col>{taxID}</Col>
            </Row>
            <Row className="mt-3">
              <p className="text-primary">DOCUMENTS</p>
            </Row>
            <Row>
              <Col>Document One</Col>
              <Col>{documentOne.name}</Col>
            </Row>
            <Row>
              <Col>Document Two</Col>
              <Col>{documentTwo.name}</Col>
            </Row>
            <Row className="mt-3">
              <p className="text-primary">COI PDF UPLOAD</p>
            </Row>
            <Row>
              <Col>PDF Document</Col>
              <Col>{pdfDocument.name}</Col>
            </Row>
          </Form>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <Link to="/login" style={styledLink}>
            <FiChevronLeft />
            Back to Login
          </Link>
        </div>
        <div className="d-flex">
          <p>
            <button
              onClick={props.previousStep}
              className="btn btn-outline-primary mx-4"
            >
              <FiChevronLeft />
              Previous Step
            </button>
          </p>
          <p>
            <button onClick={submitHandler} className="btn btn-primary px-4">
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalDetails;
