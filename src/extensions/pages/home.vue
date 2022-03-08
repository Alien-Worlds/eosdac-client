<template>
  <q-page class="gradient-bg-primary q-pa-md" style="overflow:hidden">
    <div class="relative-position">
      <div class="q-pa-md rounded-borders relative-position bg-logo">
        <div class="row">
          <div class="col-xs-12 text-h3 q-mb-md">
            {{ $t("index.welcome_to", { dacName: $dir.title}) }}
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12 col-xs-12  index_border_right_col q-px-xl">
            <div class="column justify-between full-height">
              <div class="q-title regular index-description">
                <p>{{ $dir.getRef($dir.REF_DESCRIPTION) }}</p>
              </div>
              <div class="q-mb-lg">
                <q-btn
                  class="float-left q-px-xl animate-pop q-ma-xs"
                        color="primary"
                        size="lg"
                        to="/review-proposals"
                        :label="$t('index.review_proposals')"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl">
            <div class=" full-height">
              <div class="text-h5 q-mb-lg">
                {{ $t("index.key_features") }}
              </div>

              <div class="row text-text1 gutter-sm">
                <q-item class="col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.member"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section>
                    <span class="q-title">{{$t("index.reg_as_member")}}</span>
                  </q-item-section>
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar>
                    <q-icon
                      :name="$configFile.icon.work_prop"
                      size="48px"
                      class="q-mr-sm text-text2"
                    />
                  </q-item-section>
                  <q-item-section>
                    <span class="q-title">{{$t("index.submit_wp")}}</span>
                  </q-item-section>
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar>
                    <q-icon
                      :name="$configFile.icon.constitution"
                      size="48px"
                      class="q-mr-sm text-text2"
                    />
                  </q-item-section>
                  <q-item-section>
                    <span class="q-title">{{$t("index.read_constitution")}}</span>
                  </q-item-section>
                </q-item>

                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar>
                    <q-icon
                        name="account_balance_wallet"
                        size="48px"
                        class="q-mr-sm text-text2"
                    />
                  </q-item-section>
                  <q-item-section>
                    <span class="q-title">{{$t("index.wallet")}}</span>
                  </q-item-section>
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar
                    ><q-icon
                      :name="$configFile.icon.cand_reg"
                      size="48px"
                      class="q-mr-sm text-text2"
                  /></q-item-section>
                  <q-item-section>
                    <span class="q-title">{{$t("index.reg_as_cust_cand")}}</span>
                  </q-item-section>
                </q-item>
                <q-item class=" col-xs-12 col-md-6">
                  <q-item-section avatar>
                    <q-icon
                      :name="$configFile.icon.vote"
                      size="48px"
                      class="q-mr-sm text-text2"
                    />
                  </q-item-section>
                  <q-item-section>
                    <span class="q-title">{{$t("index.vote_cust")}}</span>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-md justify-left q-px-md row_boxes_index_page">
        <div class="col-md-4 col-sm-12" v-if="$dir.getRef($dir.REF_HOMEPAGE)">
          <div class="column justify-between bg-primary shadow-14 rounded-borders full-height q-pa-md animate-pop">
            <div>
              <div class="text-h6 q-mb-lg">{{ $t("index.visit_website") }}</div>
              <div class="q-body-1 relative-position">
                <q-icon
                        name="icon-ui-21"
                        size="48px"
                        class="absolute-top-left"
                />
                <div style="display:inline-block;margin-left:55px;margin-top:-3px">
                  {{ $t("index.website_description") }}
                </div>
              </div>
            </div>
            <div class="q-mt-sm">
              <q-btn
                      class="float-right"
                      color="secondary"
                      :label="$dir.getRef($dir.REF_HOMEPAGE).replace(/http[s?]:\/\//g, '')"
                      @click.native="openURL($dir.getRef($dir.REF_HOMEPAGE))"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12" v-if="$dir.getRef($dir.REF_DISCORD_URL)">
          <div class="column justify-between bg-primary shadow-14 rounded-borders full-height q-pa-md animate-pop">
            <div>
              <div class="text-h6 q-mb-lg">{{ $t("index.join_discord") }}</div>
              <div class="q-body-1 text-text2 relative-position">
                <q-icon
                        name="icon-social-discord-com"
                        size="48px"
                        class="absolute-top-left"
                />
                <div style="display:inline-block;margin-left:55px;margin-top:-3px">
                  {{ $t("index.discord_description") }}
                </div>
              </div>
            </div>
            <div class="q-mt-sm">
              <q-btn
                      class="float-right"
                      color="secondary"
                      :label="$t('index.open_discord')"
                      @click.native="openURL($dir.getRef($dir.REF_DISCORD_URL))"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12" v-if="$dir.getRef($dir.REF_TELEGRAM_URL)">
          <div class="column justify-between bg-primary shadow-14 rounded-borders full-height q-pa-md animate-pop">
            <div>
              <div class="text-h6 q-mb-lg">{{ $t("index.join_telegram") }}</div>
              <div class="q-body-1 text-text2 relative-position">
                <q-icon
                        name="mdi-telegram"
                        size="48px"
                        class="absolute-top-left"
                />
                <div style="display:inline-block;margin-left:55px;margin-top:-3px">
                  {{ $t("index.telegram_description") }}
                </div>
              </div>
            </div>
            <div class="q-mt-sm">
              <q-btn
                      class="float-right"
                      color="secondary"
                      :label="$t('index.open_telegram')"
                      @click.native="openURL($dir.getRef($dir.REF_TELEGRAM_URL))"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'
export default {
  components: {},
  data () {
    return {
      loading: false
    }
  },

  computed: {
    ...mapGetters({
      getAccountName: 'user/getAccountName'
    })
  },

  methods: {
    openURL
  }
}
</script>

<style lang="stylus">

.index_border_right_col{
  border-right:1px solid grey;
}
.row_boxes_index_page{
  top:-100px;
  transition: all .2s ease-in-out;
}
.partnerbox{
  top:0px;
  position:relative;
}

@media screen and (max-width: 1200px) {
  .row_boxes_index_page{
    top:20px !important;
  }
  .index_border_right_col{
    border-right: none !important;
  }

}
</style>
