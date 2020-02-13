<template>
	<div class="ClickerGame">
	<a href="/"><img src="../assets/logo.png" alt="Potatoes time"></a> <br />
    <div class="clicker_left">
        <h2>Harvest</h2>

		<p>You have: {{ potatoes }} potatoes</p>
		<p>Your employees collect 0 potatoes per second.</p>
		<br />
		<button v-on:click="CollectPotatoe">Collect</button>
    </div>
	<div class="clicker_right">
        <h2>Your company</h2>

		<p>You have: {{ employees }} employees</p>
		<p>One employee increases harvest by 0.1 potato per second.</p>
		<br />
		<button v-on:click="HirePeople">Hire people [50 potatoes]</button>
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
		}
	}
  };
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
height:50%;
float:left;
}
.clicker_right{
background-color: #FFEFD5;
border-radius: 35px;
width:48%;
height:50%;
float:right;
}
button{
background-color: #FFD700;
width:200px;
height:30px;
}
button:hover{
background-color: #FFFF00;
}
</style>
