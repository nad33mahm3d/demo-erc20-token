const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const { ZERO_ADDRESS } = constants;

const DemoToken = artifacts.require('DemoToken');

contract('DemoToken', function (accounts) {
  const [ initialHolder, recipient, anotherAccount ] = accounts;

  const name = 'DemoCrypto';
  const symbol = 'DEMOT';

  const initialSupply = new BN("10000000000000000000000");

  beforeEach(async function () {
    this.token = await DemoToken.new();

  });

  it('Token name is DemoCrypto', async function () {
    expect(await this.token.name()).to.equal(name);
  });

  it('Token has a symbol DEMOT', async function () {
    expect(await this.token.symbol()).to.equal(symbol);
  });

  it('Token has 18 decimals', async function () {
    expect(await this.token.decimals()).to.be.bignumber.equal('18');
  });

  it('Token has owner', async function () {
    expect(await this.token.owner()).to.equal(initialHolder);
  });

});