<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{post.author}}, {{post.title}}, {{post.comment}}
      </li>
    </ul>
    <form @keyup.enter="addPost">
      <input v-model="author" placeholder="author name">
      <input v-model="title" placeholder="post title">
      <input v-model="newComment" placeholder="Add a post">
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to your vue.js blog!',
      author: '',
      title: '',
      newComment: '',
      postModel: {
        author: '',
        title: '',
        comment: ''
      },
      posts: [
        {
          author: 'Micah',
          title: 'saving the planet',
          comment: 'we need to save the planet'    
        },
        {
          author: 'Micah',
          title: 'saving the planet',
          comment: 'we need to save the planet'    
        },
        {
          author: 'Micah',
          title: 'saving the planet',
          comment: 'we need to save the planet'    
        },
        {
          author: 'Micah',
          title: 'saving the planet',
          comment: 'we need to save the planet'    
        }
      ]
    }
  },
  methods: {
    addPost() {
      let newPost = new Object({
        author: this.author,
        title: this.title,
        comment: this.newComment,
      })
      this.posts.push(newPost);
      this.author = '';
      this.title = '';
      this.newComment = ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  text-align: center;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
