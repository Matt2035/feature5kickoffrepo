import React from "react";

import "./styles.css";
import Components from "./Components/Components";
import Parse from "parse";
import * as Env from "./environments";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

export default function App() {
  return <Components />;
}
