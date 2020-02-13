<template>
	<div class="ClickerGame">
	<a href="/"><img src="../assets/logo.png" alt="Potatoes time"></a> <br />
    <div class="clicker_left">
        <h2>Harvest</h2>

		<p>You have: {{ potatoes }} potatoes</p>
		<p>Your employees collect {{ employessStrength }} potatoes per second.</p>
		<br />
		<button v-on:click="CollectPotatoe">Collect</button>
    </div>
	<div class="clicker_right">
        <h2>Your company</h2>

		<p>You have: {{ employees }} employees</p>
		<p>One employee increases harvest by 0.1 potato per second. <br /> Each hoe improvement increases the click force by 1.</p>
		<br />
		<button v-on:click="HirePeople">Hire people [50 potatoes]</button>
		<br />
		<button v-on:click="UpgradeHoe">Upgrade your hoe! [1000 potatoes]</button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'todoapp',
  data() {
    return {
		potatoes: 0,
		clickstrength: 1,
		employees: 0,
		employessStrength: 0 * 0.1,
    };
	},
	methods: {
		CollectPotatoe: function(){
			this.potatoes += 1*this.clickstrength;
		},
		HirePeople: function(){
			if(this.potatoes>=50){
			this.employees++;
			this.potatoes-=50;
			}else{
			alert("You don't have enough potatoes! Come back to the field!");
			}
		},
		UpgradeHoe: function(){
			if(this.potatoes>=1000){
			this.clickstrenght++;
			}else{
			alert("You don't have enough potatoes! Come back to the field!");
			}
		},
		Reload(){
			window.setInterval(function(){
			this.potatoes += 10;
			}, 1000);
		},
		}
	}
</script>

<style lang="scss" scoped>
.ClickerGame{
width:100%;
height:400px;
}
.clicker_left{
background-color: #FFEFD5;
border-radius: 35px;
width:48%;
height:60%;
float:left;
}
.clicker_right{
background-color: #FFEFD5;
border-radius: 35px;
width:48%;
height:60%;
float:right;
}
button{
background-color: #FFD700;
width:250px;
height:30px;
}
button:hover{
background-color: #FFFF00;
}
</style>
