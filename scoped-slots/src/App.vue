<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <slot-component>
      <template slot-scope="{contact}">
        {{contact.name}}
      </template>
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from './slot.component.vue';

export default {
  name: 'app',
  components: {
    SlotComponent
  },
  data() {
    return {
      msg: 'Scoped Slots: A Study'
    };
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
