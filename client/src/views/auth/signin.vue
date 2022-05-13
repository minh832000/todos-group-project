<template>
  <div class="relative w-screen h-screen">
    <div class="absolute center lg:w-1/3 sm:w-2/3 w-11/12 px-8 bg-secondary text-white rounded-lg">
      <div class="my-8">
        <!-- intro -->
        <div class="mb-10">
          <p class="capitalize text-3xl font-bold">Sign in</p>
          <p class="font-light">Please fill this form to sign in!</p>
        <img src="" alt="">
        </div>

        <!-- body -->
        <div>
          <div 
            v-if="notification"
            class="mb-2 -mt-3"
          >
            <p class="text-danger">{{ notification }}</p>
          </div>
          <form 
            class="w-full"
            @submit.prevent="submitFormHandler"
          >
            <!-- start input email -->
            <div class="mb-6">
              <div class="flex items-center px-4 py-4 rounded-3xl bg-muted">
                <div class="w-11/12"> 
                  <input
                    class="w-full border-0"
                    type="email" 
                    placeholder="Your Email"
                    v-model.trim="email" 
                    @blur="v$.email.$touch"
                    @beforeinput="errors.email.state = false"/>
                </div>
                <div class="w-1/12">
                  <div
                    v-if="!v$.email.$error && !v$.email.$invalid && !errors.email.state" 
                    class="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-success" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>    
                  <div 
                    v-if="v$.email.$error && v$.email.$invalid || errors.email.state"
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
                v-if="v$.email.$error || errors.email.state"
                class="mt-1 -mb-4 text-right text-danger"
              > 
                <p v-if="v$.email.required.$invalid">
                  Your email address is required.
                </p>
                <p v-if="v$.email.email.$invalid">
                  Please enter a valid email address.
                </p>    
                <p v-if="errors.email.state">
                  Your email is not correct.
                </p>          
              </div>
            </div>

            <div class="mb-6">
              <div class="flex items-center px-4 py-4 rounded-3xl bg-muted">
                <div class="w-11/12"> 
                  <input
                    class="w-full border-0"
                    type="password" 
                    placeholder="Your Password"
                    v-model.trim="password"
                    @blur="v$.password.$touch"
                    @beforeinput="errors.password.state = false" />
                </div>
                <div class="w-1/12">
                  <div
                    v-if="!v$.password.$error && !v$.password.$invalid && !errors.password.state && !errors.email.state" 
                    class="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-success" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>   
                  <div 
                    v-if="v$.password.$error && v$.password.$invalid || errors.password.state"
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
                v-if="v$.password.$error || errors.password.state"
                class="mt-1 -mb-4 text-right text-danger"
              > 
                <p v-if="v$.password.required.$invalid">
                  Your password is required.
                </p>
                <p v-if="errors.password.state">
                  Your password is not correct.
                </p>
              </div>
            </div>

            <div class="mb-6">
              <span>Not a member?</span>
              <router-link :to="{ name: 'REGISTER'}">
                <span class="capitalize text-success pl-2">Sign up</span>
              </router-link>
            </div>

            <div>  
              <button 
                class="w-full py-2 rounded-md font-semibold text-center text-lg" 
                type="submit"
                :disabled="v$.$invalid" 
                :class="v$.$invalid ? 'bg-info text-dark-gray' : 'bg-dark-success text-light'"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import authAPI from '#/auth.service';

export default {
  name: 'SignIn',
  setup(){
    const notification = ref('');
    const route = useRoute();

    if(route.params) {
      notification.value = route.params.msg;
    }

    return {
      v$: useVuelidate(),
      notification,
    }
  },
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: {
          state: false,
        },
        password: {
          state: false,
        }
      },
    }
  },
  validations: {
    email: {
      required, 
      email,
    },
    password: {
      required,
    }
  },
  methods: {
    async submitFormHandler() {
      // remove notification for expired session
      this.notification = '';

      const formData = {
        email: this.email,
        password: this.password
      };

      try {
        const res = await authAPI.login(formData);
        
        if (res) {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);

          this.$router.push({
            name: 'COLLECTIONS'
          })
        }
      }
      catch(err) {
        if (err) {          
          let msg = err.error;
      
          if (msg.indexOf('Email') > -1) {
            this.errors.email.state = true;
            this.errors.password.state = false;
          }
          if (msg.indexOf('Password') > -1) {
            this.errors.password.state = true;
            this.errors.email.state = false;
          }
          if (msg.indexOf('Network') > -1) {
            this.notification = msg;
          }
        }
      }
    }
  },
}
</script>

<style>
.pt-full {
  padding-top: 100%;
}
</style>