import "./styles.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

export default function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Will only run once when the componenet loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
        </Routes>
      </div>
    </Router>
  );
}
