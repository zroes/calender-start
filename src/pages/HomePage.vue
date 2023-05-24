<template>
  <div class="d-flex">
    <h1>{{ year.year }}</h1>
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {

    return {
      year: computed(() => AppState.currentYear)
    }
  },
}
</script>

<style></style>