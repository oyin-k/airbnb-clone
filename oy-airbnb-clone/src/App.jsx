import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { db } from "./services/firebase";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import Details from "./pages/Details";

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredResult, setFilteredResult] = useState();

  useEffect(() => {
    setLoading(true);
    const unsub = db.collection("apartments").onSnapshot(
      (snapshot) => {
        const allApartments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApartments(allApartments);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const results = apartments.filter((apartment) =>
      apartment.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResult(results);
  }, [apartments, value]);

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
          <Route exact path="/search">
            <SearchPage
              apartments={value.length < 1 ? apartments : filteredResult}
              loading={loading}
            />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <Home topApartments={apartments.slice(0, 3)} loading={loading} />
          </Route>
          <Route component={Page404} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
