import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/products/:id", element: <Products></Products> },
        { path: "/product/:id", element: <Product></Product> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
