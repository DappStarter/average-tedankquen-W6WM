require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note spice prosper gesture infant sword twin'; 
let testAccounts = [
"0x08969675ed6707e2a03a33579193962665b610abd57dbccddee5b044d31ead3b",
"0x833995e9e8a2e5786e1c0d5933c18d38cd8c8aed55983fe2432b7e8011d20020",
"0x71ac940333e6013945417b1edf6c418e3d63bc95031983fc7da1f0615ddb6f0c",
"0xaa6cd1078c8814b4a07ac047702496d38c0a9e7349f8c04b33496dd7e161746f",
"0xa38580a1730e3e06ff8462d8c49f541e23de574c40fe82f783a271e6b1641437",
"0xa1354274644e07b44191f235c538bb2eca1ddce16ca1948ca1b90859749d54e1",
"0xec3b340af85ecd9393d0b283a834f735e3743119f240ae334916755c0ee51032",
"0xbea32fdf78cb0c481e4ada834d281965773d9ad05350584a318356447fd3c8b9",
"0x899a9236211820993684a5ee70c770f188375302bbe895cc07c8f2d9a30e5b4d",
"0x2caa83acfb3910f3c0d2ab3c5ef896082cc2ed6ec090b4d49be5c9b6d0895aaf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

