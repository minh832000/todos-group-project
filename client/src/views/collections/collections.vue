<template>
<div class="w-full h-full">
  <div class="lg:w-2/3 md:w-3/4 sm:w-4/5 w-11/12 mx-auto">
    <div class="my-10">
      <p class="text-light text-2xl font-semibold">Collections</p>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-flow-row md:gap-3 gap-1">
      <div
       v-for="item in collections"
       :key="item.id"
       :id="item.id" 
       @click="redirectCollectionDetailHandler($event, item.id)"
      >
        <collection-item 
          :nameCollection="item.nameCollection"
          :tasks="item.tasks"
        />   
      </div>
      
      <div>
        <div class="pt-full bg-secondary rounded-lg relative">
          <button 
            type="button" 
            @click="isShow = !isShow"
            class="absolute top-1/2 left-1/2 -transform-xy-1/2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6 fill-light" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<modal-form 
  :isActive="isShow" 
  @toggleModal="toggleModalHandler"
  @submitForm="submitFormHandler" />

</template>
<script>
import collectionAPI from '#/collection.service';
import CollectionItem from './components/CollectionItem.vue';
import ModalForm from '../../components/Modal/ModalForm.vue';

export default {
  name: "Collections",
  components: {
    CollectionItem,
    ModalForm,
  },
  data() {
    return {
      collections: null,
      isShow: false,
    }
  },
  computed: {
    showModal: {
      get() {
        return this.isShow;
      },
      set(value) {
        this.isShow = value;
      }
    }
  },
  async created() {
    try {
      const res = await collectionAPI.index();

      if (res) {
        console.log(res);
        this.collections = res;
      }
    }
    catch(err) {
      console.log(err);
    }
  },
  methods: {
    toggleModalHandler(value) {
      this.showModal = value;
    },
    async submitFormHandler(data) {
      console.log(data);
      try {
        const res = await collectionAPI.create({ nameCollection: data });
        if (res) {
          console.log(res);
          this.collections.push(res);
        }
      } catch (err) {
        console.log(err);
      }
      
    },
    async removeCollectionHandler(e, id) {
      try {
        const res = await collectionAPI.delete(id);
        if (res) {
          await this.collections.forEach((item, index) => {
            if(item.id === id) {
              this.collections.splice(index, 1);
            }            
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    redirectCollectionDetailHandler(e, id) {
      console.log(e);
      this.$router.push({
        name: 'COLLECTION_DETAIL',
        params: {
          id: id,
        }
      })
    }

  }
}
</script>

<style>
input {
  background: none;
  border: none;
  outline: none;
}

input::placeholder {
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
}

.pt-full {
  padding-top: 100%;
}
</style>