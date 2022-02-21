export default {
  'dacId': 'popdac',

  'endpoints': [
    'http://localhost:8888'
  ],

  'pricefeed': {
    api: 'newdex',
    newdex: { symbol: 'eosdactokens-eosdac-eos', endpoint: 'https://api.newdex.io/v1/ticker' }
  },

  'network': {
    'name': 'local',
    'blockchain': 'eos',
    'chainId': '8be32650b763690b95b7d7e32d7637757a0a7392ad04f1c393872e525a2ce82b'
  },

  'accounts': {
    'directory': 'dacdirectory'
  },

  'system_token': {
    'contract': 'eosio.token',
    'symbol': 'EOS',
    'precision': 4
  },

  'contracts': {
    'system_msig': {
      'name': 'msig.world'
    }
  },

  'financial_page_graphs': [
    {
      'account': 'eosdacserval',
      'contract': 'eosio.token',
      'symbol': 'EOS',
      'description':
            'The EOS Mainnet block producer account for eosDAC which receives Block Producer rewards.'
    },
    {
      'account': 'eosdacdoshhq',
      'contract': 'eosio.token',
      'symbol': 'EOS',
      'description':
            'The DAC owner account where DAC funds are secured and controlled by a 12-account multisig permission system of elected custodians.'
    },
    {
      'account': 'dacocoiogmbh',
      'contract': 'eosio.token',
      'symbol': 'EOS',
      'description':
            'The current eosDAC service provider account which manages payroll, employment contracts, and real-world interactions on behalf of the DAC.'
    },
    {
      'account': 'dacelections',
      'contract': 'kasdactokens',
      'symbol': 'KASDAC',
      'description': 'custodian contract description'
    }
  ],

  'api': {
    'dac_api': 'http://127.0.0.1:8800/v1/eosdac',
    'dac_ws': 'ws://localhost:3030'
  },

  'external': {
    'homepage': 'https://eosdac.io',
    'explorer_transaction': 'https://jungle.bloks.io/transaction/{transaction_id}',
    'explorer_msig': 'https://jungle.bloks.io/msig/{proposer}/{proposal_name}'
  }
}
