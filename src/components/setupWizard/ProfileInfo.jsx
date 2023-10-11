import React, { useContext, useState } from "react";
import "./styles/Header.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RegistrantioContext } from "../../context/registration";

const styledLink = {
  textDecoration: "none",
};
const ProfileInfo = (props) => {
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    setPassword,
  } = useContext(RegistrantioContext);

  const handleNext = () => {
    if (
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      createPassword &&
      confirmPassword
    ) {
      if (createPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      } else {
        setPassword(createPassword);
        props.nextStep();
      }
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="container mt-4">
      <div className="shadow-lg rounded">
        <div className="row m-0 fw-bold header">
          <div className={`col text-center p-4 div-tab-active`}>
            <span className="step-number-active">1</span> Your Profile
          </div>
          <div className="col text-center p-4">
            <span className="step-number">2</span> Business Information
          </div>
          <div className="col text-center p-4">
            <span className="step-number">3</span> Final Details
          </div>
        </div>
        <div className="p-5">
          <div className="text-center w-50 m-auto mt-4 mb-5">
            <p className="m-0">Step {props.currentStep}</p>
            <h3 className="text-primary">Your Profile</h3>
            <p>
              Enter the login information from your account. Your will be able
              to create additional users after registering.
            </p>
          </div>
          <Form className="w-75 mt-4 mb-5 m-auto">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Your First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Your Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Input Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number*</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Input Your phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create Password"
                    onChange={(e) => setCreatePassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
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
            <button onClick={handleNext} className="btn btn-primary px-4">
              Next Step
              <FiChevronRight />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
