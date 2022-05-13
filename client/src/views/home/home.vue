<template>
  <div class="relative w-screen h-screen">
      <div class="absolute top-0 left-0 w-full h-full z-0 bg-primary"></div>
      <div class="absolute center lg:w-1/3 sm:w-2/3 w-11/12 px-4 rounded-lg">
        <div class="my-8">
          <div class="text-center mb-10">
            <p class="text-light font-bold text-5xl mb-3">Make Your Tasks</p>
            <p class="text-info font-medium text-base">Keep track of the daily tasks in life and get that satisfaction upon compltetion</p>
          </div>
          <div class="flex items-center flex-wrap">
            <div class="md:w-1/2 sm:w-full w-full px-4">
              <button
                id="btnSignIn" 
                class="w-full py-3 bg-dark-success rounded-md"
                @click="redirectHandler"
              >
                <span class="text-light font-bold text-lg">Sign in</span>
              </button>
            </div>
            <div class="md:w-1/2 sm:w-full w-full px-4 md:mt-0 sm:mt-3 mt-3">
              <button
                id="btnSignUp" 
                class="w-full py-3 bg-secondary rounded-md"
                @click="redirectHandler"
              >
                <span class="text-light font-bold text-lg text-center">Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "HomePage",
    methods: {
      redirectHandler(e){
        let targetId = e.currentTarget.id;
        if(targetId === "btnSignIn") {
          this.$router.push({ name: "LOGIN" });
        }
        if(targetId == "btnSignUp") {
          this.$router.push({ name: "REGISTER"});
        }
      }
    }
}
</script>

<style scoped>
.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#btnSignIn:hover {
  background-color: #5cb85c;
}
#btnSignIn:hover span {
  color: #575857;
}

#btnSignUp:hover {
  background-color: #7C7B86;
}
#btnSignUp:hover span {
  color: #242846;
}
</style>