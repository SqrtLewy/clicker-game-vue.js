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
		<br />
		<button v-on:click="HirePeople">Hire people [50 potatoes]</button><button class="info" v-on:click="Info1">?</button>
		<br />
		<button v-on:click="UpgradeHoe">Upgrade your hoe! [1000 potatoes]</button><button class="info" v-on:click="Info2">?</button>
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
		employessStrength: 0,
    };
	},
	mounted: function(){
        this.Reload()
	},
	methods: {
		CollectPotatoe: function(){
			this.potatoes += this.clickstrength;
		},
		HirePeople: function(){
			if(this.potatoes>=50){
			this.employees++;
			this.employessStrength+=0.1;
			this.potatoes-=50;
			}else{
			alert("You don't have enough potatoes! Come back to the field!");
			}
		},
		UpgradeHoe: function(){
			if(this.potatoes>=1000){
			this.clickstrength++;
			this.potatoes -= 1000;
			}else{
			alert("You don't have enough potatoes! Come back to the field!");
			}
		},
		Info1: function(){
			alert("One employee increases harvest by 0.1 potato per second.");
		},
		Info2: function(){
			alert("Each hoe improvement increases the click force by 1.");
		},
        Reload: function () {
            const self = this
            setInterval(function() {
				if(self.employees>0){
                self.potatoes = self.potatoes + self.employessStrength;
				}
            }, 1000);
		},
		}
	}
</script>

<style lang="scss" scoped>
.ClickerGame {
  width: 100%;
  height: 400px;
}
.clicker_left {
  background-color: #FFEFD5;
  border-radius: 35px;
  width: 48%;
  height: 60%;
  float: left;
}
.clicker_right {
  background-color: #FFEFD5;
  border-radius: 35px;
  width: 48%;
  height: 60%;
  float: right;
}
button {
  background-color: #FFD700;
  width: 250px;
  height: 30px;

  &:hover {
    background-color: #FFFF00;
  }
}
.info {
  width: 30px;
  height: 30px;
}
</style>
