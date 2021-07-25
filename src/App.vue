<template>
  <div id="app" class="basepage">
    <Header />
    <router-view />
    <Footer />
    <notifications classes="my-notification" position="left bottom" />
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import store from "./store"

export default{
  components: {Header, Footer},
  computed: {
    todo(){
      return store.state.todo
    },
    completed(){
      return store.state.completed
    }
  },
  mounted(){

    var localTodo = JSON.parse(localStorage.todo);
    localTodo.forEach(element => {
      this.todo.push(element)
    });
    
    var localCompleted = JSON.parse(localStorage.completed);
    localCompleted.forEach(element => {
      this.completed.push(element)
    });

  },
  watch: {
    todo(newTodo){
      localStorage.todo = JSON.stringify(newTodo)
    },
    completed(newCompleted){
      localStorage.completed = JSON.stringify(newCompleted)
    }
  }
}
</script>


<style>
@import url("./custom/stylesheets/style.css");
@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap);
</style>
