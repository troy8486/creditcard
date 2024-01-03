import React, { useState } from "react";
import CardUI from "./CardUI";
import Form from "./Form";
import { Provider } from "react-redux";
import cardStore from "../utils/cardStore";

const Body = () => {
  return (
    <Provider store={cardStore}>
        <CardUI/>
        <Form/>
    </Provider>
  );
};

export default Body;
