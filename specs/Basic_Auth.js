const assert = require('assert');
it('Verify if basic authentication on internet', () => {
browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
const title = browser.getTitle();
assert.strictEqual(title, 'The Internet');
const actualSuccessMessage = $('div.example>p').getText();
assert.strictEqual(actualSuccessMessage, 'Congratulations! You must have the proper credentials.');
});