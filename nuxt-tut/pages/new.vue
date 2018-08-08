<template>
  <items-component></items-component>
</template>

<script>
  import ItemsComponent from "~/components/ItemsComponent";
  export default {
    components: {ItemsComponent},
    async fetch( {store} ) {
      await store.dispatch("LOAD_ITEMS", "newstories.json")
    }
  }
</script>

<style>
</style>

