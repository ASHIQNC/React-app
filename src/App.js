import React from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/todo/Todo";
import Cards from "./components/cards/Cards";
import Order from "./components/order/Order";
import Posts from "./components/posts/Posts";
import About from "./components/aboutMe/About";
import CardDetail from "./components/posts/cardDetails";
import Login from "./components/login/Login";
import Card from "./pages/Card";

function App() {
  return (
    <div>
      {console.log("path", window.location.pathname !== "/" ? <Navbar /> : "")}

      {window.location.pathname !== "/" ? <Navbar /> : ""}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/card" element={<Card />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:post_id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
