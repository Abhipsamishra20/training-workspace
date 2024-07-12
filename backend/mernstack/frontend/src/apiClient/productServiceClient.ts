import axios, { AxiosResponse } from "axios";

import httpCommon from "./http-common";
import IProduct from "../model/product";

class ProductServiceClient{

    getProducts(): Promise<AxiosResponse>{
        return httpCommon.get('/api/products')
    }

    getProductBYId(id:number): Promise<AxiosResponse>{
        return httpCommon.get(`/api/products/${id}`)
    }

    save(product: IProduct): Promise<AxiosResponse>{
        return httpCommon.post(`/api/products`,product)
    }

    update(id:number,product: IProduct): Promise<AxiosResponse>{
        return httpCommon.put(`/api/products/${id}`,product)
    }

    delete(id:number): Promise<AxiosResponse>{
        return httpCommon.delete(`/api/products/${id}`)
    }
    
}
export default new ProductServiceClient()