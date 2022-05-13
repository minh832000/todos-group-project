<template>
<div class="container lg:px-36 md:px-28 sm:px-20 px-3 mx-auto">
  <div v-if="collection">
    <div class="my-10">
      <p class="text-light text-3xl font-semibold">
        {{ collection.nameCollection }}
      </p>   
    </div>  
    <div class="my-10">
      <add-task-form @addTask="addTaskHandler" />      
    </div>
    <div class="mb-7">
      <button 
        class="relative w-full px-4 py-3 bg-secondary hover:bg-muted rounded-lg text-light text-left font-bold text-lg accordion"
        @click="accordion.isActiveAll = !accordion.isActiveAll"
        :class="{ active: accordion.isActiveAll }"
      >
        All - {{ numberOfTasks }}
      </button>
      <div 
        class="py-3 panel" 
        v-show="accordion.isActiveAll"
      >
        <div v-if="numberOfTasks">
          <div 
            v-for="task in tasks" 
            :key="task.id"
            :id="task.id"
          >
            <task-item 
              :id="task.id"
              :nameTask="task.nameTask"
              :description="task.description"
              :state="task.state"
              :deadline="task.deadline"
              @removeTask="removeTaskHandler"
              @editTask="editTaskHandler"
            />      
          </div>
        </div>
        <div v-else>
          <p class="text-info text-center">There are not any tasks created.</p>
        </div>
      </div>
    </div>  
    <div class="mb-7">
      <button 
        class="relative w-full px-4 py-3 bg-secondary hover:bg-muted rounded-lg text-light text-left font-bold text-lg accordion"
        @click="accordion.isActiveTasksUncompleted = !accordion.isActiveTasksUncompleted"
        :class="{ active: accordion.isActiveTasksUncompleted }"
      >
        Tasks - {{ numberOfTasksUncompleted }}
      </button>
      <div 
        class="py-3 panel" 
        v-show="accordion.isActiveTasksUncompleted"
      >
        <div v-if="numberOfTasksUncompleted">
          <div 
            v-for="task in tasksUncompleted" 
            :key="task.id"
            :id="task.id"
          >
            <task-item 
              :id="task.id"
              :nameTask="task.nameTask"
              :description="task.description"
              :state="task.state"
              :deadline="task.deadline"
              @removeTask="removeTaskHandler"
              @editTask="editTaskHandler"
            />      
          </div>
        </div>
        <div v-else>
          <p class="text-info text-center">There are not any tasks.</p>
        </div>
      </div>
    </div>   
    <div class="mb-7">
      <button 
        class="relative w-full px-4 py-3 bg-secondary hover:bg-muted rounded-lg text-light text-left font-bold text-lg accordion"
        @click="accordion.isActiveTasksCompleted = !accordion.isActiveTasksCompleted"
        :class="{ active: accordion.isActiveTasksCompleted }"
      >
        Completed - {{ numberOfTasksCompleted }}
      </button>
      <div 
        class="py-3 panel" 
        v-show="accordion.isActiveTasksCompleted"
      >
        <div v-if="numberOfTasksCompleted">
          <div 
            v-for="task in tasksCompleted" 
            :key="task.id"
            :id="task.id"
          >
            <task-item 
              :id="task.id"
              :nameTask="task.nameTask"
              :description="task.description"
              :state="task.state"
              :deadline="task.deadline" 
              @removeTask="removeTaskHandler"
              @editTask="editTaskHandler"
            />      
          </div>
        </div>
        <div v-else>
          <p class="text-info text-center">There are not any tasks completed.</p>
        </div>
      </div>
    </div>  
  </div>
  <div v-else>
    <div class="loader mx-auto">
      Loading
    </div>
  </div> 
  
  <update-task-modal 
    v-if="modal.isActiveUpdateTaskModal"
    :isOpen="modal.isActiveUpdateTaskModal"
    @closeUpdateTaskModal="closeUpdateTaskModalHandler"
    :taskPrevious="updateTask.taskPrevious"
    @submitNewTask="updateTaskHandler"
  />
</div>
</template>

<script>
import collectionAPI from '#/collection.service.js';
import taskAPI from '#/task.service.js'
import TaskItem from './components/TaskItem.vue';
import AddTaskForm from './components/AddTaskForm.vue';
import UpdateTaskModal  from './components/ModalUpdateTask.vue';

