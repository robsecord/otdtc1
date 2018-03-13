var OwnTheDayContract = artifacts.require("OwnTheDayContract.sol");

module.exports = function(deployer) {
    deployer.deploy(OwnTheDayContract);
};
