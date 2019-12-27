<template>
  <div class="about">
    <produce v-if="$route.params.id === '57'" />
    <synopsis v-else-if="$route.params.id === '567'" />
    <develop v-if="$route.params.id === '56'" />
    <contact v-if="$route.params.id === '5'" />
  </div>
</template>
<script>
import produce from './produce.vue'
import synopsis from './synopsis.vue'
import develop from './develop.vue'
import contact from './contact.vue'

export default {
  name: 'aa',
  components: {
    produce,
    synopsis,
    develop,
    contact
  },
  data() {
    return {
      id: ''
    }
  },
  beforeUpdate() {
    console.log(this.$route, '____')

    this.id = this.$route.params.id
  }
}
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  background: lightblue;
  height: 450px;
  text-align: center;
  line-height: 50px;
}
</style>
