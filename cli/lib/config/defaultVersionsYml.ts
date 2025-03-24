import type { CmnType } from '@cmn/types/config.ts'
import {
  VERSION_FIREDANCER_TESTNET,
  VERSION_GEYSER_YELLOWSTONE,
  VERSION_JITO_MAINNET,
  VERSION_JUPITER_API,
  VERSION_SOLANA_MAINNET,
  VERSION_SOLANA_TESTNET,
} from '@cmn/constants/version.ts'

const defaultVersionsYml = (): string => {
  const defaultVersions: CmnType = {
    mainnet_validators: {
      solana_cli: 'agave',
      version_agave: VERSION_SOLANA_MAINNET,
      version_jito: VERSION_JITO_MAINNET,
      allowed_ssh_ips: [],
      allowed_ips: [],
    },
    testnet_validators: {
      solana_cli: 'agave',
      version_agave: VERSION_SOLANA_TESTNET,
      version_firedancer: VERSION_FIREDANCER_TESTNET,
      allowed_ssh_ips: [],
    },
    mainnet_rpcs: {
      solana_cli: 'agave',
      version_agave: VERSION_SOLANA_MAINNET,
      version_jito: VERSION_JITO_MAINNET,
      geyser_version: VERSION_GEYSER_YELLOWSTONE,
      x_token: '',
      port_rpc: 8899,
      port_grpc: 10000,
      allowed_ssh_ips: [],
      allowed_ips: [],
    },
    jupiter: {
      api_version: VERSION_JUPITER_API,
      allowed_ssh_ips: [],
      allowed_ips: [],
    },
  }

  return `mainnet_validators:
  solana_cli: ${defaultVersions.mainnet_validators.solana_cli}
  version_agave: ${defaultVersions.mainnet_validators.version_agave}
  version_jito: ${defaultVersions.mainnet_validators.version_jito}
  allowed_ssh_ips: null
  allowed_ips: null

testnet_validators:
  solana_cli: ${defaultVersions.testnet_validators.solana_cli}
  version_agave: ${defaultVersions.testnet_validators.version_agave}
  version_firedancer: ${defaultVersions.testnet_validators.version_firedancer}
  allowed_ssh_ips: null

mainnet_rpcs:
  solana_cli: ${defaultVersions.mainnet_rpcs.solana_cli}
  version_agave: ${defaultVersions.mainnet_rpcs.version_agave}
  version_jito: ${defaultVersions.mainnet_rpcs.version_jito}
  geyser_version: ${defaultVersions.mainnet_rpcs.geyser_version}
  x_token: ""
  port_rpc: ${defaultVersions.mainnet_rpcs.port_rpc}
  port_grpc: ${defaultVersions.mainnet_rpcs.port_grpc}
  allowed_ssh_ips: null
  allowed_ips: null

jupiter:
  api_version: ${defaultVersions.jupiter.api_version}
  allowed_ssh_ips: null
  allowed_ips: null
`
}

export { defaultVersionsYml }
