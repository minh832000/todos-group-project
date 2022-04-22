<template>
  <div class="w-full h-full relative bg-light-gray">
    <div class="w-2/3 absolute center bg-white">
      <div class="border rounded-2xl">
        <div class="p-16">
          <div class="flex items-center">
            <div class="w-1/2 order-2">
              <div class="px-4">
                 <div class="mb-4">
                  <p class="text-4xl font-normal text-right">Hello my friend</p>
                </div>
                <form 
                  @submit.prevent="submitFormHandler"
                  class="w-full"
                >
                  <div class="flex items-center py-2 border-b mb-6">
                    <div class="w-1/12 pb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="w-11/12"> 
                      <input
                        class="w-full border-0"
                        type="email" 
                        placeholder="Your Email"
                        v-model.trim="email" />
                    </div>
                  </div>
                  <div class="flex items-center py-2 border-b mb-6">
                    <div class="w-1/12 pb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="w-11/12"> 
                      <input
                        class="w-full border-0"
                        type="text" 
                        placeholder="Your Password"
                        v-model.trim="password">
                    </div>
                  </div>
                  <div class="mt-10"> 
                    <button 
                      class="px-10 py-3 bg-soft-blue rounded-md"
                    >
                      <span 
                        class="font-bold text-center text-white uppercase"
                      >
                        Login
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="w-1/2 order-1">
              <div class="px-4">
                <img 
                  src="@/images/signin-image.jpg" 
                  alt="Sign In Image"
                  class="max-w-full h-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';

export default {
  name: 'SignIn',
  setup(){
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validation() {
    return {
      email: {
        required, 
        email,
      },
      password: {
        required,
      }
    }
  },
  methods: {
    submitFormHandler() {
      const formData = {
        email: this.email,
        password: this.password
      }

      const url = 'http://localhost:3002/login';

      axios.post(url, formData)
           .then(res => {
             console.log(res)
           })
           .catch(err => {
             console.log(err)
           }).finally()
      
    }
  }
}
</script>

<style scoped>
input {
  border: none;
  outline: none;
}

.center {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>