export default {
  name: 'CollectionDetail',
  components: {
    TaskItem,
    AddTaskForm,
    UpdateTaskModal,
  },
  data() {
    return {
      collection: null,
      tasks: null,
      collectionId: null,
      accordion: {
        isActiveAll: false,
        isActiveTasksUncompleted: false,
        isActiveTasksCompleted: false,
      },
      updateTask: {
        taskPrevious: null,
        taskNew: null
      },
      modal: {
        isActiveUpdateTaskModal: false,
      }
    }
  },
  computed: {
    tasksCompleted() {
      if (this.tasks) {
        return this.tasks.filter(item => {
          return item.state == true;
        });
      }
      return 0;
    },
    tasksUncompleted() {
      if (this.tasks) {
        return this.tasks.filter(item => {
          return item.state == false;
        });
      }
      return 0;
    },
    numberOfTasksCompleted() {
      return this.tasksCompleted.length;
    },
    numberOfTasksUncompleted() {
      return this.tasksUncompleted.length;
    },
    numberOfTasks() {
      if(this.tasks) {
        return this.tasks.length;
      }
      return 0;
    }
  },
  async created() {
    this.collectionId = this.$route.params.id; 

    const getCollection = async () => {
      try {
        const res = await collectionAPI.index();
        if (res) {
          res.forEach(item => {
            if (item.id == this.$route.params.id) {
              console.log(item);
              this.collection = item;
            }
          })
        }
      } catch (err) {
        console.log(err);    
      }
    }

    const getTasks = async () => {
      try {
        const res = await collectionAPI.get(this.$route.params.id);
        if (res) {
          console.log(res);
          this.tasks = res;
        }
      } catch (err) {
        console.log(err);
      }
    }

    getCollection();
    getTasks();
  },
  methods: {
    async removeTaskHandler(id) {
      try {
        const res = await taskAPI.delete(id);
        if (res) {
          this.tasks.forEach((item, index) => {
            if(item.id === id) {
              this.tasks.splice(index, 1);
            }
          })          
        }
      } catch (err) {
        console.log(err);
      }   
    },
    async editTaskHandler(id) {
      let task = await this.tasks.filter(item => {
        return item.id === id;
      });
      
      if (task) {
        const t = {
          id: task[0].id,
          nameTask: task[0].nameTask,
          deadline: task[0].deadline.toString().slice(0, 10),
          description: task[0].description,
          state: task[0].state,
        }

        this.updateTask.taskPrevious = t;
        
        this.modal.isActiveUpdateTaskModal = !this.modal.isActiveUpdateTaskModal;

      }

      
    },
    async addTaskHandler(data) {

      const newTask = {
        nameTask: data.nameTask,
        collectionId: parseInt(this.collectionId),
        deadline: data.deadline,
        description: data.description
      };
      console.log(newTask);
      try {
        const res = await taskAPI.create(newTask);
        if (res) {
          this.tasks.push(res);
        }
      } catch (err) {
        console.log(err.response);        
      }
    },
    closeUpdateTaskModalHandler(state) {
      this.modal.isActiveUpdateTaskModal = state;
    },
    async updateTaskHandler(data) {
      console.log(data);
      try {
        const res = await taskAPI.update(data);

        if (res) {
          this.tasks.forEach((item,index) => {
            if(item.id === res.id) {
              this.tasks[index] = res;
            }
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.loader {
  border: 7px solid #f6f0f1;
  border-radius: 50%;
  border-top: 7px solid #202443;
  border-bottom: 7px solid #202443;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.accordion::before {
  content: '';
  position: absolute;
  background-color: #f6f0f1;
  height: 16px;
  width: 2px;
  top: 50%;
  right: 23px;
  transform: translate(0, -50%);
  transition: all 0.5ms ease-in-out;
}
.accordion::after {
  content: '';
  position: absolute;
  background-color: #f6f0f1;
  width: 16px;
  height: 2px;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}

.accordion.active::before {
  content: '';
  width: 0;
  height: 0;
  transition: all 0.5ms ease-in-out;
}

.panel {
  transition: all 0.5ms ease-in;
}
</style>