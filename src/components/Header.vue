<template>
  <div>
    <b-nav tabs align="center">
      <b-nav-item v-for="(link, index) in links" :key="index"><router-link :to="link.to">{{ link.name }}</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data(){
    return {
      links: [
        {to: '/demo1', name: 'Demo1'},
        {to: '/demo2', name: 'Demo2'},
      ]
    }
  }
}
</script>