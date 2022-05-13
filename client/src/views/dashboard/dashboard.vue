<template>
<div class="w-full h-full">
  <div class="lg:w-1/2 sm:w-3/4 w-full px-12 mx-auto">
    <div class="mt-20">
      <div class="mb-12">
        <p class="text-light font-bold text-2xl">Dashboard</p>
      </div>
      <div class="mb-12">
        <p class="text-light font-bold text-4xl">{{ greeting }},</p>
      </div>
      <div>
        <div v-if="lengthCollections">
          <p>Your collections</p>
        </div>
        <div v-else>
          <p class="text-info">You don't have any collections.</p>
        </div>
      </div>
    </div>
  </div>
  <button @click="a = a + 20">Increase A</button>
  <button @click="b = b + 10">Increase B</button>
  <p>A = {{ a }}</p>
  <p>B = {{ b }}</p>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  name: 'DashBoard',
  data() {
    return {
      a: 0,
      b: 0,
    }
  },
  methods: {
    showA() {
      console.log(this.a);
      return this.a;
    },
    showB() {
      console.log(this.b)
      return this.b;
    }
  },
  setup() {
    let collections = [];
    console.log(collections);

    const greeting = computed(() => {
      let result = '';

      const d = new Date();
    
      const h = d.getHours();

      if(h >= 4 && h <= 11) {
        result = "Good morning";
      }
      else if (h > 11 && h <= 18) {
        result = "Good afternoon";          
      } else {
        result = "Good evening";
      }

      return result;
    });

    const lengthCollections = computed(() => {
      return collections.length;
    })

    const getAllCollections = () => {
      if(localStorage.getItem('accessToken')) {
        console.log(localStorage.getItem('accessToken'));
  
      }
      else {
        console.log('Access Token does not exist.')
      }
    };

    getAllCollections();


    return {
      greeting,
      lengthCollections,
    }
  }
}

</script>