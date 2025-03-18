<script setup>
import Fibonacci from '@/components/FibonacciForm.vue'
</script>

<template>
  <main class="flex flex-col h-full justify-center">
    <header>
      <h1 class="text-3xl text-center font-bold pt-8">Fibonacci Calculator</h1>
    </header>
    <div class="flex-1 flex items-center justify-center">
      <Fibonacci />
    </div>
  </main>
</template>
