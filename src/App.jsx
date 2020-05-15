import React from "react";
import Catch from "./components/catch";
// import { ReactComponent as ReactLogo } from "./assets/logo.svg";
import Todos from "./pages/todos";
import "./App.scss";

function App() {
  return (
    <Catch>
      <div className={['App', 'App-header'].join(' ')}>
        <Todos />
      </div>
    </Catch>
  );
}

export default App;
