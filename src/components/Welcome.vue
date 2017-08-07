<template lang="html">
  <div class="welcome">

    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: getWelcomeMessage()
    }
  }
}

function getWelcomeMessage() {

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  let string = "It's "
  string += days[new Date().getDay()]
  string += " – Get. Shit. Done!"

  return string
}
</script>

<style lang="css">
</style>
