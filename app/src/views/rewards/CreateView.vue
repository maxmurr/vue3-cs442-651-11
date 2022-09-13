<template>
  <div class="m-8">
    <h1 class="text-3xl">Create New Reward</h1>

    <div>
      <div>
        <label for="name">Reward Name</label>
        <input type="text" v-model="reward.name">
      </div>

      <div>
        <label for="detail">Reward Detail</label>
        <textarea name="" id="" cols="30" rows="10" v-model="reward.detail"></textarea>
      </div>

      <div>
        <label for="total_amount">Total Amount</label>
        <input type="number" v-model="reward.total_amount">
      </div>

      <div>
        <label for="point">Redeemed Point</label>
        <input type="number" v-model="reward.point">
      </div>

      <div>
        <button @click="saveNewReward()"
          class="p-4 bg-green-400 border rounded">Create</button>
      </div>
    </div>

    <div class="p-4 mt-8 bg-blue-200">
      (Preview)

      <div class="block p-2 mt-4 border-2 border-blue-700 rounded">
      <h3 class="text-xl">{{ reward.name }}</h3>
      <p>{{ reward.point }}</p>
      <span>Detail</span>
      <button class="p-2 bg-blue-200 border-2 border-blue-400 rounded-xl">
        Redeem
      </button>
    </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      reward: {
        name: '',
        detail: '',
        point: 1,
        total_amount: 1
      } 
    }
  }, 
  
  methods: {
    async saveNewReward() {

      
      try {
        const url = "http://localhost/api/rewards"
        this.reward.balance = this.reward.total_amount
        this.reward.is_active = true
        const response = await Axios.post(url, this.reward)
        if (response.status == 201) {
          if (response.data.success) {
            let reward_id = response.data.reward_id
            this.$router.push(`/rewards/${reward_id}`)
          }
        }
      } catch(error) {
        
      }
    }
  }
}

</script>