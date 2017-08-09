<template>
	<button class="button actionArea" @click="onClick()">
		{{title}}
	</button>
</template>

<script>
export default {
	props: ["slug"],
	computed: {
		title: function () {
			return this.slug.split(' ').map(x => {
				return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase();
			}).join(' ');
		},
		groupName: function () {
			return this.slug.split(' ').map(x => {
				return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase();
			}).join('');
		}
	},
	methods: {
		onClick() {
			this.$emit("filterChanged", this.groupName);
		}
	}
}
</script>
