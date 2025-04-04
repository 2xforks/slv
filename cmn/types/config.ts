export type KeyDirType = 'rpc' | 'validator' | 'relayer' | 'shreadstream'

export type NetworkType = 'mainnet' | 'testnet'
export type RpcType = 'minimal' | 'geyser-yellowstone'
export type ValidatorTestnetType = 'firedancer' | 'agave'
export type ValidatorMainnetType = 'jito' | 'firedancer'
export type InventoryType = 'testnet_validators' | 'mainnet_validators' | 'relayer' | 'mainnet_rpcs' | 'jupiter'

export interface ValidatorTestnetConfig {
  ansible_user: string
  ansible_host: string
  ansible_ssh_private_key_file: string
  name: string
  identity_account: string
  vote_account: string
  authority_account: string
  validator_type: ValidatorTestnetType
}

export interface TestnetData {
  hosts: Record<string, ValidatorTestnetConfig>
}

export interface MainnetData {
  hosts: Record<string, ValidatorMainnetConfig>
}

export interface RelayerData {
  hosts: Record<string, RelayerConfig>
}

export interface RpcData {
  hosts: Record<string, RpcConfig>
}

export interface JupiterData {
  hosts: Record<string, JupiterConfig>
}

export type Inventory = Record<'testnet_validators', TestnetData>
export type InventoryMainnet = Record<'mainnet_validators', MainnetData>
export type InventoryRelayer = Record<'relayer', RelayerData>
export type InventoryRPC = Record<'mainnet_rpcs', RpcData>
export type InventoryJupiter = Record<'jupiter', JupiterData>

export interface CmnType {
  mainnet_validators: CmnMainnetValidatorType
  testnet_validators: CmnTestnetValidatorType
  mainnet_rpcs: CmnMainnetRpcType
  jupiter: CmnJupiterType
}

export interface CmnTestnetValidatorType {
  solana_cli: string
  version_firedancer: string
  version_agave: string
  allowed_ssh_ips: string[]
}

export interface CmnMainnetValidatorType {
  solana_cli: string
  version_agave: string
  version_firedancer: string
  version_jito: string
  allowed_ssh_ips: string[]
  allowed_ips: string[]
}

export interface CmnMainnetRpcType {
  solana_cli: string
  version_agave: string
  version_jito: string
  version_firedancer: string
  geyser_version: string
  x_token: string
  port_rpc: number
  port_grpc: number
  allowed_ssh_ips: string[]
  allowed_ips: string[]
}

export interface CmnJupiterType {
  api_version: string
  allowed_ssh_ips: string[]
  allowed_ips: string[]
}

export interface RpcConfig {
  ansible_host: string
  ansible_user: string
  ansible_ssh_private_key_file: string
  identity_account: string
  name: string
  region: string
  rpc_type: RpcType
  snapshot_url: string
  limit_ledger_size: number
  shredstream_address: string
}

export interface JupiterConfig {
  ansible_host: string
  ansible_user: string
  ansible_ssh_private_key_file: string
  name: string
  rpc_url: string
  grpc_url: string
  x_token: string
  port: number
}

export interface ValidatorMainnetConfig {
  name: string
  ansible_host: string
  ansible_user: string
  ansible_ssh_private_key_file: string
  identity_account: string
  vote_account: string
  authority_account: string
  validator_type: ValidatorMainnetType
  commission_bps: number
  relayer_url: string
  relayer_account: string
  block_engine_region: string
  shredstream_address: string
  port_rpc: number
  limit_ledger_size: number
  staked_rpc_identity_account: string
  staked_rpc_amount: number
  snapshot_url: string
}

export interface RelayerConfig {
  ansible_host: string
  ansible_user: string
  ansible_ssh_private_key_file: string
  identity_account: string
  relayer_account: string
  block_engine_region: string
  rpc_urls: string
  rpc_ws_urls: string
}


export interface ValidatorTestnetConfig {
  name: string
  ansible_user: string
  ansible_host: string
  ansible_ssh_private_key_file: string
  identity_account: string
  vote_account: string
  authority_account: string
  username: string
  ip: string
  validator_type: ValidatorTestnetType
}
