import React, { createContext, useState } from "react";

export const RegistrantioContext = createContext();

export default ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  //
  const [brandName, setBrandName] = useState("");
  const [brandType, setBrandType] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [taxID, setTaxID] = useState("");
  //
  const [documentOne, setDocumentOne] = useState(null);
  const [documentTwo, setDocumentTwo] = useState(null);
  const [pdfDocument, setPdfDocument] = useState(null);

  return (
    <RegistrantioContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        password,
        setPassword,
        //
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
        //
        documentOne,
        setDocumentOne,
        documentTwo,
        setDocumentTwo,
        pdfDocument,
        setPdfDocument,
      }}
    >
      {children}
    </RegistrantioContext.Provider>
  );
};
