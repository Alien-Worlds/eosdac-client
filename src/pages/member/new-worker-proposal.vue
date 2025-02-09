<template>
  <q-page class="q-pa-md">
    <!-- content -->

    <div class="rounded-borders shadow-4 q-pa-md bg-logo">
      <div class="text-h4">{{$t('newworkerproposal.title')}}</div>
      <div class="q-mb-md">
        {{$t('newworkerproposal.intro')}}
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-lg-8">
            <q-input
                    :error="$v.wp_data.title.$error"
                    :error-label="$t('newworkerproposal.title_required')"
                    type="text"
                    :label="$t('newworkerproposal.proposal_title')"
                    color="primary"
                    v-model="wp_data.title"
                  />
        </div>

        <!-- Category -->
        <div class="col-xs-12 col-lg-4">
            <q-select
              :label="$t('newworkerproposal.proposal_category')"
              v-model="wp_data.category"
              :options="getWpCategoriesOptions"
              emit-value
              map-options
              :error="$v.wp_data.category.$error"
              :error-label="$t('newworkerproposal.select_category')"
            />
        </div>

        <div class="col-xs-12 col-lg-6">
          <asset-input :allowed="allowed_currencies" :label="$t('newworkerproposal.pay_amount')" v-model="wp_data.pay_amount" />
        </div>

        <!-- arbitrator -->
        <div class="col-xs-12 col-lg-6">
          <q-input
                  class="full-width"
                  type="text"
                  :label="$t('newworkerproposal.arbitrator')"
                  color="primary"
                  v-model="wp_data.arbitrator" />
        </div>

        <!-- expected duration -->
        <div class="col-xs-12">
          <seconds-input v-model="wp_data.job_duration" :label="$t('newworkerproposal.expected_duration')" />
        </div>
      </div>

      <div class="q-caption q-mb-xs q-mt-md">{{$t('newworkerproposal.proposal_description')}}</div>
      <MarkdownViewer
        :edit="true"
        value=" "
        :text="wp_data.summary"
        v-on:update="updateText"
      />

      <div class="row justify-end q-mt-md">
        <q-btn
          :label="$t('newworkerproposal.submit')"
          color="primary"
          @click="submitProposal"
          class="animate-pop"
        />
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import MarkdownViewer from 'components/ui/markdown-viewer'
import AssetInput from 'components/controls/asset-input'
import { required } from 'vuelidate/lib/validators'
import { isEosName } from '../../modules/validators.js'
import SecondsInput from '../../components/ui/seconds-input'

export default {
  name: 'newWorkerProposal',

  components: {
    MarkdownViewer,
    AssetInput,
    SecondsInput
  },
  data () {
    const [dacPrecision, dacSym] = this.$dir.symbol.sym.split(',')

    return {
      allowed_currencies: [
        {
          symbol: this.$configFile.get('systemtokensymbol'),
          contract: this.$configFile.get('systemtokencontract'),
          precision: 4
        },
        {
          symbol: dacSym,
          contract: this.$dir.symbol.contract,
          precision: parseInt(dacPrecision)
        }
      ],
      wp_data: {
        title: '',
        summary: '',
        arbitrator: '',
        pay_amount: null,
        category: '',
        symbol: this.$configFile.get('systemtokensymbol'),
        job_duration: 60 * 60 * 24 * 30
      }
    }
  },
  computed: {
    ...mapGetters({
      getAccountName: 'user/getAccountName',
      getSettingByName: 'user/getSettingByName',
      getWpCategories: 'dac/getWpCategories'
    }),
    getWpCategoriesOptions: function () {
      return this.getWpCategories.map(wpc => {
        wpc.label = this.$t(wpc.label)
        return wpc
      })
    }
  },
  methods: {
    updateText (val) {
      this.wp_data.summary = val
    },
    async submitProposal () {
      this.$v.wp_data.$touch()

      if (this.$v.wp_data.$error) {
        this.$q.notify('Please review fields again.')
        return
      }
      const extendedAsset = this.wp_data.pay_amount
      const actions = [
        {
          account: this.$dir.getAccount(this.$dir.ACCOUNT_PROPOSALS),
          name: 'createprop',
          data: {
            proposer: this.getAccountName,
            title: this.wp_data.title,
            summary: this.wp_data.summary,
            arbitrator: this.wp_data.arbitrator,
            proposal_pay: extendedAsset,
            arbitrator_pay: { 'contract': 'eosio.token', 'quantity': '5.0000 EOS' },
            content_hash: '00000000000000000000000000000000',
            id: this.$helper.randomName(),
            category: this.wp_data.category,
            job_duration: this.wp_data.job_duration,
            dac_id: this.$dir.dacId
          }
        }
      ]
      const result = await this.$store.dispatch('user/transact', {
        actions: actions
      })
      if (result) {
        // this.$store.commit('user/setIsCandidate', false );
        console.log(result)
      }
    }
  },

  validations: {
    wp_data: {
      arbitrator: { required, isEosName },
      title: { required },
      pay_amount: {
        required
      },
      category: { required }
    }
  }
}
</script>
