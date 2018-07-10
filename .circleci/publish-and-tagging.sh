#!/bin/bash -ex

REPO_VERSION=`npm view @mercari/stylelint-config version 2>/dev/null || exit 0`
LOCAL_VERSION=`node -p "require('./package.json').version"`

if [[ "$REPO_VERSION" = "$LOCAL_VERSION" ]]; then
  echo "$LOCAL_VERSION exists. skip publish."
else
  npm publish
  git tag ${LOCAL_VERSION}
  git push --tags origin
fi
