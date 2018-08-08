import fs from 'fs';
import util from 'util';
import test from 'ava';
import stylelint from 'stylelint';
import config from '../';

const readFile = util.promisify(fs.readFile);

test('should return no errored', async t => {
  const buffer = await readFile(`${__dirname}/sample.postcss`);
  const data = await stylelint.lint({
    code: buffer.toString(),
    config: config
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  if (errored) {
    console.log(warnings);
  }

  t.falsy(errored, 'no errored');
  t.is(warnings.length, 0, 'flags no warnings');
});
