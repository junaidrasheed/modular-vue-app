<template>
  <div id="app">
    <div class="flex w-full bg-gray-100 justify-center py-1 space-x-1">
      <template v-for="(item, idx) in navItems" >
        <router-link :to="item.link" :key="idx"> 
          <div 
            :class="{'bg-gradient-to-r from-indigo-500 to-blue-500 text-blue-100' : $route.path == item.link }"
            class="rounded cursor-pointer transition duration-100 text-sm ease-in-out px-4 py-2 hover:bg-indigo-400 hover:text-blue-100">
            {{ item.text}} 
          </div>
        </router-link>
      </template>
    </div>
    <div class="bg-gray-200 h-screen">
        <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      navItems: [
        { link: '/', text: 'Home' },
        { link: '/module_1', text: 'Module 1' },
        { link: '/module_2', text: 'Module 2' }
      ]
    }
  }
}
</script>