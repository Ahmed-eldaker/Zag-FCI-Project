import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { Counter } from "./Components/Counter";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import ProductDetail from "./Components/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="Users" element={<Users />} />
        <Route path="Posts" element={<Posts />} />
      </Route>
      <Route path="product/:productId" element={<ProductDetail />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Route>
  )
);
function App() {
  // const [count, setCount] = useState(0)

  return <RouterProvider router={router} />;
}

export default App;
