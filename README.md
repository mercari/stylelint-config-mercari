# stylelint-config-mercari

## Install
```
$ npm install --save-dev @mercari/stylelint-config
```

if you have never get modules from private registry, see below wiki and set `.npmrc`.

Mercari Wiki /dev/frontend/how-to-use-mercari-npm-registry
https://wiki.mercari.in/5b2065b8b4e3f10001d009b5

## Sample

```css
@import url("x.css");
@import url("y.css");

.selector1 {
  margin-top: 24px;
  padding: "1px 2px 3px 4px";
}

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, .1));
  box-sizing: border-box;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px;
  top: calc(calc(1em * 20) / 40);
}

@media (min-width >= 10em) {
  .selector {
    /* comment 1*/
    background-color: #ccc;

    /* comment 2*/
    transform: translate(1, 1) scale(4);
  }
}

.selector-x > .selector-y {
  font-size: 1rem;
}

.selector-z:after {
  background-image: url("http://hoge/x.svg");
  content: "";
}

/* css-next */
:root {
  --font-size: 1rem;
  --color: #fff;
  --danger-theme: {
    background: red;
    color: hwb(90, 0%, 0%, .5);
  };
}

body {
  font-family: system-ui;
}

.selector-100 {
  text-align: center;

  & p {
    color: #f0f;
  }

  & a {
    color: var(--color);
  }
}

.danger {
  @apply --danger-theme;
  font-size: calc(var(--font-size) * 2);
}

p:matches(:first-child, .special) {
  background-color: hsl(300grad 25% 15% / 70%);
  color: red;
}

@custom-media --small-viewport (max-width: 30em);

@custom-selector :--button button, .button;
```

## Usage

Set your `stylelint` config to:

{
  "extends": "@mercari/stylelint-config"
}
