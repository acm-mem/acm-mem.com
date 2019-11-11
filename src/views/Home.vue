<template>
  <div class="home">
    <latest-news></latest-news>
  </div>
</template>

<script>

import LatestNews from "@/components/LatestNews";
export default {
  name: 'home',
  components: {LatestNews},
}
</script>
