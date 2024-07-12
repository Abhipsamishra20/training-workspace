import { createContext,FC, ReactElement,useState,useCallback,useEffect } from "react";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";
import { Axios, AxiosResponse } from "axios";
import { getProducts } from "../services/product.service";

interface Product_Context{
    products : IProduct[]
    filteredProducts: IProduct[]
    setFilteredProducts: Function
}

interface Props{
    children : ReactElement
}

//this is called a publisher
export const ProductContext = createContext<Product_Context>({
    products:[],
    filteredProducts:[],
    setFilteredProducts:() =>{}
})


export const ProductProvider:FC<Props>= ({children}): ReactElement => {

    const [products,setProducts] = useState<IProduct[]>([])
    const [filteredProducts,setFilteredProducts] = useState<IProduct[]>([])

    const getProductsSecured = useCallback(async()=>{
        const response = await getProducts()
        setProducts(response.data)
        setFilteredProducts(response.data)
    },[])

    useEffect(() =>{
        getProductsSecured()
    },[])

    const context ={
        products,
        filteredProducts,
        setFilteredProducts
    }

    return (
        <ProductContext.Provider value ={context}>
            {children}
        </ProductContext.Provider>
    )
}

