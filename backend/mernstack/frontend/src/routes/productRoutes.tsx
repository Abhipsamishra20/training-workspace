import { FC, ReactElement } from "react";
import App from "../App";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../components/productsList";
import ProductDetails from "../components/productDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import { Home } from "../components/home";
import PrivateRoute from "../components/privateRoute";
import { ProductProvider } from "../context/productContext";

export const AppRoutes:FC<any> = ():ReactElement =>{

    return (
        <App>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/login" element={<Login/>}/>
                <Route path = "/register" element={<Register/>}/>
                <Route path = "/products" element={<PrivateRoute><ProductProvider><ProductsList/></ProductProvider></PrivateRoute>}/>
                <Route path = "/products/:id" element={<PrivateRoute><ProductDetails/></PrivateRoute>}/>
                <Route path = "/products/:id/edit" element={<ProductsList/>}/>
            </Routes>
        </App>
    )
}
