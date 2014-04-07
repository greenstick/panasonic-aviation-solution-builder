/*
Project: Solution Builder - First Iteration Demo
Client: Panasonic
File: interactive.js
By: Column Five Media, Inc.
Author: Ben Cordier
*/

var scenarioData = [
		{
			"solution": {
				"id": 1,
				"objectives": {
					"manage-cost": false,
					"generate-revenue": true,
					"brand-differentiation": true
				},
				"background": {
					"seamless-travel-experience": true,
					"customization": true,
					"innovation": true,
					"economic-product": false,
					"competitive-edge": false,
					"seamless-operation": false,
					"turnkey-solution": false,
					"ancillary-business": false,
					"baseline-product": false
				},
				"aircraftType": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": true,
					"wireless-streaming": true,
					"ecommerce": true,
					"hd": true,
					"third-party-apps": true,
					"ped-power": true,
					"overhead": false,
					"advertising": true,
					"survey": true,
					"games": true,
					"moving-map": true,
					"video-handset": true,
					"proactive-maintenance": true,
					"usage-statistics": true,
					"live-tv": false,
					"voice-sms": false,
					"technical-support": false,
					"web-email": false,
					"personalization": false
				},
				"mainProduct": "eX1",
				"description": "Most Advanced IFE Solution",
				"addons" : {
					"wireless-streaming": "eXW",
					"advertising": "OneMedia",
					"proactive-maintenance": "PTS",
					"usage-statistics": "PAXUS",
					"third-party-apps": "InFlight API"
				}
			}
		},
		{
			"solution": {
				"id": 2,
				"objectives": {
					"manage-cost": false,
					"generate-revenue": true,
					"brand-differentiation": true
				},
				"background": {
					"seamless-travel-experience": true,
					"customization": true,
					"innovation": true,
					"economic-product": false,
					"competitive-edge": false,
					"seamless-operation": false,
					"turnkey-solution": false,
					"ancillary-business": false,
					"baseline-product": false
				},
				"aircraftType": {
					"narrow-body": false,
					"wide-body": true
				},
				"features": {
					"avod": true,
					"wireless-streaming": false,
					"ecommerce": true,
					"hd": true,
					"third-party-apps": true,
					"ped-power": true,
					"overhead": false,
					"advertising": true,
					"survey": true,
					"games": true,
					"moving-map": true,
					"video-handset": true,
					"proactive-maintenance": false,
					"usage-statistics": true,
					"live-tv": true,
					"voice-sms": true,
					"technical-support": true,
					"web-email": true,
					"personalization": true
				},
				"mainProduct": "eX3",
				"description": "Most Advanced IFE Solution",
				"addons" : {
					"web-email": "eXConnect",
					"live-tv": "eXConnect",
					"personalization": "eXConnect",
					"live-tv": "eXTV",
					"voice-sms": "eXPhone",
					"advertising": "OneMedia",
					"technical-support": "PTS",
					"third-party-apps": "InFlight API",
					"moving-map": "Voyager 3D"
				}
			}
		},
		{
			"solution": {
				"id": 3,
				"objectives": {
					"manage-cost": true,
					"generate-revenue": true,
					"brand-differentiation": false
				},
				"background": {
					"seamless-travel-experience": false,
					"customization": false,
					"innovation": false,
					"economic-product": true,
					"competitive-edge": false,
					"seamless-operation": false,
					"turnkey-solution": false,
					"ancillary-business": true,
					"baseline-product": false
				},
				"aircraftType": {
					"narrow-body": false,
					"wide-body": true
				},
				"features": {
					"avod": true,
					"wireless-streaming": false,
					"ecommerce": true,
					"hd": true,
					"third-party-apps": true,
					"ped-power": false,
					"overhead": false,
					"advertising": true,
					"survey": false,
					"games": true,
					"moving-map": true,
					"video-handset": false,
					"proactive-maintenance": false,
					"usage-statistics": true,
					"live-tv": false,
					"voice-sms": false,
					"technical-support": false,
					"web-email": true,
					"personalization": false
				},
				"mainProduct": "eXLite",
				"description": "Lightest Seatback Solution",
				"addons" : {
					"web-email": "eXConnect",
					"advertising": "OneMedia",
					"usage-statistics": "PAXUS",
					"third-party-apps": "InFlight API",
					"moving-map": "Voyager 3D"
				}
			}
		},
		{
			"solution": {
				"id": 4,
				"objectives": {
					"manage-cost": true,
					"generate-revenue": false,
					"brand-differentiation": true
				},
				"background": {
					"seamless-travel-experience": false,
					"customization": false,
					"innovation": false,
					"economic-product": true,
					"competitive-edge": true,
					"seamless-operation": false,
					"turnkey-solution": false,
					"ancillary-business": false,
					"baseline-product": false
				},
				"aircraftType": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": true,
					"wireless-streaming": true,
					"ecommerce": true,
					"hd": false,
					"third-party-apps": false,
					"ped-power": false,
					"overhead": true,
					"advertising": true,
					"survey": false,
					"games": true,
					"moving-map": true,
					"video-handset": false,
					"proactive-maintenance": false,
					"usage-statistics": false,
					"live-tv": false,
					"voice-sms": false,
					"technical-support": false,
					"web-email": false,
					"personalization": false
				},
				"mainProduct": "eXO",
				"description": "New Smart Overhead",
				"addons" : {
					"avod": "+Monitors",
					"wireless-streaming": "WAPs",
					"advertising": "OneMedia",
					"moving-map": "Voyager 3D"
				}
			}
		},
		{
			"solution": {
				"id": 5,
				"objectives": {
					"manage-cost": true,
					"generate-revenue": true,
					"brand-differentiation": false
				},
				"background": {
					"seamless-travel-experience": false,
					"customization": false,
					"innovation": false,
					"economic-product": false,
					"competitive-edge": false,
					"seamless-operation": false,
					"turnkey-solution": false,
					"ancillary-business": true,
					"baseline-product": true
				},
				"aircraftType": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": false,
					"wireless-streaming": true,
					"ecommerce": false,
					"hd": true,
					"third-party-apps": false,
					"ped-power": false,
					"overhead": false,
					"advertising": false,
					"survey": true,
					"games": true,
					"moving-map": false,
					"video-handset": false,
					"proactive-maintenance": false,
					"usage-statistics": false,
					"live-tv": false,
					"voice-sms": false,
					"technical-support": false,
					"web-email": true,
					"personalization": false
				},
				"mainProduct": "eXW",
				"description": "Mobile Device Experience",
				"addons" : {
					"web-email": "eXConnect"
				}
			}
		},
		{
			"solution": {
				"id": 6,
				"objectives": {
					"manage-cost": true,
					"generate-revenue": false,
					"brand-differentiation": true
				},
				"background": {
					"seamless-travel-experience": false,
					"customization": false,
					"innovation": false,
					"economic-product": false,
					"competitive-edge": false,
					"seamless-operation": false,
					"turnkey-solution": true,
					"ancillary-business": false,
					"baseline-product": true
				},
				"aircraftType": {
					"narrow-body": false,
					"wide-body": true
				},
				"features": {
					"avod": false,
					"wireless-streaming": false,
					"ecommerce": true,
					"hd": false,
					"third-party-apps": false,
					"ped-power": false,
					"overhead": false,
					"advertising": true,
					"survey": false,
					"games": false,
					"moving-map": false,
					"video-handset": false,
					"proactive-maintenance": false,
					"usage-statistics": false,
					"live-tv": true,
					"voice-sms": true,
					"technical-support": false,
					"web-email": true,
					"personalization": false
				},
				"mainProduct": "eXConnect",
				"description": "Some Product Description",
				"addons" : {
					"live-tv": "eXTV",
					"voice-sms": "eXPhone",
					"advertising": "OneMedia"
				}
			}
		}];

