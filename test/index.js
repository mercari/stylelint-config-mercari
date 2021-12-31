const fs = require('fs/promises');
const test = require('ava');
const stylelint = require('stylelint');
const config = require('..');

test('should return expected results', async t => {
  const buffer = await fs.readFile(`${__dirname}/sample.postcss`);
  const data = await stylelint.lint({
    code: buffer.toString(),
    config: config
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  t.true(errored, 'errors');
  t.is(warnings.length, 11, 'flags warnings');
});
