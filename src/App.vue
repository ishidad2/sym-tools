<template>
  <div>
    <Header></Header>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>