import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "../store/reducers";

const store = createStore(reducers, {});

const Wrapped = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export const render = (Component, props) => {
  return Wrapped(Component, props);
};
