class BandSiteAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseURL = "https://project-1-api.herokuapp.com/";
    }
  
    async postComment(comment) {
      try {
        const response = await axios.post(`${this.baseURL}comments`, comment);
        return response.data;
      } catch (error) {
        console.error("Failed to post comment:", error);
        throw error;
      }
    }
  
    async getComments() {
      try {
        const response = await axios.get(`${this.baseURL}comments`);
        const sortedComments = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        return sortedComments;
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        throw error;
      }
    }
  
    async getShows() {
      try {
        const response = await axios.get(`${this.baseURL}shows`);
        return response.data;
      } catch (error) {
        console.error("Failed to fetch shows:", error);
        throw error;
      }
    }
  }
  