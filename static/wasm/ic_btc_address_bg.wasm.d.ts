/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export type BtcNetwork = { 'Mainnet' : null } |
  { 'Regtest' : null } |
  { 'Testnet' : null };

  import type { Principal } from '@dfinity/principal';
  
  export interface Account {
    'owner' : Principal,
    'subaccount' : [] | [Uint8Array],
  }
export function derive_btc_address(a: BtcNetwork, b: Account): string;
