function noMoneyNoHoney(){
	//TODO: Find out why the amount of honey in the hive is not increasing.
	//Bee Object
	var Bee = function (capacity, hive) {
		this.capacity = capacity;
		this.hive = hive;
	};

	Bee.prototype = {
		unloadPollen: function() {
			console.log('capacity ' + this.capacity);
			console.log('hive ' + this.hive);
			this.hive.addPollen;
		}
	};

	//Hive Object
	var Hive = function () {
		__proto__: Bee,
		this.pollen = 888;
	};

	Hive.prototype = {
		addPollen: function(pollen) {
			this.pollen += pollen;
		},
		getPollen: function() {
			console.log(this.pollen)
			return this.pollen;
		}
	};

	var bee1 = new Bee(11, 'firstHive');
	bee1.unloadPollen();

	var bee2 = new Bee(22, 'secondHive');
	bee2.unloadPollen();

	var newHive1 = new Hive();
	newHive1.getPollen()
};
noMoneyNoHoney();

