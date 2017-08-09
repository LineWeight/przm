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
    <template v-for="pen of organizedPens">
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
    title: "Przm",
    subtitle: "Reference Guide for Prismacolor Premium Art Markers",
    filterFlag: null,
    sortFlag: "orgId"
  }),
  firebase: {
    pens: {
      source: db.ref('pens')
    }
  },
  computed: {
    organizedPens: function () {
      return this.pens.filter(x => {
        if (this.filterFlag != null) {
          return x.groups[this.filterFlag] != null
        }
        return true
      }).sort((x, y) => {
        if (x[this.sortFlag] < y[this.sortFlag]) {
          return -1;
        }
        return 1;
      })
    }
  }

}

</script>

<style>
.pens {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-auto-rows: 50px;
  grid-gap: 20px;
}

.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 30px;
  margin: 30px;
}
</style>
