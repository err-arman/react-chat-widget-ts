#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git push -f git@github.com:Yousuf-Basir/react-chat-widget-ts.git main:gh-pages

cd -