// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': browser => {
    browser
      .init()
      .waitForElementVisible('#root')
      .assert.elementPresent('#storybook-preview-iframe')
      .end();
  }
};
