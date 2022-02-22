<template>
  <q-page class='q-pa-md'>
    <div class='row q-col-gutter-lg'>
      <!-- first column  -->
      <div class='col-xs-12 col-lg-8 constitution-body'>
        <div class='constitution-container'>
          <!-- <div
              v-if='constitution != '''
              class='markdown-body animate-fade inline-doc'
              v-html='constitution'
            ></div> -->
            <!-- mockdata -->
          <div style="max-height: 700px; overflow-y: scroll;">
            <h4 id='ens-dao-constitution'>EYEKE DAO Constitution</h4>
            <p>
              The EYEKE constitution is a set of binding rules that determine what
              governance actions are legitimate for the DAO to take.
            </p>
            <p>
              Each article has examples of permissible and non permissible
              actions. These examples are illustrative and should not be
              considered a binding part of the text of the constitution itself.
            </p>
            <h4 id='i-name-ownership-shall-not-be-infringed'>
              I. Name ownership shall not be infringed
            </h4>
            <p>
              EYEKE governance will not enact any change that infringes on the
              rights of EYEKE users to retain names they own, or unfairly
              discriminate against name owners’ ability to extend, transfer, or
              otherwise use their names.
            </p>
            <h4 id='-examples-'><strong>Examples</strong></h4>
            <p>
              <strong>Permissible</strong>: EYEKE governance may enact a change
              affecting the registration or extension costs of all names based
              on transparent criteria such as length, as long as it pursues a
              goal outlined in this constitution.
            </p>
            <p>
              <strong>Not Permissible</strong>: EYEKE governance must not enact a
              change increasing or reducing the extension costs of a list of
              existing EYEKE names, as this would unfairly benefit or penalise a
              handpicked group.
            </p>
            <h4 id='ii-fees-are-primarily-an-incentive-mechanism'>
              II. Fees are primarily an incentive mechanism
            </h4>
            <p>
              The primary purpose of registration fees is as an incentive
              mechanism to prevent the namespace becoming overwhelmed with
              speculatively registered names. A secondary purpose is to provide
              enough revenue to the DAO to fund ongoing development and
              improvement of EYEKE. EYEKE governance will not enact any fee other
              than for these purposes.
            </p>
            <h4 id='-examples-'><strong>Examples</strong></h4>
            <p>
              <strong>Permissible</strong>: EYEKE governance may increase the
              price of name registrations in order to address excessive
              speculative registrations induced by a price that is set too low,
              or because the current price is insufficient to fund ongoing EYEKE
              operations at a reasonable level.
            </p>
            <p>
              <strong>Not Permissible</strong>: EYEKE governance must not enact a
              change imposing a fee for claiming DNS domains inside EYEKE, because
              such a fee would be purely an income generating measure and not an
              incentive mechanism.
            </p>
            <h4 id='iii-income-funds-ens-and-other-public-goods'>
              III. Income funds EYEKE and other public goods
            </h4>
            <p>
              Any income generated to the EYEKE treasury is to be used first of
              all to ensure the long-term viability of EYEKE, and to fund
              continuing development and improvement of the EYEKE system. Funds
              that are not reasonably required to achieve this goal may be used
              to fund other public goods within web3 as EYEKE governance sees fit.
            </p>
            <p>
              EYEKE governance will not allocate funds to a team or individual who
              does not commit to uphold the same principles outlined in this
              constitution in their use of the allocated funds.
            </p>
            <h4 id='-examples-'><strong>Examples</strong></h4>
            <p>
              <strong>Permissible</strong>: EYEKE governance may offer grant
              funding for a public good unrelated to EYEKE or Ethereum, so long as
              doing so does not affect the long-term viability of EYEKE.
            </p>
            <p>
              <strong>Not Permissible</strong>: EYEKE governance must not use the
              funds to support projects that conflict with the goals of EYEKE.
            </p>
            <h4 id='iv-ens-integrates-with-the-global-namespace'>
              IV. EYEKE Integrates with the global namespace
            </h4>
            <p>
              In order to facilitate making the most widely usable naming
              system, EYEKE aims to integrate with the legacy DNS naming system to
              the greatest extent possible without sacrificing decentralization
              of EYEKE. EYEKE governance will not enact changes that compromise
              EYEKE's ability to do this.
            </p>
            <h4 id='-examples-'><strong>Examples</strong></h4>
            <p>
              <strong>Permissible</strong>: EYEKE governance should grant control
              of a top-level domain to its owner in the DNS system on request.
            </p>
            <p>
              <strong>Not permissible</strong>: EYEKE governance must not create
              new top-level domains unless those domains have been granted to
              EYEKE by a DNS authority.
            </p>
            <h4 id='v-amendments-to-this-constitution-by-majority-vote'>
              V. Amendments to this constitution by majority vote
            </h4>
            <p>
              Any change may be made to this constitution only by two-thirds
              majority and at least 1% of all tokens participating.
            </p>
          </div>
           <!-- mockdata -->
        </div>
      </div>

      <!-- second column -->
      <div class='col-xs-12 col-lg-4 constitution-side'>
        <div>
          <div
            id='registerbox'
            class='bg-logo q-pa-md rounded-borders shadow-4 relative-position'
            style='overflow: hidden'
          >
            <q-item>
              <q-item-section avatar>
                <q-icon :name='$configFile.icon.constitution' />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ $t('default.constitution') }}</q-item-label>
                <q-item-label style='font-size: 10px'
                  >version {{ getLatestMemberTerm.version }}</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon :name='$configFile.icon.check' />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ $t('constitution.hash') }}</q-item-label>
                <q-item-label style='font-size: 10px'>
                  <pre class='q-ma-none'>{{ getLatestMemberTerm.hash }}</pre>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon :name='$configFile.icon.link' />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{
                  $t('constitution.direct_link')
                }}</q-item-label>
                <q-item-label caption>
                  <a target='_blank' :href='getLatestMemberTerm.terms'>{{
                    getLatestMemberTerm.terms
                  }}</a>
                </q-item-label>
              </q-item-section>
            </q-item>

            <!-- <q-item-side left>dd</q-item-side> -->
            <div class='row justify-end items-center'>
              <div
                v-if='needSignature'
                style='color: red'
                class='q-caption q-my-sm'
              >
                {{
                  $t('constitution.not_signed_message', {
                    dacname: $dir.title,
                  })
                }}
              </div>
              <q-btn
                v-if='needSignature'
                class='on-right'
                @click='signConstitution()'
                color='primary'
                :label='$t("constitution.sign")'
              />
              <div
                v-if='!needSignature'
                class='text-positive q-caption q-my-sm'
              >
                {{ $t('constitution.signed_message') }}
              </div>
              <q-btn
                v-if='!needSignature'
                class='on-right'
                @click='unRegister()'
                color='primary'
                :label='$t("constitution.unsign")'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const CryptoJS = require('crypto-js')
