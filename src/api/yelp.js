import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 7WdRRyXWXLJhCwSgB1eZe75NkJfc8OLGIxsmivDWcxLZRUH8PoKyldZCpbQDDZZ3GxwNNnVKwtihvkWsnj5-QVhxOFceVqkES7KTQX80kw52C29xjbHBpAk1cEOgX3Yx",
  },
});
