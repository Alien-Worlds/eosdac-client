<template>
  <q-page class="q-pa-md">
    <div v-if="getAccountName">Welcome {{ getAccountName }}</div>
    <div v-else>Please log in</div>
    <div>This is an example page to extend the member client...</div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'example',
  computed: {
    ...mapGetters({
      getAccountName: 'user/getAccountName'
    })
  }
}
</script>

<style></style>
