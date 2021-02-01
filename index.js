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

// instantiate chrome driver
const driver = new Builder()
  .setChromeOptions(options)
  .forBrowser("chrome")
  .build();

// clicks a server button
let clickServer = async (driver, serverName) => {
  await driver.findElement(By.xpath(XPATHS.GET_SERVER_XPATH(serverName)));
};

let login = async (driver, userName, password) => {
  await driver;
};

client.once("ready", async () => {
  await driver.get("https://discord.com/login");
  await driver.manage().window().maximize();

  console.log("Ready!");
});

client.login(process.env.TOKEN);
