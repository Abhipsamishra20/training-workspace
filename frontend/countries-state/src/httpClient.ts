import Country from "./Country"
class httpClient{
    async get(url: string):Promise<Country[]>{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
}
export default new httpClient()