<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const seenIndexes = ref([])
const seenIndexesString = computed(() => seenIndexes.value.map(({ number }) => number).join(', '))
const values = ref({})
const index = ref('')

async function fetchValues() {
  const { data } = await axios.get('/api/values/current')
  values.value = data ?? {}
}

async function fetchIndexes() {
  const { data } = await axios.get('/api/values/all')
  seenIndexes.value = data ?? []
}

async function handleSubmit() {
  await axios.post('/api/values', {
    index: index.value,
  })

  index.value = ''

  await fetchIndexes()
  await fetchValues()
}

onMounted(async () => {
  await fetchIndexes()
  await fetchValues()
})
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <form class="flex gap-x-2 items-center mb-10" @submit.prevent="handleSubmit">
      <label>Enter your index</label>
      <input class="py-2 px-3 text-neutral-900 rounded-full" v-model="index" />
      <button
        :disabled="!index"
        class="bg-orange-500 hover:bg-orange-700 disabled:opacity-50 disabled:hover:bg-orange-500 disabled:cursor-not-allowed text-orange-50 py-2 px-3 rounded-full"
      >
        Submit
      </button>
    </form>

    <h3 class="text-lg font-semibold">Indexes I have seen:</h3>
    <p class="py-3">{{ seenIndexesString }}</p>

    <h3 class="text-lg font-semibold">Calculated Values</h3>
    <ul class="py-3">
      <li v-for="(key, index) in values" :key="key">
        For index {{ index }}, I calculated {{ values[index] }}
      </li>
    </ul>
  </section>
</template>
