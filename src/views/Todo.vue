<template>
  <section class="fullheight content">
    <div class="add-todo">
      <input type="text" v-model="newTodo" placeholder="To-do name">
      <button @click="addTodo" >Add</button>
    </div>
    <div class="todos">
      <div v-if="todo.length == 0" class="todo">
        <span class="todo-name no-todo-found">No todo found. Add a todo now</span>
      </div>
      <div v-else class="todo" v-for="(todoItem, index) in todo" :key="index">
        <span class="todo-name" v-text="todoItem"></span>
        <span class="complete-btn" @click="completeTodo(index)">Complete</span>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store"

export default {
  data(){
    return{
      newTodo: null
    }
  },
  computed: {
    todo(){
      return store.state.todo
    },
    completed(){
      return store.state.completed
    }
  },
  methods: {
    addTodo(){
      if(this.newTodo != "" && this.newTodo != null){
        if(this.todo.indexOf(this.newTodo) == -1){
          if(this.newTodo.length <= 3){
            this.$notify({type: "error", text: "soo short"})
          }else if(this.newTodo.length >= 30){
            this.$notify({type: "error", text: "soo long"})
          }else{
            this.todo.push(this.newTodo);
            this.newTodo = null;
          }
        }else{
          this.$notify({type: "error", text: "Already have"})
        }
      }else{
        this.$notify({type: "error", text: "To do can not be left blank"})
      }
    },
    completeTodo(index){
      this.completed.push(this.todo[index]);
      this.todo.splice(index, 1);
      this.$notify({type: "success", text: "Completed"})
    }
  }
};
</script>
