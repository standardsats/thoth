#! /usr/bin/env nix-shell
#! nix-shell -i bash -p yarn nodejs
yarn
yarn build
npm run build
cp -r dist/* ../thothpay/thothpay-public/static
