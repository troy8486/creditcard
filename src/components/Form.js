import React from "react";
import { countrycodes } from "../config";
import { useDispatch } from "react-redux";
import {
  addCardNumber,
  addCountryCode,
  addCvv,
  addExpiryDate,
  addFullName,
  addPhoneNumber,
} from "../utils/cardSlice";

const Form = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardnumber":
        dispatch(addCardNumber(value));
        break;
      case "fullname":
        dispatch(addFullName(value));
        break;
      case "cvv":
        dispatch(addCvv(value));
        break;
      case "countrycode":
        dispatch(addCountryCode(value));
        break;
      case "phonenumber":
        dispatch(addPhoneNumber(value));
        break;
      case "expirydate":
        dispatch(addExpiryDate(value));
        break;
      default:
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col w-2/4">
        <input
          type="tel"
          name="cardnumber"
          placeholder="Card Number"
          onChange={handleInputChange}
          maxLength="16"
          pattern="\d*"
          title="Card number should only contain digits"
          className="m-2 p-2 border border-s-blue-500 rounded-xl"
        />

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={handleInputChange}
          className="m-2 p-2 border border-s-blue-500 rounded-xl"
        />

        <div className="flex flex-row">
          <select
            name="countrycode"
            id="countryCode"
            onChange={handleInputChange}
            className="w-1/6 m-2 p-2 border border-s-blue-500 rounded-xl text-base"
          >
            {countrycodes.countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.code}-{country.name}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phonenumber"
            placeholder="Number"
            onChange={handleInputChange}
            maxLength="10"
            className="flex-grow m-2 p-2 border border-s-blue-500 rounded-xl"
          />
        </div>

        <div className="flex flex-row">
          <input
            type="text"
            name="expirydate"
            placeholder="Valid Thru (MM/YY)"
            onChange={handleInputChange}
            maxLength="4"
            className="flex-grow m-2 p-2 border border-s-blue-500 rounded-xl"
          />

          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            onChange={handleInputChange}
            maxLength="3"
            className="flex-grow m-2 p-2 border border-s-blue-500 rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
