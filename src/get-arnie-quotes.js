const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {

  const responses = await Promise.all(urls.map((url) => httpGet(url)));

  return responses.map((response) => {
    const body = JSON.parse(response.body);
    if (response.status !== 200) {
      return { FAILURE: body.message };
    }
    return { "Arnie Quote": body.message };
  });
};

module.exports = {
  getArnieQuotes,
};
