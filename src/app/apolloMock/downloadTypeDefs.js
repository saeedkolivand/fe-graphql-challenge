const { fetchTypeDefs } = require("apollo-mocked-provider");

(() => {
  fetchTypeDefs({ uri: "https://countries.trevorblades.com" });
})();
