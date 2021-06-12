<template>
	<div v-if="logged">
		<HeaderVue></HeaderVue>

		<BodyVue></BodyVue>
	</div>

	<div v-else>
		<LoginVue 
			v-if="!logged"
			v-on:is_logged="is_logged">
		</LoginVue>
	</div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import BodyVue from '@/components/Body.vue'
import LoginVue from '@/components/Login.vue'

export default {
	name: "app",
	components: {
		HeaderVue,
		BodyVue,
		LoginVue
	},
	data() {
		return {
			logged: false
		}
	},
	methods:{
		is_logged(logged) {
			this.logged = logged
		}
	}
}
</script>
