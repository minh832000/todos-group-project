<template>
<div class="bg-secondary w-full px-4 py-3 rounded-xl">
  <div class="flex justify-end items-center mb-6">
    <button 
      type="button"
      class="sm:w-1/4 w-2/5 py-2 text-center text-light text-base font-bold bg-success rounded-lg"
      @click="createTask"
    >
      Add new task
    </button>
  </div>
  <form>
    <div class="flex items-center flex-wrap mb-6">
      <div class="lg:w-3/4 md:w-4/6 sm:w-9/12 w-full md:pr-2 sm:pr-3 pr-0 sm:mb-0 mb-6">
        <div class="w-full bg-muted px-3 py-2 rounded-3xl">
          <input 
            type="text" 
            placeholder="Your task's name"
            class="text-light"
            v-model.trim="nameTask" />            
        </div>
      </div>
      <div class="lg:w-1/4 md:w-2/6 sm:w-3/12 w-full">
        <div class="bg-muted px-3 py-2 rounded-3xl">
          <input 
            type="date" 
            class="w-full text-light" 
            v-model="deadlineTask" />            
        </div>
      </div>
    </div>
    <div class="flex items-center bg-muted mb-6 px-3 py-2 rounded-3xl">
      <input 
        type="text" 
        placeholder="Your task's description"
        class="text-light"
        v-model.trim="descriptionTask" />            
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'AddTaskForm',
  emits: ['addTask'],
  data() {
    return {
      nameTask: '',
      descriptionTask: '',
      deadlineTask: '',
    }
  },
  methods: {
    createTask() {
      let d = new Date(this.deadlineTask);
      let t = d.toISOString();

      const newTask = {
        nameTask: this.nameTask,
        description: this.descriptionTask,
        deadline: t,
      }
      this.$emit('addTask', newTask);

      this.nameTask = '';
      this.descriptionTask = '';
      this.deadlineTask = ''
    }
  }
}
</script>