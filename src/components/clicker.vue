<template>
	<div class="ClickerGame">
    <div class="clicker_left">
        <h2>Game</h2>

		<p>You have: {{ potatoes }} potatoes</p>
		<br />
		<button v-on:click="CollectPotatoe">Collect</button>
    </div>
	<div class="clicker_right">
        <h2>Shop</h2>

		<p>You have: {{ upgrades }} upgrades</p>
		<br />
		<button v-on:click="BuyUpgrade">Buy upgrade</button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'todoapp',
  data() {
    return {
		potatoes: 0,
		upgrades: 0,
    };
	},
	methods: {
		CollectPotatoe: function(){
			this.potatoes++;
		},
		BuyUpgrade: function(){
			this.upgrades++;
			this.potatoes--;
		}
	}
  };
</script>

<style lang="scss" scoped>
.ClickerGame{
width:100%;
height:300px;
}
.clicker_left{
background-color: red;
width:50%;
height:50%;
float:left;
}
.clicker_right{
background-color: lime;
width:50%;
height:50%;
float:left;
}
</style>
