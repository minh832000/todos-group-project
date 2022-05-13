<template>
<div class="flex items-center bg-secondary px-4 py-3 rounded-lg mb-1">
  <div class="w-1/12">
    <div
      v-if="state" 
      class="w-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-success" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div 
      v-else
      class="w-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-danger" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
  <div class="w-10/12">
    <p class="text-light text-lg font-medium">
      {{ nameTask }}
    </p>
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-info mr-3" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
      </svg>    
      <span class="text-info text-sm">
        {{ formatDateDeadline }}
      </span>  
    </div>
  </div>
  <div class="w-1/12">
    <div v-if="!state">
      <div class="flex items-center justify-between">
        <button
        type="button"
        @click="edit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-warning" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          type="button"
          @click="remove"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-danger" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div v-else class="flex justify-end">
      <button
        type="button"
        @click="remove"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-danger" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    id: {
      type: Number,
      required: true,
    },
    nameTask: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    state: {
      type: Boolean,
      default: false,
    },
    deadline: {
      type: Date,
    }
  },
  emits: ['removeTask', 'editTask'],
  computed: {
    formatDateDeadline() {
      let d = new Date(this.deadline);
      return d.toDateString();
    }
  },
  methods: {
    remove() {
      this.$emit('removeTask', this.id);
    },
    edit() {
      this.$emit('editTask', this.id);
    }
  }
}

</script>