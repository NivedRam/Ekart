import { useState } from "react";
import Home from "./Home";
import Checkout from "./components/checkout/Checkout";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
