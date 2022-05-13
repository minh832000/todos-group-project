<template>
  <div class="relative w-screen h-screen">
    <div 
      class="absolute center lg:w-1/3 sm:w-2/3 w-11/12 px-8 bg-secondary rounded-xl"
    >
      <div class="my-8">
        <div class="mb-10">
          <p class="capitalize text-3xl font-bold text-light">Sign up</p>
          <p class="font-normal text-info">Please fill this form to create an account!</p>
        </div>
        <div>
          <form
            @submit.prevent="submitFormHandler"
            class="w-full text-light"
          >
            <div 
              class="mb-6"
            >
              <div class="flex items-center px-4 py-4 rounded-3xl bg-muted">
                <div class="w-11/12">
                  <input
                    class="w-full"
                    type="text" 
                    placeholder="Your Name"
                    v-model.trim="state.username"
                    @blur="v$.username.$touch" />
                </div>
                <div class="w-1/12">
                  <div
                    v-if="!v$.username.$error && !v$.username.$invalid" 
                    class="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-success" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>    
                  <div 
                    v-if="v$.username.$error && v$.username.$invalid"
                    class="w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 fill-danger" 
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div> 
                </div>
              </div>
            
              <div 
                v-if="v$.username.$error"
                class="mt-1 -mb-5"
              >
                <p 
                  v-if="v$.username.required.$invalid"
                  class="text-danger text-right"
                >
                  Your username is required.
                </p>
                <p
                  v-if="v$.username.minLength.$invalid"   
                  class="text-danger text-right"                           
                >
                  Your username must be longer than 7 characters.
                </p>
                <p
                  v-if="v$.username.maxLength.$invalid"
                  class="text-danger text-right"
                >
                  Your username cannot be longer than 31 characters.
                </p>
              </div>    
            </div> 
            <!-- end input username --> 

            <div 
              class="mb-6"
            >
              <div class="flex items-center px-4 py-4 rounded-3xl bg-muted">
                <div class="w-11/12">
                  <input
                    class="w-full"
                    type="email" 
                    placeholder="Your Email"
                    v-model.trim="state.email"
                    @blur="v$.email.$touch"
                    @beforeinput="state.errors.email.state = false" />
                </div>
                <div class="w-1/12">
                  <div
                    v-if="!v$.email.$error && !v$.email.$invalid && !state.errors.state" 
                    class="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-success" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>    
                  <div 
                    v-if="v$.email.$error && v$.email.$invalid || state.errors.state"
                    class="w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 fill-danger" 
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div> 
                </div>
              </div>
              <div 
                v-if="v$.email.$error || state.errors.email.state"
                class="mt-1 -mb-5"
              >
                <p 
                  v-if="v$.email.required.$invalid"
                  class="text-danger text-right"
                >
                  Your email address is required.
                </p>
                <p
                  v-if="v$.email.email.$invalid"
                  class="text-danger text-right"
                >
                  Please enter a valid email address.
                </p>
                <p
                  v-if="state.errors.email.state"
                  class="text-danger text-right"
                >
                  {{ state.errors.email.msg }}
                </p>
              </div>    
            </div> 
            <!-- end input email -->

            <div 
              class="mb-6"
            >
              <div class="flex items-center px-4 py-4 rounded-3xl bg-muted">
                <div class="w-11/12">
                  <input
                    class="w-full"
                    type="password" 
                    placeholder="Your Password"
                    v-model.trim="state.password"
                    @blur="v$.password.$touch" />
                </div>
                <div class="w-1/12">
                  <div
                    v-if="!v$.password.$error && !v$.password.$invalid" 
                    class="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-success" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>    
                  <div 
                    v-if="v$.password.$error && v$.password.$invalid"
                    class="w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 fill-danger" 
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div> 
                </div>
              </div>
              <div 
                v-if="v$.password.$error"
                class="mt-1 -mb-5"
              >
                <p 
                  v-if="v$.password.required.$invalid"
                  class="text-danger text-right"
                >
                  Your password is required.
                </p>
                <p
                  v-if="v$.password.minLength.$invalid"   
                  class="text-danger text-right"                           
                >
                  Your password must be longer than 8 characters.
                </p>
              </div>    
            </div>  
            <!-- end input password -->

            <div 
              class="mb-3"
            >
              <div class="flex items-center px-4 py-4 rounded-3xl bg-muted">
                <div class="w-11/12">
                  <input
                    class="w-full bg-muted"
                    type="password" 
                    placeholder="Your Confirm Password"
                    v-model.trim="state.confirmPassword"
                    @blur="v$.confirmPassword.$touch" />
                </div>
                <div class="w-1/12">
                  <div
                    v-if="!v$.confirmPassword.$error && !v$.confirmPassword.$invalid" 
                    class="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-success" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>    
                  <div 
                    v-if="v$.confirmPassword.$error && v$.confirmPassword.$invalid"
                    class="w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 fill-danger" 
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div> 
                </div>
              </div>
              <div 
                v-if="v$.confirmPassword.$error"
                class="mt-1 -mb-2 text-right text-danger"
              >
                <p v-if="v$.confirmPassword.required.$invalid">
                  Your confirm password is required.
                </p>
                <p v-if="v$.confirmPassword.sameAs.$invalid">
                  Your confirm password is not match.
                </p>
              </div>    
            </div>
            
            <div class="mb-6">
              <span>Already have an account?</span>
              <router-link :to="{ name: 'LOGIN'}">
                <span class="capitalize text-success pl-2">Sign in</span>
              </router-link>
            </div>

            <div>
              <button 
                class="w-full py-2 text-lg text-center font-bold rounded-3xl"
                type="submit"
                :class="v$.$invalid ? 'bg-info text-dark-gray' : 'bg-dark-success text-light'"
              >
                Sign up  
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs, maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import authAPI from "#/auth.service";

export default {
  name: "SignUp",
  setup() {
    const state = reactive({
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
      errors: {
        email: {
          state: false,
          msg: "Your email address is already registered."
        }
      }
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
    async submitFormHandler() {
      const formData = {
        name: this.state.username,
        email: this.state.email,
        passWord: this.state.password,
      };
      console.log(formData);

      try {
        const res = await authAPI.register(formData);
        if (res) {
          this.$router.push({
            name: 'LOGIN',
          })
        }
      }
      catch(err) {
        if(err.status === 500) {
          this.state.errors.email.state = true;
        }
      }
    }
  },
}
</script>