var Interactive = function (slide, data) {
	var self = this;
		self.slide = slide,
		self.index = 0,
		self.s2Data = [],
		self.s3Data = [],
		self.s4Data = [],
		self.solution = [],
		self.main = ko.observable(),
		self.description = ko.observable(),
		self.addons = ko.observableArray(),
		self.solutionsData = data,
		self.illusionData = {},
		self.s2Inactive = [],
		self.s3Inactive = [],
		self.s4Inactive = [],
		self.s5Inactive = [];
};

/*
Navigation Methods
*/

//Initialize Interactive
Interactive.prototype.init = function () {
	$(this.slide).first().addClass('active');
	self.index = 1;
};
//Direct Navigation Function--No Longer Being Used
Interactive.prototype.to = function (to, callback) {
	var selected = $('#' + to);

	//Set Active & Index
	$('.active').removeClass('active');
	selected.addClass('active');
	this.index = selected.data().index;
	//If Callback Function Exists, Execute It
	typeof callback == 'function' ? callback.apply(this) : void(0);
};
// Next Slide
Interactive.prototype.next = function (callback) {
	//Set Active & Increment Index
	$('.active').removeClass('active').next(this.slide).addClass('active');
	this.index++;
	//If Callback Function Exists, Execute It
	typeof callback == 'function' ? callback.apply(this) : void(0);
};
// Previous Slide
Interactive.prototype.prev = function (callback) {
	//Set Active & Decrement Index
	$('.active').removeClass('active').prev(this.slide).addClass('active');
	this.index--;
	//If Callback Function Exists, Execute It
	typeof callback == 'function' ? callback.apply(this) : void(0);
};
// Clear Data & Restart Interactive
Interactive.prototype.restart = function (callback) {
	this.s2Data = [];
	this.s3Data = [];
	this.s4Data = [];
	this.solution = [];
	this.main(null);
	this.addons([]);
	//Reset Tiles
	$('.selected').removeClass('selected');
	$('.inactive').removeClass('inactive');
	$('.active').removeClass('active');
	$(this.slide).first().addClass('active');
	self.index = 1;
	//If Callback Function Exists, Execute It
	typeof callback == 'function' ? callback.apply(this) : void(0);
};

