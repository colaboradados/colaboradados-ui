import axios from "axios";

import endpoints from "./endpoints";

const API = {
  fetchDatabases: async function(shouldThrow = false) {
    try {
      const response = await axios.get(endpoints.URL_DATABASES);
      const data = await response.data;
      return data;
    } catch (err) {
      if (shouldThrow) {
        throw err;
      } else {
        console.error(err);
        return;
      }
    }
  },
  subscribeToNewsletter: async function(data) {
    // TODO
  },
  submitBases: async function(data) {
    // TODO
  },
};

export default API;
