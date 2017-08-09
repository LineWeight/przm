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
    <p v-for="pen of pens">
      {{pen.name}}
    </p>
  </div>
  </div>
</template>

<script>

import { db } from './firebase'

export default {
  name: 'app',
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
