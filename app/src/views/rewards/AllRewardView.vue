<template>
  <div class="mx-8">
    <h1 class="text-3xl text-yellow-700">{{ title }}</h1>

    <div v-for="reward in rewards" 
         :key="reward.id"
         class="block p-2 mt-4 border-2 border-blue-700 rounded"
    >
      <h3 class="text-xl">{{ reward.name }}</h3>
      <p>{{ reward.point }}</p>
      <button class="p-2 bg-blue-200 border-2 border-blue-400 rounded-xl"
          @click="selectReward(reward)"
      >
        Redeem
      </button>
    </div>

    {{ selected }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: "Rewards",
      selected: null,
      rewards: null
    }
  },
  methods: {
    selectReward(reward) {
      console.table(reward)
    }
  },
  async mounted() {
    const url = "http://localhost/api/rewards"
    // const response = axios.get(url)
    //               .then((data) => {
    //                 this.rewards = data.data.data
    //               })

    const response = await axios.get(url);
    this.rewards = response.data.data
    
    // Non-Blocking I/O
    // Asynchronous Language
         // Callback -> Callback Hell Loop
         // Promise -> Promise Hell Loop
         // async-await
    
    
  }
}
</script>

<style scoped>

</style>