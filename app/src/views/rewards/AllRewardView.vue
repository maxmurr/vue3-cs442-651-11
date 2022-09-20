<template>
  <div class="mx-8">
    <h1 class="text-3xl text-yellow-700">{{ title }}</h1>

    <div v-if="error != null">
      {{ error }}
    </div>

    <reward-card v-for="reward in rewards" :key="reward.id" 
            :reward="{...reward}" :url="`rewards/${reward.id}`">
    {{ reward.detail }}
    <template #total_amount>จำนวนจำกัด {{ reward.total_amount }} สิทธิ์</template>
    </reward-card>

    {{ selected }}
  </div>
</template>

<script>
import RewardCard from '@/components/rewards/RewardCard.vue'
import { useRewardStore } from '@/stores/reward.js'

export default {
  setup() {
    const reward_store = useRewardStore()
    return { reward_store }
  },
  data() {
    return {
      title: "Rewards",
      selected: null,
      rewards: null,
      error: null
    }
  },
  components: {
    RewardCard
  },
  methods: {
    selectReward(reward) {
      console.table(reward)
      this.$router.push(`rewards/${reward.id}`)
    }
  },
  async mounted() {
    try {
      this.error = null
      await this.reward_store.fetch()
      this.rewards = this.reward_store.sortByName
    } catch(error) {
      console.log(error)
      this.error = error.message
    }
    
    
  }
}
</script>

<style scoped>

</style>