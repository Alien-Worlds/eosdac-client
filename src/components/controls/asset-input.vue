<template>
  <div class="row no-wrap q-gutter-sm">
    <q-input
      class="col"
      :label="label"
      type="number"
      input-class = "text-right"
      v-model="internalValue.quantity"
      ref="quantity_input"
      @input="updateValueQuantity"
      :suffix="(allowed.length > 1) ? '': internalValue.symbol"
      :max="max"
      min=0
    />
    <q-select
      v-if="allowed.length > 1"
      label = ""
      v-model="internalValue.symbol"
      color="primary"
      ref="symbol_input"
      :options="allowed.map(c => { return { label: c.symbol, value: c } })"
      @input="updateValueAsset"
    />
  </div>
</template>

<script>
/**
 * Asset input shows an amount+token fields
 *
 * @todo Should this be in the components/ui as it's very simiar to components/ui/seconds-input.vue?
 * @todo By default it shows EOS, even if it's not an allowed option.
 * @todo Allow a max value.
 */
export default {
  name: 'asset-input',
  props: {
    allowed: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: () => ''
    },
    value: {
      type: Object
    },
    max: {
      default: false
    }
  },
  data () {
    return {
      selected_symbol: '',
      parsed: {}
    }
  },
  computed: {
    internalValue () {
      let extAsset = this.value
      if (!extAsset) {
        extAsset = { quantity: '0.0000 EOS', contract: 'eosio.token' }
      }
      return this.parse(extAsset)
    }
  },
  methods: {
    updateValueQuantity (val) {
      let symbol

      if (this.$refs.symbol_input) {
        let symbolOpt = this.$refs.symbol_input.value
        if (typeof symbolOpt === 'string') {
          symbolOpt = this.$refs.symbol_input.options.filter(o => o.label === this.$refs.symbol_input.value)[0]
        }
        symbol = symbolOpt.value
      } else {
        symbol = this.internalValue
      }
      console.log(`updateValueQuantity symbol: ${JSON.stringify(symbol)}`)
      let quantity = parseFloat(val)
      this.updateValue(quantity, symbol)
    },
    updateValueAsset (val) {
      const symbol = val.value
      let quantity = parseFloat(this.$refs.quantity_input.value)

      this.updateValue(quantity, symbol)
    },
    updateValue (quantity, symbol) {
      if (!symbol) {
        return
      }
      if (isNaN(quantity)) {
        quantity = 0
      }
      quantity = `${quantity.toFixed(symbol.precision)} ${symbol.symbol}`

      const value = { quantity, contract: symbol.contract }
      this.$emit('input', value)
    },
    parse (val) {
      if (val) {
        val = JSON.parse(JSON.stringify(val))
        // console.log('parse', val)
        const contract = val.contract
        let [quantity, symbol] = val.quantity.split(' ')
        if (!quantity) {
          quantity = 'EOS'
        }
        const [, decimals] = quantity.split('.')
        const precision = decimals ? decimals.length : 0
        // console.log({ contract, quantity, symbol, precision })
        return JSON.parse(JSON.stringify({ contract, quantity, symbol, precision }))
      }
      return null
    }
  }
}
</script>
