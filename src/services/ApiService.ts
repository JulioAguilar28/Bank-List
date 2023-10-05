import axios, { Axios } from 'axios'

/**
 * This class is a singleton of an Axios Instance
 * this will help us to avoid authentication of the service each time
 * we want to make a request
 */
export class ApiService {
  private static instance: ApiService
  private _axios: Axios

  private constructor() {
    this._axios = axios.create({
      baseURL: 'https://dev.obtenmas.com/catom/api'
    })
  }

  public static of() {
    if (this.instance == null) this.instance = new ApiService()
    return this.instance._axios
  }
}