/*
UI Manipulation Methods
*/

//Fairly Nasty Group of Conditionals; Allows User to Select Tiles on Slides and Provides UI Feedback.
//An Optional Rule Object Parameter Can Be Passed To Specify A Limit to The Number of Tiles That Can Be Selected.
Interactive.prototype.select = function (id, parent, rule, cache) {
	var element = $('#' + id);
	//rule is integer - determines how many selected items are allowed
	if (rule && typeof rule === 'number') {
		if (element.hasClass('inactive')) {
			return
		}
		//toggle class - keeps track of selectable tiles
		else if (element.hasClass('selected')) {
			if (cache) {
				$('#' + parent + ' .button').addClass('inactive');
				for (var i = 0; i < cache.length; i++) {
					$('#' + cache[i]).removeClass('inactive');
				};
			} else {
				$('#' + parent + ' .button.inactive').removeClass('inactive');
			};
			element.toggleClass('selected');
		}
		//if limit rule has been reached, render other buttons inactive
		else if ($('#' + parent + ' .selected').length > rule - 1) {
			$('#' + parent + ' .button:not(.selected)').addClass('inactive');
			return
		} 
		//else add selected and check to see if limit rule has been reached, if so render other buttons inactive
		else {
			element.addClass('selected');
			if ($('#' + parent + ' .selected').length > rule - 1) {
				$('#' + parent + ' .button:not(.selected)').addClass('inactive');
			};
		};
	}
	//No rule, toggle class
	else {
		element.toggleClass('selected');
	};
};

//Greys Out Tiles That Should Have no Input
//Accepts array (arr of strings), data (arr of obj), location (str), 
Interactive.prototype.renderInactive = function (slide, data, location) {
	var array = [];
	for (var i = 0; i < data.length; i++) {
		$.each(data[i].solution[location], function (k, v) {
			if (v === true) {
				(array.indexOf(k) === -1) ? array.push(k) : void(0);
			};
		});
	};
	//This wasn't planned and is inefficient - but a quick hack
	//that lets me not go in and redo all the CSS
	$('#' + slide + ' .button').addClass('inactive');
	for (var i = 0; i < array.length; i++) {
		$('#' + array[i]).removeClass('inactive');
	};
	return array;
};
//Resets Inactive Tiles to Their Active State
Interactive.prototype.resetInactive = function (slide) {
	$('#' + slide + ' .inactive').removeClass('inactive');
};

/*
Data Processing Methods
*/

Interactive.prototype.buildArray = function (slide, array, parent) {
	if (parent === false) {
			$('#' + slide + ' .selected').each(function (k, v) {
			array.push(v.id);
		});
	} else {	
		$('#' + slide + ' .selected').parent().each(function (k, v) {
			if (array.indexOf($(v).attr("id")) < 0) {
				array.push($(v).attr("id"));
			};
		});
	};
	return array;
};

//Data Filtering
// Accepts slide (str), data location (str - related to where in the data object to search), limit (int - limits the number of selections)
// array (arr - user selection array) and data (data object of possible solutions) 
Interactive.prototype.filterData = function (slide, location, limit, array, data) {
	var data = data || this.solutionsData, patterns = [], solutions = []; 
	for (var i = 0; i < data.length; i++) {
		var valid = [];
		for (var j = 0; j < array.length; j++) {
			if (data[i].solution[location][array[j]] === true) {
				valid.push(data[i].solution[location][array[j]]);
			};
		};
		if (valid.length > limit - 1) {
			solutions.push(data[i]);
		};
	};
	return solutions;
};

