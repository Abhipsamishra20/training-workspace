
import IProduct from "../model/product"
import {useCallback,useContext,useEffect,useState} from "react"
import { Rating } from "./starRating"
import httpClient from "../apiClient/httpClient"
import { ProductContext } from "../context/productContext"
import { Link } from "react-router-dom"

export default function ProductsList() {

    const {filteredProducts} = useContext(ProductContext)


    const [show, setShow] = useState<boolean>(false)

    

    
    const showOrHideImage = () => {
        setShow(!show)
    }

    
    return (
        <div className='card'>
            <div className='card-header'>
                Products App
            </div>
            <div className='card-body'>
    
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    <button className='btn btn-primary' onClick={showOrHideImage} >
                                        {show ? 'Hide ' : 'Show '}Image
                                    </button>
                                </th>
                                <th>Product</th>
                                <th>Code</th>
                                <th>Available</th>
                                <th>Price</th>
                                <th>5 Star Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                filteredProducts.map((product: IProduct) =>

                                    <tr key={product.productId}>
                                        <td>
                                            <img src={product.imageUrl} title={product.productName} className="avatar"
                                                style={{ width: 75, margin: 2, display: show ? 'block' : 'none' }} />

                                        </td>
                                        {/* <td><a href={`/products/${product.productId}`}>{product.productName}</a></td> */}
                                        <td><Link to={`/products/${product.productId}`}>{product.productName}</Link></td>
                                        <td>{product.productCode}</td>
                                        <td>{product.productAvailable}</td>
                                        <td>{product.price}</td>
                                        {/* <td>{product.starRating}</td> */}

                                        <td><Rating rating = {product.starRating}/></td>

                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>



    )
}