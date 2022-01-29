require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food stock rifle mad honey hen light army giant'; 
let testAccounts = [
"0x1c6473250ff176ace6017b4ee00a67c6341bcb3785973db11d8e70959f2ae66b",
"0x6205ad8a60c6fce61f4d71c0450c8a03d6bca44251fa75193d95c04960f4ec4f",
"0x789fb2e7787d9029fb7519c1ba44d45067bba6ee73ad275646d8f0a2a12eeb1f",
"0x16eeead7a627649d15d435b58d66c2403f94ac6e4d792158675acc37e3b75ed0",
"0x0edfcc7750b1e458d6c56f154dba61a12ecafb527bea398d94e28067640521c7",
"0x015459a182eb6c495f4b2013115c3b2bf958906a6245c4f74a9f4897794b98a2",
"0x31a7292b1fed9a597cc131371f2f8accc3bc64178768935f0c27c0dad268e395",
"0xcf1b0978c0fd1432628c08d3bf0f2e78b4a95e75eb1f27ad90300318f71e3aee",
"0x9f92b0884f3d71ae2905c0d7e1f663eb2fceab102b3280a6462388bd0109571c",
"0x2955566a43b942ec123a062aab509d44614634ca811aff9b34f402f77e8b81be"
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

