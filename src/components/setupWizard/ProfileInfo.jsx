import React from "react";
import "./styles/Header.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const styledLink = {
  textDecoration: "none",
};
const ProfileInfo = (props) => {
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
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Your Last name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" placeholder="Input Your Email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number*</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Input Your phone Number"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control type="password" placeholder="Create Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Your Password"
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
            <button onClick={props.nextStep} className="btn btn-primary px-4">
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
