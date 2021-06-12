<template>
	<div>
		<HeaderVue></HeaderVue>

		<BodyVue></BodyVue>
	</div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import BodyVue from '@/components/Body.vue'

export default {
	name: "app",
	components: {
		HeaderVue,
		BodyVue
	},
	data() {
		return {
			logged: true
		}
	}
}
</script>
