<template>
	<div class="ClickerGame">
	<a href="/"><img src="../assets/logo.png" alt="Potatoes time"></a> <br /> <br />
    <div class="clicker_left">
        <h2>Harvest</h2>

		<p>You have: {{ potatoes.toFixed([2]) }} potatoes</p>
		<p>Your employees collect {{ employessStrength.toFixed([2]) }} potatoes per second.</p>
		<br />
		<button v-on:click="CollectPotatoe">Collect</button>
    </div>
	<div class="clicker_right">
        <h2>Your company</h2>

		<p>You have: {{ employees }} employees</p>
		<br />
		<button v-on:click="HirePeople">Hire people [50 potatoes]</button> <button class="info" v-on:click="Info1">?</button>
		<br /> <br />
		<button v-on:click="UpgradeHoe">Upgrade your hoe! [1000 potatoes]</button> <button class="info" v-on:click="Info2">?</button>
    </div>
	</div>
</template>

<script>
export default {
  name: 'todoapp',
  data() {
    return {
		potatoes: JSON.parse(localStorage.getItem('potatoes')) || 0,
		clickstrength: JSON.parse(localStorage.getItem('clickstrength')) || 1,
		employees: JSON.parse(localStorage.getItem('employees')) || 0,
		employessStrength: JSON.parse(localStorage.getItem('employessStrength')) || 0,
    };
	},
	watch: {
		potatoes: {
			deep: true,
			handler() {
			localStorage.setItem('potatoes', JSON.stringify(this.potatoes));
		}
	},
		clickstrength: {
			deep: true,
			handler() {
			localStorage.setItem('clickstrength', JSON.stringify(this.clickstrength));
		}
	},
		employees: {
			deep: true,
			handler() {
			localStorage.setItem('employees', JSON.stringify(this.employees));
		}
	},
		employessStrength: {
			deep: true,
			handler() {
			localStorage.setItem('employessStrength', JSON.stringify(this.employessStrength));
		}
	},
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
			this.employessStrength+=0.10;
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
  border: 2px solid #4CAF50;
  transition-duration: 0.4s;

  &:hover {
    background-color: #4CAF50;
	border: 2px solid #FFD700;
	box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75);
  }
}
.info {
  width: 30px;
  height: 30px;
  background-color: gray;
  
  &:hover{
	background-color: darkgrey;
	box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.75);
  }
}
</style>