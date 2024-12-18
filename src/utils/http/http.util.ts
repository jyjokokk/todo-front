import axios from 'axios'

const dependencies = {
  axios
}

export class HTTP {
  constructor(private deps: typeof dependencies) {}

  async get(url: string): Promise<any> {
    const { axios } = this.deps
    const p = await axios.get(url)
    return p.data
  }

  async post(url: string, data: unknown): Promise<any> {
    const { axios } = this.deps
    const p = await axios.post(url, data)
    return p.data
  }
}

export default new HTTP(dependencies)
