<template>
	<button class="button actionArea" @click="onClick()">
		{{title}}
	</button>
</template>

<script>
export default {
	props: ["slug", "title"],
	methods: {
		onClick() {
			this.$emit("sortChanged", this.slug);
		}
	}
}
</script>
