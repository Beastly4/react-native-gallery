import React from "react";
import { Provider } from "react-redux";
import AsyncGalleryApp from "./src/components/AsyncGalleryApp";
import store from "./src/redux/store";

function App() {
  return (
    <Provider store={store}>
      <AsyncGalleryApp />
    </Provider>
  );
}

export default App;
