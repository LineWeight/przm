<template>
	<div class="pen">
		<div :style="style" @mouseleave="mouseOff()" @mouseover="mouseOver()" class="swatch">
			<p>{{pen.colorId}}</p>
		</div>
		<p class="name">{{pen.name}}</p>
	</div>
</template>

<script>

export default {
	props: ["pen"],
	data() {
		return {
			hovering: false
		}
	},
	methods: {
		mouseOver() {
			this.hovering = true;
		},
		mouseOff() {
			this.hovering = false;
		}
	},
	computed: {
		hexColor() {
			let rgb = this.pen.rgb
			return '#' +
				('0' + rgb[0].toString(16)).slice(-2) +
				('0' + rgb[1].toString(16)).slice(-2) +
				('0' + rgb[2].toString(16)).slice(-2)

		},

		style() {
			let c = this.pen.rgb
			let ctext = c[0] + ',' + c[1] + ',' + c[2] + ','
			if (this.hovering) {
				// return 'background: red;'
				return 'background: rgba(' + ctext + ' .8);'
			}
			return 'background: rgba(' + ctext + ' 1);'
			// return 'background: ' + this.hexColor + ";"
		}
	}
}

</script>

<style scoped>
.swatch {
	display: flex;
	transition: background-color .25s ease-out;
	align-items: center;
	justify-content: center;
	color: white;
	text-shadow: 0 0 5px white;
	cursor: pointer;
}

.name {
	align-self: center;
	margin-left: 10px;
}

.pen {

	border: 1px solid lightgrey;
	border-radius: 5px;
	overflow: hidden;

	display: grid;
	text-align: start;
	grid-template-columns: 3fr 5fr;
}
</style>
