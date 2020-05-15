<template>
  <div id="app">
    <keep-alive exclude='City'>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
 *{touch-action: manipulation;}
</style>
