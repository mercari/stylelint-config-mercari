# stylelint-config-mercari

## Install

```
$ npm install --save-dev stylelint-config-mercari
$ npm install --save-dev stylelint stylelint-order stylelint-config-standard
```

### `stylelint-config-standard`

`stylelint-config-mercari` extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) which provides stylelint's recommended rules.

### `stylelint-order`

`stylelint-config-mercari` uses [`stylelint-order`](https://github.com/hudochenkov/stylelint-order) as plugin to unify properties order. Properties are ordered by "layouts -> styles" and defined on `properties-order.js`.

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "mercari"
}
```

## Example

See `test/sample.postcss`.
