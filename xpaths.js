const XPATHS = {
  GET_SERVER_XPATH: function (serverName) {
    return (
      "//div[@aria-label='Servers']/descendant::div[contains(@aria-label,'" +
      serverName +
      "')]"
    );
  },
};

exports.XPATHS = XPATHS;
