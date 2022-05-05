# Canonical W-ETC

## Canonical [W-ETC](https://wrappedether.org/) package.

Inspiration from Canonical [W-ETH](https://weth.io/) package. See: https://blog.0xproject.com/canonical-weth-a9aa7d0279dd)

## Usage

```sh
npm install --save truffle-contract canonical-wetc
```

and

```js
const contract = require('truffle-contract');
const wetcArtifact = require('canonical-wetc');

const wetc = contract(wetcArtifact);
```

## Deployed contract addresses

- ETC Mainnet: [0x0000000000000000000000000000000000000000](https://blockscout.com/etc/mainnet/address/0x0000000000000000000000000000000000000000)
- Kotti: [0x0000000000000000000000000000000000000000](https://blockscout.com/etc/kotti/address/0x0000000000000000000000000000000000000000)
- Mordor: [0x0000000000000000000000000000000000000000](https://blockscout.com/etc/mordor/address/0x0000000000000000000000000000000000000000)
