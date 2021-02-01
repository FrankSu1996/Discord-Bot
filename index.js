const dotenv = require("dotenv");
const Discord = require("discord.js");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { XPATHS } = require("./xpaths");
require("chromedriver");
const client = new Discord.Client();
dotenv.config();

// set chrome to use default chrome profile
let options = new chrome.Options();
options.addArguments("--user-data-dir=/Users/frank/Documents/ChromeProfile");
options.addArguments("start-maximized");
// instantiate chrome driver
const driver = new Builder()
  .setChromeOptions(options)
  .forBrowser("chrome")
  .build();

// clicks a server button
let clickServer = async (serverName) => {
  await driver
    .findElement(By.xpath(XPATHS.HOME_PAGE.GET_SERVER_XPATH(serverName)))
    .click();
  console.log("Clicked server" + serverName);
};

let login = async () => {
  await driver
    .findElement(By.xpath(XPATHS.LOGIN_PAGE.EMAIL_INPUT))
    .sendKeys("franksu49@gmail.com");
  await driver
    .findElement(By.xpath(XPATHS.LOGIN_PAGE.PASSWORD_INPUT))
    .sendKeys(process.env.password);
  await driver.findElement(By.xpath(XPATHS.LOGIN_PAGE.LOGIN_BUTTON)).click();
  await driver.wait(
    until.elementLocated(
      By.xpath(XPATHS.HOME_PAGE.GET_SERVER_XPATH("BouncyBalls")),
      10000
    )
  );
  console.log("Successfully logged in");
};

let handleVoiceAlert = async () => {
  while (true) {
    try {
      await driver.switchTo().alert().accept();
      break;
    } catch (e) {
      console.log("Can't find alert");
      await driver.sleep(1000);
    }
  }
};

client.once("ready", async () => {
  await driver.get("https://discord.com/login");

  await driver.sleep(5000);
  await clickServer("BouncyBalls");
  await driver
    .findElement(By.xpath(XPATHS.HOME_PAGE.GET_VOICE_CHANNEL_XPATH("General")))
    .click();
});

client.login(process.env.TOKEN);
