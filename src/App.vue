<template lang="html">
  <div class="wrapper">

  <div  class="sidebar">
    <div class="header">
      <h1>{{title}}</h1>
      <h2>{{subtitle}}</h2>
    </div>
    <div class="buttons">
      <h3>Sort</h3>
        <template v-for="sort in sorts">
          <sortButton :slug="sort.slug" :title="sort.title" @sortChanged="setSortFlag($event)"></sortButton>
        </template>
        <h3>Filter</h3>
        <template v-for="slug in groups">
          <filterButton :slug="slug" @filterChanged="setFilterFlag($event)" ></filterButton>
        </template>
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
import filterButton from './components/FilterButton.vue'
import sortButton from './components/SortButton.vue'

export default {
  name: 'app',
  components: {
    pen, filterButton, sortButton
  },
  data: () => ({
    title: "Przm",
    subtitle: "Reference Guide for Prismacolor Premium Art Markers",
    filterFlag: null,
    sortFlag: "orgId",
    groups: ['all', 'warm grey', 'neutral grey', 'cool grey', 'french grey', 'portrait', 'primary secondary'],
    sorts: [
      {
        title: "Name",
        slug: "name"
      }, {
        title: "Relatedness",
        slug: "orgId"
      }, {
        title: "Color ID",
        slug: "colorId"
      }]
  }),
  methods: {
    log(a) {
      console.log(a)
    },
    setFilterFlag(a) {
      this.filterFlag = a;
    },
    setSortFlag(a) {
      this.sortFlag = a;
    }
  },
  firebase: {
    pens: {
      source: db.ref('pens')
    }
  },
  computed: {
    organizedPens: function () {
      let ff = this.filterFlag;
      if (ff === 'All') {
        ff = null;
      }
      return this.pens.filter(x => {
        if (ff != null) {
          return x.groups[ff] != null
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

// var last_known_scroll_position = 0;
// var ticking = false;

// function doSomething(scroll_pos) {
//   document.getElementById("spacer").style.height = scroll_pos
// }

// window.addEventListener('scroll', (e) => {
//   last_known_scroll_position = window.scrollY;
//   doSomething(last_known_scroll_position);
// });

</script>

<style>
.pens {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-auto-rows: 60px;
  grid-gap: 20px;
  margin-bottom: 100px;
}

.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 30px;
  margin: 40px;
}

.buttons {

  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  margin-top: 20px;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 5px;
}
</style>
