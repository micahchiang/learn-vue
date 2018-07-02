<template>
    <div id="SlotComponent">
        <h1>{{msg}}</h1>
        <div class="contact__container">
            <div v-for="contact in contacts" :key="contact.id" class="contact__container-item">
                <slot :contact="contact"></slot>
                <h4>{{contact.email}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SlotComponent',
  data() {
    return {
      msg: 'hello slots',
      contacts: []
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(contacts => (this.contacts = contacts));
  }
};
</script>

<style scoped>
h1,
h3,
h4 {
  font-weight: 400;
  margin: 0;
}

.contact__container-item {
  padding: 1em;
}
</style>


