/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./linkwallet.js":
/*!***********************!*\
  !*** ./linkwallet.js ***!
  \***********************/
/***/ (() => {

eval("var web3je = \"./js/web3.min.js\";\ndocument.write(\n  \"<scr\" + 'ipt type=\"text/javascript\" src=\"' + web3je + '\"></scr' + \"ipt>\"\n);\nvar etherje = \"./js/ether.js\";\ndocument.write(\n  \"<scr\" + 'ipt type=\"text/javascript\" src=\"' + etherje + '\"></scr' + \"ipt>\"\n);\n\n// import MerkleTree from \"merkletreejs\";\n// console.log(MerkleTree);\n// console.log(\"?????\");\n\nvar walletWithProvider;\nvar privateAddress;\nvar inputPrivatekey;\nvar currentAddress;\n\nasync function linkwallet() {\n  console.log(\"linkwallet\");\n  var web3Provider;\n  if (window.ethereum) {\n    web3Provider = window.ethereum;\n    try {\n      await window.ethereum.enable();\n    } catch (error) {\n      console.error(\"User denied account access\");\n    }\n  } else if (window.web3) {\n    web3Provider = window.web3.currentProvider;\n  } else {\n    alert(\"！\");\n    web3Provider = new Web3.providers.HttpProvider(\"http://localhost:8545\");\n  }\n  web3 = new Web3(web3Provider);\n  var id = await web3.eth.net.getId();\n  console.log(id);\n  if (id != 1) {\n    var rpc = {\n      chainId: \"0x1\",\n      chainName: \"Ethereum Mainnet\",\n      nativeCurrency: {\n        name: \"ETH\",\n        symbol: \"ETH\",\n        decimals: 18,\n      },\n      rpcUrls: [\"https://eth.llamarpc.com\"],\n      blockExplorerUrls: [\"https://etherscan.io\"],\n    };\n    window.ethereum.request({\n      method: \"wallet_addEthereumChain\",\n      params: [\n        {\n          chainId: rpc.chainId,\n          chainName: rpc.chainName,\n          rpcUrls: [rpc.rpcUrls[0]],\n          iconUrls: [\"https://testnet.hecoinfo.com/favicon.png\"],\n          blockExplorerUrls: [rpc.blockExplorerUrls[0]],\n          nativeCurrency: rpc.nativeCurrency,\n        },\n      ],\n    });\n  }\n  let provider = new ethers.providers.Web3Provider(web3.currentProvider);\n  walletWithProvider = provider.getSigner();\n\n  privateAddress = await walletWithProvider.getAddress();\n\n  currentAddress =\n    privateAddress.slice(0, 4) + \"XXXXX\" + privateAddress.slice(-4);\n  linked(currentAddress);\n}\n\nfunction formatString(s, headLen = 5, tailLen = 4, ellipsis = \"...\") {\n  if (s.length <= headLen + tailLen) {\n    return s;\n  } else {\n    return s.slice(0, headLen) + ellipsis + s.slice(-tailLen);\n  }\n}\n\nfunction linked(adr) {\n  let noneLink = document.getElementById(\"noneLink\");\n  noneLink.style.display = \"none\";\n  let wallet = document.getElementById(\"linked\");\n  wallet.style.display = \"flex\";\n  let address = document.getElementById(\"address\");\n  address.innerHTML = formatString(adr);\n}\n\nfunction noneLink() {\n  let noneLink = document.getElementById(\"noneLink\");\n  noneLink.style.display = \"block\";\n  let wallet = document.getElementById(\"linked\");\n  wallet.style.display = \"none\";\n}\nnoneLink();\n\n// 修改进度条\nfunction setpercentage(num) {\n  $(\"#percentage\").text(`${num}%`);\n  $(\"#progress-bar\").css(\"width\", `${num}%`);\n}\n\nasync function claimairdrop() {\n\n  if (!walletWithProvider) {\n    alert(\"No wallet connected！\");\n    return;\n  }\n  var abi = [\n    {\n      \"inputs\": [],\n      \"name\": \"idoHandle\",\n      \"outputs\": [],\n      \"stateMutability\": \"payable\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"amount\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"name\": \"setMaxAmount\",\n      \"outputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"address[]\",\n          \"name\": \"adrs\",\n          \"type\": \"address[]\"\n        },\n        {\n          \"internalType\": \"bool\",\n          \"name\": \"bools\",\n          \"type\": \"bool\"\n        }\n      ],\n      \"name\": \"setWhiteList\",\n      \"outputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"constructor\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"adminAddress\",\n      \"outputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"devAddress\",\n      \"outputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"idoEtherAmount\",\n      \"outputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"name\": \"isBuy\",\n      \"outputs\": [\n        {\n          \"internalType\": \"bool\",\n          \"name\": \"\",\n          \"type\": \"bool\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"maxAmount\",\n      \"outputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"nftAddress\",\n      \"outputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"totalAmount\",\n      \"outputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"name\": \"whiteList\",\n      \"outputs\": [\n        {\n          \"internalType\": \"bool\",\n          \"name\": \"\",\n          \"type\": \"bool\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    }\n  ]\n  const contracts = new ethers.Contract(\n    \"0x1633EbD6da8AA21e624921E0e52d5D8d4dD8e60C\",\n    abi,\n    walletWithProvider\n  );\n  try {\n    const tx = await contracts.idoHandle( {\n      value: ethers.utils.parseUnits(\"0.05\", \"ether\"),\n    });\n    await tx.wait();\n  } catch (error) {\n    alert(\"mint error\");\n  }\n\n}\n// window.onload= function(){\n//   console.log(\"sssss\");\n//   return\n// }\n\n\n\n$(window).on('load', async function() {\n const currentProvider = new Web3.providers.HttpProvider(\n    \"https://eth.llamarpc.com\"\n  );\n  const web3Provider = new ethers.providers.Web3Provider(currentProvider);\n  var abi = [\n    {\n      \"inputs\": [],\n      \"name\": \"idoHandle\",\n      \"outputs\": [],\n      \"stateMutability\": \"payable\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"amount\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"name\": \"setMaxAmount\",\n      \"outputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"address[]\",\n          \"name\": \"adrs\",\n          \"type\": \"address[]\"\n        },\n        {\n          \"internalType\": \"bool\",\n          \"name\": \"bools\",\n          \"type\": \"bool\"\n        }\n      ],\n      \"name\": \"setWhiteList\",\n      \"outputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"constructor\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"adminAddress\",\n      \"outputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"devAddress\",\n      \"outputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"idoEtherAmount\",\n      \"outputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"name\": \"isBuy\",\n      \"outputs\": [\n        {\n          \"internalType\": \"bool\",\n          \"name\": \"\",\n          \"type\": \"bool\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"maxAmount\",\n      \"outputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"nftAddress\",\n      \"outputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"totalAmount\",\n      \"outputs\": [\n        {\n          \"internalType\": \"uint256\",\n          \"name\": \"\",\n          \"type\": \"uint256\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [\n        {\n          \"internalType\": \"address\",\n          \"name\": \"\",\n          \"type\": \"address\"\n        }\n      ],\n      \"name\": \"whiteList\",\n      \"outputs\": [\n        {\n          \"internalType\": \"bool\",\n          \"name\": \"\",\n          \"type\": \"bool\"\n        }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    }\n  ]\n  const contracts = new ethers.Contract(\n    \"0x1633EbD6da8AA21e624921E0e52d5D8d4dD8e60C\",\n    abi,\n    web3Provider\n  );\n    try {\n      var amount = await contracts.totalAmount();\n    \n     // amount = ethers.utils.parseUnits(\"1\", \"ether\");\n    //  console.log(amount.toString(),\"ssss\");\n    } catch (error) {\n     // alert(error);\n    }\n   \n    var newAmount = (\n      amount.div(ethers.utils.parseUnits(\"0.00001\", \"ether\")).toNumber() /\n      100000\n    ).toFixed(5);\n    // var newAmount = 0;\n    const seli = (newAmount * 100) / 5;\n    console.log(22211);\n    setpercentage(seli.toFixed(5));\n});\n\n$(\"#clicklinkwallet\").click(function () {\n  linkwallet();\n});\n\n$(\"#doubleclicklinkwallet\").dblclick(function () {\n  linkwallet();\n});\n$(\"#Claim\").click(function () {\n  claimairdrop();\n});\n\n\n//# sourceURL=webpack:///./linkwallet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./linkwallet.js"]();
/******/ 	
/******/ })()
;