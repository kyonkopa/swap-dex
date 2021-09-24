<template>
	<div>
		<div class="container">
			<div class="notification" style="font-size: 1.4rem" v-if="notification">{{ notification }}</div>

			<h3>Swap</h3>
			<section class="main" style="margin-top: 2em">
				<div><strong v-if="!pools.length" style="font-size: 1.2em">No pools found, click on Create pool to get started</strong></div>
				<SpButton @click="onCreatePool" :busy="creatingPool" style="margin-top: 1em">Create pool</SpButton>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Swap',
	data: () => ({ creatingPool: false, notification: null }),
	computed: {
		wallet() {
			return this.$store.getters['common/wallet/wallet']
		},
		pools() {
			return this.$store.getters['tendermint.liquidity.v1beta1/getLiquidityPools']
		},
		params() {
			return this.$store.getters['tendermint.liquidity.v1beta1/getParams']
		},
		walletAddress() {
			return this.$store.getters['common/wallet/address']
		}
	},
	methods: {
		async onCreatePool() {
			this.creatingPool = true
			try {
				// request to create pool
				const message = await this.$store.dispatch('tendermint.liquidity.v1beta1/sendMsgCreatePool', {
					value: { poolCreatorAddress: this.walletAddress, poolTypeId: 1, depositCoins: [{ denom: 'uphoton', amount: '100000000' }] },
					fee: '0.025uphoton'
				})
			} catch (e) {
				console.log(e)
				this.notify(e.message)
			} finally {
				this.creatingPool = false
			}
		},

		notify(message) {
			this.notification = message

			// hide notification
			window.setTimeout(() => {
				this.notification = null
			}, 5000)
		}
	},
	async mounted() {
		console.log(this.$store.getters['common/env/apiTendermint'])
	}
}
</script>
