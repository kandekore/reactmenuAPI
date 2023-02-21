import axios from "axios";

// const search = async (query) =>
//   axios.get(`https://tasty.p.rapidapi.com/recipes/list?q=${query}`, {
//     headers: {
//       "x-rapidapi-host": "tasty.p.rapidapi.com",
//       "x-rapidapi-key": "783f757075mshb77113ceecf7712p10d410jsn37dcac0e1338",
//     },
//     params: { from: "0", size: "20", tags: "under_30_minutes" },
//   });

const search = async (query, lowCarb) => {
  const params = { from: "0", size: "20" };
  if (lowCarb) {
    params.dietLabels = "Low-Carb";
  }
  return axios.get(
    `https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`,
    {
      headers: {
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": "e10f9c3829mshc1c6f1c56857494p185016jsne7dfd1e75bb5",
      },
      params,
    }
  );
};

const api = { search };

export default api;
