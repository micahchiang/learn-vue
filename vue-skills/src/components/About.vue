<template>
  <div class="about">
      <h1>Hello {{ their_name }}, this is an about page</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Sunt esse, dicta quae cum deleniti minima expedita labore animi soluta. 
            In praesentium nostrum nulla impedit, 
            quisquam non mollitia tenetur repellendus harum!
        </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    };
  }
};
</script>
