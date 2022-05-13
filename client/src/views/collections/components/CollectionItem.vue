<template>
<div class="bg-secondary rounded-lg relative pt-full">
  <div class="absolute top-3 left-3">
    <div class="text-light font-bold text-sm">
      <span
        v-if="collectionStatus == 0" 
        class="bg-danger px-3 py-1 rounded-full"
      >
        To Do
      </span>
      <span
        v-else-if="collectionStatus == 1"
        class="bg-warning px-3 py-1 rounded-full"
      >
        In Process
      </span>
      <span
        v-else
        class="bg-success px-3 py-1 rounded-full"
      >
        Done
      </span>
    </div>
  </div>
  <div class="absolute left-3 bottom-3">
    <p class="text-light text-xl font-semibold">
      {{ nameCollection }}
    </p> 
    <div class="text-info text-sm">
      <p v-if="collectionStatus == 0">
        There are no tasks
      </p>
      <p v-if="collectionStatus == 1">
        {{ numberOfTasksCompleted }}/{{ numberOfTasks }} done
      </p>
      <p v-if="collectionStatus == 2">
        All {{ numberOfTasksCompleted }} done!
      </p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'CollectionItem',
  props: {
    nameCollection: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
      default: () => [],
    }
  },
  computed: {
    numberOfTasks() {
      return this.tasks.length;
    },
    collectionStatus() {
      if (this.tasks.length == 0) {
        return 0;
      }
      if(this.tasks.length > 0) {
        let check = this.tasks.every(item => {
          return item.state;
        })
        if (check) {
          return 2;
        }
      }
      return 1;
    },
    numberOfTasksCompleted() {
      let c = this.tasks.filter(item => {
        return item.state == true;
      });
      return c.length;
    }
  }
}
</script>

<style scoped>
.pt-full {
    padding-top: 100%;
}
</style>