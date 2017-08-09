<template>
	<div class="actionArea" @click="onClick()">
		{{title}}
	</div>
</template>

<script>
export default {
	props: ["title", "slug", "changeEvent"],

	methods: {
		onClick() {
			this.isEditing = this.slug
			this.$emit(this.changeEvent, this.slug);
		}
	}
}
</script>

<style scoped>
.actionArea {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	width: 100%;
	height: 100%;
	grid-row: 1 / -1;
	background-color: white;
	transition: background-color .25s ease-in-out;
}

.actionArea:hover {
	background-color: lightgray;
}
</style>

