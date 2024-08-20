import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  BLAST = 81457,
  TAIKO = 167000,
  ARBITRUM_SEPOLIA = 421614,
  BASE_SEPOLIA = 84532,
  SERVER = 31338
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = '0x2EA9051d5a48eA2350b26306f2b959D262cf67e1' //Taiko
// export const FACTORY_ADDRESS = '0xfd8D39298478F7b88FD7687F4B470d095bb8c7Bd' //base sepolia
export const FACTORY_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' //server

export const FACTORY_ADDRESS_MAP = {
  [ChainId.TAIKO]: '0x2EA9051d5a48eA2350b26306f2b959D262cf67e1',
  [ChainId.BASE_SEPOLIA]: '0xfd8D39298478F7b88FD7687F4B470d095bb8c7Bd',
  // [ChainId.BASE_SEPOLIA]: '0x61b781d983f5D2134946dF130E9B62962C71b2C0',
  // todo
  [ChainId.MAINNET]: '0xfd8D39298478F7b88FD7687F4B470d095bb8c7Bd',
  [ChainId.ARBITRUM_SEPOLIA]: '0xfd8D39298478F7b88FD7687F4B470d095bb8c7Bd',
  [ChainId.BLAST]: '0xfd8D39298478F7b88FD7687F4B470d095bb8c7Bd',
  [ChainId.SERVER]: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
}

export const INIT_CODE_HASH = '0xcbb48a55fd9c60b9bc41ab0ab70c2a8e4fe7a9c450f4537e1e3cb9779bb87db5'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
