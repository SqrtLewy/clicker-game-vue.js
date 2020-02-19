<script>
export default {
  name: 'reload',
  data() {
    return {
    };
	},
	mounted: function(){
        this.Reload()
	},
	methods: {
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