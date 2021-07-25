<template>
    <section class="fullheight">
        <div class="completed-todos">
            <div v-if="completed.length == 0" class="completed-todo">
                <span class="completedTodoName no-completed-todo-found">No completed todo found</span>
            </div>
            <div v-else class="completed-todo" v-for="(todo, index) in completed" :key="index">
                <span class="completedTodoName" v-text="todo"></span>
                <span class="delete-btn" @click="deleteTodo(index)">Delete</span>
            </div>
        </div>
    </section>
</template>

<script>
import store from "../store"

export default{
    computed: {
        completed(){
            return store.state.completed
        }
    },
    methods: {
        deleteTodo(index){
            this.completed.splice(index, 1);
            this.$notify({type: "success", text: "Deleted"});
        }
    }
}
</script>

<style>

</style>