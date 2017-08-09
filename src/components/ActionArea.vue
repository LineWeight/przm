<template>
	<div :class="{active: isActive}" class="actionArea " @click="onClick() ">
		{{title}}
	</div>
</template>

<script>
export default {
	props: ["title", "slug", "changeEvent", "activeFlag"],

	methods: {
		onClick() {
			this.$emit(this.changeEvent, this.slug);
		}
	},
	computed: {
		isActive: function () {
			if (this.slug != null) {
				return this.slug === this.activeFlag
			}
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
	
	.actionArea:nth-child(2) {
		border-left: 1px solid darkgray;
	}
	
	.actionArea:hover {
		background-color: lightgray;
	}
	
	.active {
		background-color: lightgrey;
	}
</style>