Interactive.prototype.getAddons = function (array, data) {
	var location = 'addons', tempArr = [], newArr = [];
	for (var i = 0; i < array.length; i++) {
		$.each(data[0].solution[location], function (k, v) {
			if (array[i] == k) {
				if (tempArr.indexOf(v) < 0) {
					tempArr.push(v);
				};
			};
		});
	};
	//Iterate over tempArr values and set each as a name object
	for (var i = 0; i < tempArr.length; i++) {
		newArr.push({"name": tempArr[i]});
	}
	console.log(newArr);
	return newArr;
};

//Instantiation & Initialization
var interactive = new Interactive('.slide', scenarioData);
	interactive.init();
	ko.applyBindings(interactive);

/*
General Navigation Event Bindings
*/

//First Slide
$('.getStarted').on("click", function () {
	interactive.next();
});
//Restart Interactive
$('.restart').on("click", function () {
	interactive.restart();
});

/*
Data Processing Event Bindings - Next Slide
	Because this interactive has some interesting delegations going on, elements are bound by their parent slide to their slide-specific
	data array. This array is then used to determine which possibilities/features to render as selectable. 
*/

//Slide 2 Next
$('#s2 .next, #s2 .toBackground').on("click", function (e) {
	var array = interactive.buildArray('s2', interactive.s2Data, false),
		limit = 2;
		interactive.s2Data = interactive.filterData('s2', 'objectives', limit, array);
		interactive.s3Inactive = interactive.renderInactive('s3', interactive.s2Data, 'background');
		interactive.next();
});
//Slide 3 Next
$('#s3 .next, #s3 .toAircraft-Type').on("click", function (e) {
	var array = interactive.buildArray('s3', interactive.s3Data, false),
		limit = 2;
		//Second screen should not affect outcome
		// interactive.s3Data = interactive.filterData('s3', 'background', limit, array, interactive.s2Data);
		interactive.next();
});
//Slide 4 Next
$('#s4 .next, #s4 .toFeatures').on("click", function (e) {
	var array = interactive.buildArray('s4', interactive.s4Data, false),
		limit = 1;
		//Handing in S2 Data (S3 Data undefined because no input to S3)
		interactive.s4Data = interactive.filterData('s4', 'aircraftType', 1, array, interactive.s2Data);
		interactive.s5Inactive = interactive.renderInactive('s5', interactive.s4Data, 'features')
		interactive.next();
});
//Slide 5 Next
$('#s5 .next, #s5 .toSolution').on("click", function (e) {
	var array = interactive.buildArray('s5', interactive.solution, false),
		limit = null;
		interactive.solution = interactive.filterData('s5', 'features', null, array, interactive.s4Data);
		//Set Main Solution Observable & Description Observable
		interactive.main(interactive.solution[0].solution.mainProduct);
		interactive.description(interactive.solution[0].solution.description);
		//Get Addons & Push into Observable Array
		interactive.addons(interactive.getAddons(array, interactive.solution));
		interactive.next();
});

/*
Event Bindings - Previous Slide
	Clear the data from the current slide's data array before going back to the previous slide.
*/

//Slide 2 Previous
$('#s2 .prev').on("click", function (e) {
	interactive.s2Data = [];
	$('#s2 .button').removeClass('selected').removeClass('inactive');
	interactive.prev();
});
//Slide 3 Previous
$('#s3 .prev, #s3 .toObjective').on("click", function (e) {
	interactive.s3Data = [];
	$('#s3 .button').removeClass('selected').removeClass('inactive');
	interactive.prev();
});
//Slide 4 Previous
$('#s4 .prev, #s4 .toBackground').on("click", function (e) {
	interactive.s4Data = [];
	$('#s4 .button').removeClass('selected').removeClass('inactive');
	interactive.prev();
});
//Slide 5 Previous
$('#s5 .prev, #s5 .toAircraft-Type').on("click", function (e) {
	interactive.solution = [];
	$('#s5 .button').removeClass('selected').removeClass('inactive');
	interactive.prev();
});
//Slide 6 Previous
$('#s6 .prev, #s6 .toFeatures').on("click", function (e) {
	//Reset Solution Data
	interactive.solution = [];
	interactive.main();
	interactive.addons([]);
	interactive.prev();
});

/*
User Selection Event Bindings - Slide Specific
*/

//Access Slide 2 Inputs
$('#s2 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, "s2", 2);
});
//Access Slide 3 Inputs
$('#s3 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, "s3", 2, interactive.s3Inactive);
});
//Access Slide 4 Inputs
$('#s4 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, "s4", 1);
});
//Access Slide 5 Inputs
$('#s5 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, "s5", null, interactive.s5Inactive);
});

