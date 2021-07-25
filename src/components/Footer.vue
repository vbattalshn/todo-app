<template>
  <footer id="footer">
    <span class="feature">Made by <a href="https://battalsahin.com" target="_blank" rel="noopener noreferrer">vbattalshn</a></span>
    <span class="line"></span>
    <span class="feature">See on <a href="https://github.com/vbattalshn/todo-app" target="_blank" rel="noopener noreferrer">Github</a></span>
    <div class="theme-mode" @click="changeMode">
        <svg v-if="!mode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fafafa" class="bi bi-lightbulb" viewBox="0 0 16 16"> <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/> </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffbb00" class="bi bi-lightbulb-fill" viewBox="0 0 16 16"> <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/></svg>
    </div>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            mode: false
        }
    },
    methods: {
        changeMode(){
            var body = document.querySelector("body");
            if(this.mode){
                this.mode = false
                body.classList.add("dark");
                this.$cookies.set("theme", "dark")
            }else{
                this.mode = true
                body.classList.remove("dark")
                this.$cookies.set("theme", "default")
            }
        }
    },
    mounted(){
        var body = document.querySelector("body");
        if(this.$cookies.get("theme") == "default"){
            this.mode = true;
        }else if(this.$cookies.get("theme") == "dark"){
            this.mode = false;
            body.classList.add("dark");
        }else{
            this.mode = true;
            this.$cookies.set("theme", "default");
        }
    }

}
</script>

<style>

</style>