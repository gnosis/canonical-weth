# Canonical W-ETH

Canonical [W-ETH](https://weth.io/) package (see https://blog.0xproject.com/canonical-weth-a9aa7d0279dd)

## Usage

```sh
npm install --save truffle-contract canonical-weth
```

and

```js
const contract = require('truffle-contract');
const wethArtifact = require('canonical-weth');

const weth = contract(wethArtifact);
```

## Deployed contract addresses

- Mainnet: [0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2)
- Kovan: [0xd0a1e359811322d97991e03f863a0c30c2cf029c](https://kovan.etherscan.io/address/0xd0a1e359811322d97991e03f863a0c30c2cf029c)
- Ropsten: [0xc778417e063141139fce010982780140aa0cd5ab](https://ropsten.etherscan.io/address/0xc778417e063141139fce010982780140aa0cd5ab)
- Rinkeby: [0xc778417e063141139fce010982780140aa0cd5ab](https://rinkeby.etherscan.io/address/0xc778417e063141139fce010982780140aa0cd5ab)
