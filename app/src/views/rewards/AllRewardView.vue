<template>
  <div class="mx-8">
    <h1 class="text-3xl text-yellow-700">{{ title }}</h1>

    <div v-if="error != null">
      {{ error }}
    </div>
    <div v-for="reward in rewards" 
         :key="reward.id"
         class="block p-2 mt-4 border-2 border-blue-700 rounded"
    >
      <h3 class="text-xl">{{ reward.name }}</h3>
      <p>{{ reward.point }}</p>
      <RouterLink :to="`rewards/${reward.id}`">Detail</RouterLink>

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
      rewards: null,
      error: null
    }
  },
  methods: {
    selectReward(reward) {
      console.table(reward)
      this.$router.push(`rewards/${reward.id}`)
    }
  },
  async mounted() {
    const url = "http://localhost/api/rewards"

    try {
      this.error = null
      const response = await axios.get(url);
      this.rewards = response.data.data
    } catch(error) {
      console.log(error)
      this.error = error.message
    }
    
    
  }
}
</script>

<style scoped>

</style>