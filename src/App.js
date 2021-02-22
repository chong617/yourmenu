import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./component/MainComponent";
import { Provider } from "react-redux";
import { configStore } from "./redux/configStore";
import "./App.css";

const store = configStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
