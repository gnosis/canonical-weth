module.exports = {
  contractName: "WETH9",
  abi: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address"
        },
        {
          name: "",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          name: "guy",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: true,
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "dst",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "src",
          type: "address"
        },
        {
          indexed: false,
          name: "wad",
          type: "uint256"
        }
      ],
      name: "Withdrawal",
      type: "event"
    },
    {
      constant: false,
      inputs: [],
      name: "deposit",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "guy",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "dst",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "src",
          type: "address"
        },
        {
          name: "dst",
          type: "address"
        },
        {
          name: "wad",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    }
  ],
  networks: {
    "1": {
      events: {},
      links: {},
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      transactionHash:
        "0xb95343413e459a0f97461812111254163ae53467855c0d73e0f1e7c5b8442fa3"
    },
    "3": {
      events: {},
      links: {},
      address: "0xc778417e063141139fce010982780140aa0cd5ab",
      transactionHash:
        "0x19ae7fb1bd96c6f623741f76573a3e97d8a863358dafb1d773a8f9ad98b424b4"
    },
    "4": {
      events: {},
      links: {},
      address: "0xc778417e063141139fce010982780140aa0cd5ab",
      transactionHash:
        "0x7bc8e85f99556aa23a41dd3c107e92ec76f057e4cea39f376ffb1b15d514b11f"
    },
    "42": {
      events: {},
      links: {},
      address: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
      transactionHash:
        "0x0e8d602b350e2a896134d79b48b8a59488a0a70933d46c5736c47b468877be35"
    }
  },
  schemaVersion: "2.0.0",
  updatedAt: "2018-05-08T22:28:55.958Z"
};
