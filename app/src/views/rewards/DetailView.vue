<template>
  <div class="m-8">
  
    <h1 class="text-3xl text-center">{{ reward.name }}</h1>

    <p>{{ reward.detail }}</p>

    <button class="px-4 py-2 mt-8 border rounded-lg bg-lime-400">
      Redeem with {{ reward.point }} point
    </button>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      reward: null,
      error: null
    }
  },
  async created() {
    const id = this.$route.params.id
    const url = `http://localhost/api/rewards/${id}`
    try {
      this.error = null
      let response = await Axios.get(url)
      if (response.status == 200) {
        this.reward = response.data.data
        console.table(this.reward)
      }
    } catch (error) {
      this.error = error.message
    }
  }
}
</script>