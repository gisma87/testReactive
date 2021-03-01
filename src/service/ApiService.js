import axios from "axios";

class ApiService {
  constructor() {
    this.URL = 'https://jsonplaceholder.typicode.com'
  }

  async getUsers() {
    const response = await axios.get(`${this.URL}/users`)
    return response.data
  }

  async getUserPosts(userId) {
    const response = await axios.get(`${this.URL}/posts?userId=${userId}`)
    return response.data
  }
}

const apiService = new ApiService()

export default apiService