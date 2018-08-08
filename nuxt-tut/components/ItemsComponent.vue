<template>
  <div class="code">
    <ul class="pa2 list">
      <li v-for="(item,index) in items" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'ItemsComponent',
  computed: mapState([
    "items"
  ])
}
</script>