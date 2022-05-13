<template>
<div 
  class="fixed inset-0 bg-overlay"
>
  <div class="relative w-full h-full">
    <div v-if="taskPrevious">
      <div class="absolute top-1/2 left-1/2 -transform-xy-1/2 md:w-1/3 sm:w-2/3 w-5/6 bg-secondary px-4 py-3 rounded-xl">
        <div class="flex items-center justify-between pb-3 mb-6 border-b">
          <p class="text-light font-bold text-lg">Edit task</p>
          <div
            @click="close"
            class="btnClose"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 fill-info" 
              viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <form class="w-full">
          <div class="mb-6">
            <div class="mb-1">
              <label class="text-info font-semibold text-sm">Task Name:</label>
            </div>
            <div class="px-3 py-2 bg-muted rounded-3xl">
              <input 
                type="text" 
                placeholder="Your task's name" 
                class="text-light"
                v-model="nameTask"
              />
            </div>
          </div>
          <div class="mb-6">
            <div class="mb-1">
              <label class="text-info font-semibold text-sm">Deadline:</label>
            </div>
            <div class="px-3 py-2 bg-muted rounded-3xl">
              <input 
                type="date" 
                placeholder="Your task's name" 
                class="text-light w-full"
                v-model="deadline"
              />
            </div>
          </div>
          <div class="mb-6">
            <div class="mb-1">
              <label class="text-info font-semibold text-sm">Description:</label>
            </div>
            <div class="px-3 py-2 bg-muted rounded-3xl">
              <input 
                type="text" 
                placeholder="Your task's name" 
                class="text-light w-full"
                v-model="description"
              />
            </div>
          </div>
          <div class="mb-6">
            <div class="mb-1">
              <label class="text-info font-semibold text-sm">State:</label>
            </div>
            <div class="px-3 py-2 bg-muted rounded-3xl flex items-center justify-between w-1/2">
              <input 
                type="checkbox" 
                placeholder="Your task's name" 
                class="text-light"
                v-model="state"
              />
              <div v-if="!state">
                <p class="text-danger font-semibold">Uncompleted</p>
              </div>
              <div v-else>
                <p class="text-success font-semibold">Completed</p>
              </div>
            </div>
          </div>
          <div class="w-1/2 mx-auto">
            <button 
              type="button"
              class="w-full py-2 bg-dark-success rounded-lg text-light font-bold"
              @click="submitForm"
            >
              Sumbit
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'UpdateTaskModal',
  emits: ['closeUpdateTaskModal', 'submitNewTask'],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    taskPrevious: {
      type: Object,
      default: () => {},
      required: true
    },
  },
  data() {
    return {
      id: this.taskPrevious.id,
      nameTask: this.taskPrevious.nameTask,
      deadline: this.taskPrevious.deadline,
      description: this.taskPrevious.description,
      state: this.taskPrevious.state,
    }
  },
  methods: {
    close() {
      this.$emit('closeUpdateTaskModal', false);
    },
    submitForm() {
      this.$emit('submitNewTask', {
        id: this.id,
        nameTask: this.nameTask,
        deadline: new Date(this.deadline),
        description: this.description,
        state: this.state,
      })
      this.$emit('closeUpdateTaskModal', false) 
    }
  }
}
</script>

<style scoped>
.btnClose:hover svg {
  fill: #f6f0f1;
}
</style>