import marked from 'marked'

import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      isloading: false,
      constitution: '',

      md5_constitution: '',

      latestMemberTerms: this.getLatestMemberTerm || {},
    }
  },
  computed: {
    ...mapGetters({
      getMemberTerms: 'dac/getMemberTerms',
      getLatestMemberTerm: 'dac/getLatestMemberTerm',
      getAccountName: 'user/getAccountName',
      getAgreedTermsVersion: 'user/getAgreedTermsVersion',
      getIsLoaded: 'dac/getIsLoaded',
    }),

    needSignature() {
      if (
        this.getLatestMemberTerm &&
        this.getAgreedTermsVersion &&
        this.getLatestMemberTerm.version === this.getAgreedTermsVersion
      ) {
        return false
      } else {
        return true
      }
    },
  },

  methods: {
    async getConstitution() {
      if (!this.getLatestMemberTerm.terms) return
      this.isloading = true
      try {
        let getCt = await this.loadConstitutionFromGithub(
          this.getLatestMemberTerm.terms
        )
        this.md5_constitution = CryptoJS.MD5(getCt).toString()

        // check if the fetched constitution matches the contract hash
        // if(this.md5_constitution === this.latestMemberTerms.hash){
        //   console.log('Constitution verified! Hashes match!')
        // }

        this.constitution =
          '<span class="animate-fade">' +
          marked(getCt, { sanitize: true }) +
          '</span>'
        this.isloading = false
      } catch (e) {
        console.log(e)
        this.isloading = false
      }
    },

    async loadConstitutionFromGithub(url) {
      try {
        let constitution = await this.$axios.get(url)
        return constitution.data
      } catch (err) {
        throw err
      }
    },

    async signConstitution() {
      let actions = [
        {
          account: this.$dir.symbol.contract,
          name: 'memberrege',
          data: {
            sender: this.getAccountName,
            agreedterms: this.md5_constitution,
            dac_id: this.$dir.dacId,
          },
        },
      ]

      let result = await this.$store.dispatch('user/transact', {
        actions: actions,
      })
      if (result) {
        this.$store.commit(
          'user/setAgreedTermsVersion',
          this.getLatestMemberTerm.version
        )
      }
    },

    async unRegister() {
      let actions = [
        {
          account: this.$dir.symbol.contract,
          name: 'memberunrege',
          data: {
            sender: this.getAccountName,
            dac_id: this.$dir.dacId,
          },
        },
      ]
      let result = await this.$store.dispatch('user/transact', {
        actions: actions,
      })
      if (result) {
        this.$store.commit('user/setAgreedTermsVersion', false)
      }
    },

    async checkRegistered() {
      // let memberRegistration = await this.$store.dispatch('api/getRegistered')
      // let latestMemberTerms = await this.$store.dispatch('api/getMemberTerms')
    },

    userHasScrolled(scroll) {
      const votebox = document.getElementById('registerbox')
      if (scroll.position < 40 || window.innerWidth < 1199) {
        votebox.style.top = '0px'
        return false
      }
      // console.log(`votebox: ${offset(votebox).top} scroll: ${scroll.position}`)
      votebox.style.top = scroll.position + 'px'
    },
  },

  mounted: function () {
    if (this.getLatestMemberTerm) {
      this.getConstitution()
    }
  },
  watch: {
    // getLatestMemberTerm (oldval, newval) {
    //   console.log(oldval, newval)
    //   if(newval.terms){
    //     this.getConstitution()
    //   }
    // },
    // getMemberTerms (oldval, newval) {
    //   if(newval && newval[0] ){
    //     this.getConstitution()
    //   }
    // },
    getIsLoaded() {
      this.getConstitution()
    },
  },
}
</script>

<style lang='stylus'>
.constitution-container
  min-height 300px

@media screen and (max-width 1439px)
  .constitution-body
    order 1

  .constitution-side
    order 0

#registerbox
  overflow hidden
</style>
