import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BLAST]: new Token(ChainId.BLAST, '0x4300000000000000000000000000000000000004', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.TAIKO]: new Token(ChainId.TAIKO, '0xA51894664A773981C6C112C43ce576f315d5b1B6', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ARBITRUM_SEPOLIA]: new Token(
    ChainId.ARBITRUM_SEPOLIA,
    '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BASE_SEPOLIA]: new Token(
    ChainId.BASE_SEPOLIA,
    '0x6267947C818ff3900F620FC97d590702afB69147',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SERVER]: new Token(
    ChainId.SERVER,
    '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    18,
    'WETH',
    'Wrapped Ether'
  )
}
