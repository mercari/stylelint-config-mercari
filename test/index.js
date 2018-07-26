import fs from 'fs';
import test from 'ava';
import stylelint from 'stylelint';
import config from '../';

const sampleCss = fs.readFileSync(`${__dirname}/sample.postcss`, 'utf8');

test('should return no errored', (t) => {
  return stylelint.lint({
    code  : sampleCss,
    config: config
  }).then((data) => {
    const { errored, results } = data;
    const { warnings } = results[0];

    if (errored) {
      console.log(warnings);
    }

    t.falsy(errored, 'no errored');
    t.is(warnings.length, 0, 'flags no warnings');
  }).catch((err) => {
    console.log(err);
    t.fail();
  });
});
