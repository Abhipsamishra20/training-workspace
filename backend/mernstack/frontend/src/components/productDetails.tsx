import { useState, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import IProduct from "../model/product"
import httpClient from "../apiClient/httpClient"
import { Rating } from "./starRating"


export default function ProductDetails() {

    const { id } = useParams<string>()

    const navigator = useNavigate()

    const [product, setProduct] = useState({} as IProduct)

    const getProductById = useCallback(async () => {

        const response = await httpClient.getById('http://localhost:9999/api/products', Number(id))
        setProduct(response)

    }, [])

    useEffect(() => { getProductById() }, [])

    return (
        <>
            <div className="card" style={{ width: 200 }}>
                <img src={product.imageUrl} title={product.productName} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">{product.productAvailable}</p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.productCode}</p>
                    <Rating rating={product.starRating}></Rating>
                    <p><button className="btn btn-secondary" onClick={() => navigator('/products')}>Back</button></p>
                </div>


            </div>
        </>
    )
}