<template lang="html">
  <div class="wrapper">

  <div class="sidebar">
    <div class="header">
      <h1>{{title}}</h1>
      <h2>{{subtitle}}</h2>
    </div>
    <div class="buttons">
      
    </div>
  </div>
  <div class="pens">
    <template v-for="pen of pens">
      <pen :pen="pen"></pen>
    </template>
  </div>
  </div>
</template>

<script>

import { db } from './firebase'
import pen from './components/Pen.vue'

export default {
  name: 'app',
  components: {
    pen
  },
  data: () => ({
    pens: {},
    title: "Przm",
    subtitle: "Reference Guide for Prismacolor Premium Art Markers"
  }),
  firebase: {
    pens: {
      source: db.ref('pens')
    }
  }

}

</script>

<style>
.pens {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 50px;
  grid-gap: 20px;
}
</style>
