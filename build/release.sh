#!/usr/bin/env sh
yarn stdver

yarn build:lib

git remote add github https://$GITHUB_TOKEN@github.com/FEMessage/vant.git > /dev/null 2>&1
git push github HEAD:master --follow-tags

GREN_GITHUB_TOKEN=$GITHUB_TOKEN yarn gren
