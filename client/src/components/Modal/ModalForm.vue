<template>
<div 
  class="fixed inset-0 w-full h-full z-30 bg-overlay"
  :class="{ hidden: !isActive }"
>
  <div class="absolute top-1/4 left-1/2 -transform-x-1/2 md:w-1/3 sm:w-2/3 w-11/12 bg-secondary px-8 rounded-lg">
    <div class="my-8">
      <div class="pb-2 border-b border-lights">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-light md:text-xl sm:text-lg text-base font-semibold">Create a new collection</p>
          </div>
          <div>
            <button 
              class="btnCloseModal"
              @click="closeModal">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5" 
                viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <form class="w-full">
          <div class="mt-7 mb-12">
            <div class="px-4 py-3 bg-muted text-light rounded-3xl">
              <input 
                type="text" 
                placeholder="Your collection's name" 
                v-model.trim="nameCollection" />
            </div>
          </div>
          <div class="my-3">
            <buton 
              class="py-3 px-5 bg-dark-success text-light rounded-xl font-bold sm:text-base text-sm"
              @click="createCollection"
            >
              Create Collection
            </buton>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ModalForm',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['toggleModal', 'submitForm'],
  data() {
    return {
      nameCollection: '',
    }
  },
  methods: {
    closeModal() {
      this.$emit('toggleModal', false);
    },
    createCollection() {
      this.$emit('submitForm', this.nameCollection)
      this.nameCollection = '';
    }
  }
}
</script>

<style scoped>
.btnCloseModal svg {
  fill: #7c7b86;;
}

.btnCloseModal:hover svg {
  fill: #f6f0f1;
}
</style>