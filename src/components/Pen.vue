<template>
	<div @click="click()" class="pen" @mouseleave="mouseOff()" @mouseover="mouseOver()">
		<div :class="{full: this.isInUserSet}" :style="swatchStyle" class="swatch">
		</div>
		<div class="penInfo">
			<p class="colorId">{{pen.colorId}}</p>
			<p :class="{lightText: isInUserSet}" class="name">{{pen.name}}</p>
		</div>
	</div>
</template>

<script>

export default {
	props: ["pen", "isInUserSet"],
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
		},
		click() {
			this.$emit("penClicked", this.pen.colorId)
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

		swatchStyle() {
			let c = this.pen.rgb
			let ctext = c[0] + ',' + c[1] + ',' + c[2] + ','
			let style = ""
			if (this.hovering) {
				// return 'background: red;'
				style += 'background: rgba(' + ctext + ' .8);'
			} else {
				style += 'background: rgba(' + ctext + ' 1);'
			}
			return style;
			// return 'background: ' + this.hexColor + ";"
		},

	}
}

</script>

<style scoped>
	.swatch {
		transition: width .25s;
		height: 100%;
		width: 30%;
		position: absolute;
		transition: all .25s;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-right: 1px lightgray dashed;
	}
	
	.full {
		width: 100%;
	}
	
	.name {
		transition: all .25s ease-out;
		align-self: center;
		margin: 0 10px;
		font-weight: 300;
	}
	
	.colorId {
		text-align: center;
		color: white;
		text-shadow: 0 0 5px darkgray;
	}
	
	.pen {
		border: 1px solid darkgray;
		border-radius: 5px;
		overflow: hidden;
		position: relative;
	}
	
	.penInfo {
		position: absolute;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 3fr 7fr;
		align-items: center;
	}
	
	.lightText {
	
		color: white;
		text-shadow: 0 0 5px darkgray;
	}
</style>
