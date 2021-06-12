<template>
	<div v-if="logged">
		<HeaderVue></HeaderVue>

		<BodyVue
			v-bind:logged="logged"
			v-bind:imprimantes="imprimantes">
		</BodyVue>
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
			logged: true,
			imprimantes: [
				{
					name: 'Accueil',
					ip: '102.120.23.41',
					port: '340'
				},
				{
					name: 'Bar',
					ip: '102.120.23.44',
					port: '345'
				}
			]
		}
	},
	methods:{
		is_logged(logged) {
			this.logged = logged
		}
	}
}
</script>
