import React, { useContext } from "react";
import "./styles/Header.css";
import "./styles/Wizard.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { RegistrantioContext } from "../../../context/registration";

const styledLink = {
  textDecoration: "none",
};
const BusinessInfo = (props) => {
  const {
    brandName,
    setBrandName,
    brandType,
    setBrandType,
    streetAddress,
    setStreetAddress,
    city,
    setCity,
    zipCode,
    setZipCode,
    taxID,
    setTaxID,
    documentOne,
    setDocumentOne,
    documentTwo,
    setDocumentTwo,
    pdfDocument,
    setPdfDocument,
  } = useContext(RegistrantioContext);

  const handleNext = () => {
    if (
      brandName &&
      brandType &&
      streetAddress &&
      city &&
      zipCode &&
      taxID &&
      documentOne &&
      documentTwo &&
      pdfDocument
    ) {
      props.nextStep();
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="container">
      <div className="shadow-lg ">
        <div className="row m-0 fw-bold header rounded-top">
          <div className={`col text-center p-4 div-tab-active-next`}>
            <span className="step-number-active">1</span> Your Profile
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
              2
            </span>{" "}
            Business Information
          </div>
          <div className="col text-center p-4">
            <span className="step-number">3</span> Final Details
          </div>
        </div>
        <div className="p-5 bg-white rounded-bottom content">
          <div className="text-center w-50 m-auto">
            <p className="m-0">Step {props.currentStep}</p>
            <h3 className="text-primary">Business Information</h3>
            <p>Please, enter information about your company</p>
          </div>

          <Form className="w-75 m-auto">
            <Row>
              <p className="text-primary">GENERAL INFORMATION</p>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Brand Name* </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Your Business name"
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>
                    Brand Type*{" "}
                    <span
                      type="button"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Brands with distribution"
                    >
                      <FaQuestionCircle />
                    </span>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setBrandType(e.target.value)}
                  >
                    <option>Select Type of Your Brand</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Jewelry">Jewelry</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Street Address*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input Your Street Address"
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>City*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Input City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Zip Code*</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Input Zip Code"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label>Tax ID Number*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Input Tax ID Number"
                    onChange={(e) => setTaxID(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <p className="text-primary mt-2">DOCUMENTS</p>
            </Row>
            <Row className="mb-2">
              <Form.Label>
                Once the following documents are signed, you'll be ready to get
                started
              </Form.Label>
              <Col lg="10">
                <Form.Group>
                  <Form.Control
                    type="file"
                    placeholder="Electronically sign the agreement(s)"
                    onChange={(e) => setDocumentOne(e.target.files[0])}
                  />
                </Form.Group>
              </Col>
              <Col lg="2">
                <button className="btn btn-primary">
                  <FiChevronRight />
                </button>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg="10">
                <Form.Group>
                  <Form.Control
                    type="file"
                    placeholder="Electronically sign the agreement(s)"
                    onChange={(e) => setDocumentTwo(e.target.files[0])}
                  />
                </Form.Group>
              </Col>
              <Col lg="2">
                <button className="btn btn-primary">
                  <FiChevronRight />
                </button>
              </Col>
            </Row>
            <Row>
              <p className="text-primary mt-2">COI PDF UPLOAD</p>
            </Row>
            <Row className="mb-2">
              <Col lg="10">
                <Form.Group>
                  <Form.Control
                    type="file"
                    placeholder="Electronically sign the agreement(s)"
                    onChange={(e) => setPdfDocument(e.target.files[0])}
                  />
                </Form.Group>
              </Col>
              <Col lg="2">
                <button className="btn btn-primary">
                  <FiChevronRight />
                </button>
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
            <button
              onClick={props.previousStep}
              className="btn btn-outline-primary mx-4"
            >
              <FiChevronLeft />
              Previous Step
            </button>
          </p>
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

export default BusinessInfo;
