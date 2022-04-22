<template>
  <div class="w-full h-full relative">
    <div class="w-2/3 absolute center">
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
                      <form class="w-full">
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
                                placeholder="Your Name">
                            </div>
                          </div>
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
                                type="text" 
                                placeholder="Your Email">
                            </div>
                          </div>
                          <div class="flex items-center py-2 border-b mb-4">
                            <div class="w-1/12 pb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="w-11/12"> 
                              <input
                                class="w-full border-0"
                                type="text" 
                                placeholder="Your Password">
                            </div>
                          </div>
                          <div class="flex items-center py-2 border-b">
                            <div class="w-1/12 pb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <div class="w-11/12"> 
                              <input
                                class="w-full border-0"
                                type="text" 
                                placeholder="Repeat Your Password">
                            </div>
                          </div>
                          <div class="mt-10">
                            <button class="px-10 py-3 bg-soft-blue rounded-md">
                              <span class="font-bold text-center text-white uppercase">Register</span>
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
export default {
    name: "SignUp",
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