const XPATHS = {
  LOGIN_PAGE: {
    EMAIL_INPUT: "//input[@aria-label='Email or Phone Number']",
    PASSWORD_INPUT: "//input[@aria-label='Password']",
    LOGIN_BUTTON: "//button[@type='submit']",
  },
  HOME_PAGE: {
    GET_SERVER_XPATH: function (serverName) {
      return (
        "//div[@aria-label='Servers']/descendant::div[contains(@aria-label,'" +
        serverName +
        "')]"
      );
    },
    GET_VOICE_CHANNEL_XPATH: function (voiceChannel) {
      return (
        "//div[@aria-label='Voice']/following-sibling::div[text()='" +
        voiceChannel +
        "']"
      );
    },
  },
};

exports.XPATHS = XPATHS;
