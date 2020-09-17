const fetch = require(`node-fetch`);

const API = {
  fetchDatabases: async function(shouldThrow = false) {
    const endpoint = process.env.URL_DATABASES;
    try {
      const response = await fetch(endpoint, {
        headers: {
          "Content-type": "text/csv",
        },
      });
      const data = await response.json();
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
  subscribeToNewsletter: async function(data) {},
};

module.exports = API;
