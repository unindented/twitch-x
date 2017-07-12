#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

if [ "$TRAVIS_BRANCH" != "master" ] ; then
  echo "This commit was made against $TRAVIS_BRANCH and not master! No deploy!"
  exit 0
fi

if [ "$TRAVIS_PULL_REQUEST" != "false" ] ; then
  echo "This commit was made in a pull request! No deploy!"
  exit 0
fi

npm run clean
npm run build

if [ "$TRAVIS_OS_NAME" != "linux" ] ; then
  echo "This commit was not made from Linux! No deploy!"
  exit 0
fi

npm run deploy

cd build
git init
git config user.name "Travis"
git config user.email "travis@travis-ci.org"
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}" master:gh-pages &> /dev/null
