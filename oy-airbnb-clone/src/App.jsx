import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { db } from "./services/firebase";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredResult, setFilteredResult] = useState();

  useEffect(() => {
    setLoading(true);
    const unsub = db.collection("apartments").onSnapshot((snapshot) => {
      const allApartments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setApartments(allApartments);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const results = apartments.filter((apartment) =>
      apartment.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResult(results);
  }, [value]);

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div className="app">
      <Router>
        <Header
          value={value}
          handleChange={(e) => handleChange(e.target.value)}
        />

        <Switch>
          <Route path="/search">
            <SearchPage
              apartments={value.length < 1 ? apartments : filteredResult}
              loading={loading}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
