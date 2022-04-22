<template>
  <div class="w-full h-full relative bg-light-gray">
    <div class="w-2/3 absolute center bg-white">
      <div class="border rounded-2xl">
        <div class="p-16">
            <div class="mb-4">
                <p class="text-4xl font-normal">Create a new account</p>
            </div>
            <div class="flex items-center">
                <div class="w-1/2 order-2">
                  <div class="px-4">
                      <img src="@/images/signup-image.png" alt="Sign Up Image">
                  </div>
                </div>
                <div class="w-1/2 order-1">
                  <div class="px-4">
                      <form
                        @submit.prevent="submitFormHandler"
                        class="w-full"
                      >
                          <div class="flex items-center py-2 border-b mb-4">
                            <div class="w-1/12 pb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="w-11/12"> 
                              <input
                                class="w-full border-0"
                                type="text" 
                                placeholder="Your Name"
                                v-model.trim="state.username"
                                @keypress="v$.username.$touch()"
                              >
                            </div>
                          </div>
                          <div 
                            v-if="v$.username.$error"
                            class="mb-4 -mt-3"
                          >
                            <p 
                              v-if="v$.username.required.$invalid"
                              class="text-warning"
                            >
                              Your username is required.
                            </p>
                            <p
                              v-if="v$.username.minLength.$invalid"   
                              class="text-danger"                           
                            >
                              Your username must be longer than 7 characters.
                            </p>
                            <p
                              v-if="v$.username.maxLength.$invalid"
                              class="text-danger"
                            >
                              Your username cannot be longer than 31 characters.
                            </p>
                          </div>
                          <div
                            v-if="!v$.username.$invalid && v$.username.$model" 
                            class="mb-4 -mt-3"
                          >
                            <p class="text-success">Your username is valid.</p>
                          </div>
                          <!-- end input username -->

                          <div class="flex items-center py-2 border-b mb-4">
                            <div class="w-1/12 pb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </div>
                            <div class="w-11/12"> 
                              <input
                                class="w-full border-0"
                                type="email" 
                                placeholder="Your Email"
                                v-model.trim="state.email"
                                @keypress="v$.email.$touch()"
                              >
                            </div>
                          </div>
                          <div 
                            v-if="v$.email.$error"
                            class="mb-4 -mt-3"
                          >
                            <p 
                              v-if="v$.email.required.$invalid"
                              class="text-warning"
                            >
                              Your email is required.
                            </p>
                            <p
                              v-if="v$.email.email.$invalid"
                              class="text-danger"
                            >
                              Please enter a valid email address.
                            </p>
                          </div>
                          <div
                            v-if="!v$.email.$invalid && v$.email.$model"
                            class="mb-4 -mt-3"
                          >
                            <p class="text-success">Your email is valid.</p>
                          </div>
                          <!-- end input email -->

                          <!-- start input password -->
                          <div class="flex items-center py-2 border-b mb-4">
                            <div class="w-1/12 pb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="w-11/12"> 
                              <input
                                class="w-full border-0"
                                type="password" 
                                placeholder="Your Password"
                                v-model.trim="state.password"
                                @keypress="v$.password.$touch()">
                            </div>
                          </div>
                          <div
                            v-if="v$.password.$error"
                            class="mb-4 -mt-3"
                          >
                            <p 
                              v-if="v$.password.required.$invalid"
                              class="text-warning"
                            >
                              Your password is required.
                            </p>
                            <p
                              v-if="v$.password.minLength.$invalid" 
                              class="text-danger"
                            >
                              Your password must be longer than 8 characters.
                            </p>
                          </div>
                          <div
                            v-if="!v$.password.$invalid && v$.password.$model"
                            class="mb-4 -mt-3"
                          >
                            <p class="text-success">Your password is valid.</p>
                          </div>
                          <!-- end input password -->

                          <!-- start input confirm password -->
                          <div class="flex items-center py-2 border-b">
                            <div class="w-1/12 pb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="w-11/12"> 
                              <input
                                class="w-full border-0"
                                type="password" 
                                placeholder="Repeat Your Password"
                                v-model.trim="state.confirmPassword"
                                @keypress="v$.confirmPassword.$touch()"
                              >
                            </div>
                          </div>
                          <div
                            v-if="v$.confirmPassword.$error"
                            class="mt-1"
                          >
                            <p
                              v-if="v$.confirmPassword.required.$invalid"
                              class="text-warning" 
                            >
                              Your confirm password is required.
                            </p>
                            <p 
                              v-if="v$.confirmPassword.sameAs.$invalid"
                              class="text-danger"
                            >
                              Your confirm password does not match.
                            </p>

                          </div>
                          <div
                            v-if="!v$.confirmPassword.$invalid && v$.confirmPassword.$model"
                            class="mt-1"
                          >
                            <p class="text-success">
                              Your confirm password match.
                            </p>
                          </div>
                          <!-- end input confirm password -->
            
                          <div class="mt-10">
                            <button 
                              type="submit"
                              class="px-10 py-3 rounded-md"
                              :class="v$.$error ? 'bg-gray-400 text-black' : 'bg-soft-blue text-white'"
                              :disable="v$.$error"
                            >
                              <span class="font-semibold text-center uppercase">Register</span>
                            </button>
                          </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs, maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import axios from 'axios';

export default {
    name: "SignUp",
    setup() {
      const state = reactive({
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
      });

      const rules = computed(() => {
        return {
          username: {
            required,
            minLength: minLength(7),
            maxLength: maxLength(31)
          },
          email: {
            required,
            email,
          },
          password: {
            required,
            minLength: minLength(8),
          },
          confirmPassword: {
            required,
            sameAs: sameAs(state.password),
          }
        }
      });

      const v$ = useVuelidate(rules, state);

      return {
        state,
        v$
      }
    },
    methods: {
       submitFormHandler() {
        const formData = {
          name: this.state.username,
          email: this.state.email,
          passWord: this.state.password
        };

        axios.post('http://localhost:3002/register',formData)  
            .then(res => {
              console.log(res)
              alert(res.data.message);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>