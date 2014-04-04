/*
Project: Solution Builder - First Iteration Demo
Client: Panasonic
File: interactive.js
By: Column Five Media, Inc.
Author: Ben Cordier
*/

// var products = [
// 	{
// 		"product": {
// 			"name": "eX1",
// 			"goals": {
// 				"manage-cost": false,
// 				"generate-revenue": true,
// 				"brand-differentiation": true
// 			},
// 			"aircraft-type": {
// 				"narrowbody": true,
// 				"widebody": false
// 			},
// 			"background": {
// 				"premium": true,
// 				"mid-range": false,
// 				"value": false
// 			},
// 			"features": {
// 				"AVOD": true,
// 				"overhead": false,
// 				"wireless-streaming": false,
// 				"ecommerce": true,
// 				"3rd-party-apps": true, 
// 				"ped-power": true,
// 				"advertising": true,
// 				"survey": true,
// 				"second-screen": false,
// 				"video-handset": true,
// 				"games": true,
// 				"hd": true,
// 				"web/email": false,
// 				"live-tv": false,
// 				"personalization": false,
// 				"voice": false,
// 				"proactive-maintenance": true,
// 				"technical-support": true
// 			}

// 		}
// 	},
// 	{
// 		"product": {
// 			"name": "eX3",
// 			"goals": {
// 				"manage-cost": false,
// 				"generate-revenue": true,
// 				"brand-differentiation": true
// 			},
// 			"aircraft-type": {
// 				"narrowbody": false,
// 				"widebody": true
// 			},
// 			"background": {
// 				"premium": true,
// 				"mid-range": false,
// 				"value": false
// 			},
// 			"features": {
// 				"AVOD": true,
// 				"overhead": false,
// 				"wireless-streaming": false,
// 				"ecommerce": true,
// 				"3rd-party-apps": true, 
// 				"ped-power": true,
// 				"advertising": true,
// 				"survey": true,
// 				"second-screen": false,
// 				"video-handset": true,
// 				"games": true,
// 				"hd": true,
// 				"web/email": false,
// 				"live-tv": false,
// 				"personalization": false,
// 				"voice": false,
// 				"proactive-maintenance": true,
// 				"technical-support": true
// 			}
// 		}
// 	},
// 	{
// 		"product": {
// 			"name": "eXLite",
// 			"goals": {
// 				"manage-cost": true,
// 				"generate-revenue": true,
// 				"brand-differentiation": true
// 			},
// 			"aircraft-type": {
// 				"narrowbody": true,
// 				"widebody": true
// 			},
// 			"background": {
// 				"premium": false,
// 				"mid-range": true,
// 				"value": false
// 			},
// 			"features": {
// 				"AVOD": true,
// 				"overhead": false,
// 				"wireless-streaming": false,
// 				"ecommerce": true,
// 				"3rd-party-apps": true, 
// 				"ped-power": false,
// 				"advertising": true,
// 				"survey": true,
// 				"second-screen": false,
// 				"video-handset": false,
// 				"games": true,
// 				"hd": true,
// 				"web/email": false,
// 				"live-tv": false,
// 				"personalization": false,
// 				"voice": false,
// 				"proactive-maintenance": true,
// 				"technical-support": true
// 			}
// 		}
// 	},
// 	{
// 		"product": {
// 			"name": "eXO",
// 			"goals": {
// 				"manage-cost": true,
// 				"generate-revenue": true,
// 				"brand-differentiation": true
// 			},
// 			"aircraft-type": {
// 				"narrowbody": true,
// 				"widebody": false
// 			},
// 			"background": {
// 				"premium": false,
// 				"mid-range": true,
// 				"value": false
// 			},
// 			"features": {
// 				"AVOD": false,
// 				"overhead": true,
// 				"wireless-streaming": false,
// 				"ecommerce": true,
// 				"3rd-party-apps": true, 
// 				"ped-power": false,
// 				"advertising": true,
// 				"survey": false,
// 				"second-screen": false,
// 				"video-handset": false,
// 				"games": false,
// 				"hd": true,
// 				"web/email": false,
// 				"live-tv": false,
// 				"personalization": false,
// 				"voice": false,
// 				"proactive-maintenance": true,
// 				"technical-support": true
// 			}
// 		}
// 	},
// 	{
// 		"product": {
// 			"name": "eXW",
// 			"goals": {
// 				"manage-cost": true,
// 				"generate-revenue": true,
// 				"brand-differentiation": true
// 			},
// 			"aircraft-type": {
// 				"narrowbody": true,
// 				"widebody": true
// 			},
// 			"background": {
// 				"premium": false,
// 				"mid-range": false,
// 				"value": true
// 			},
// 			"features": {
// 				"AVOD": true,
// 				"overhead": false,
// 				"wireless-streaming": true,
// 				"ecommerce": true,
// 				"3rd-party-apps": false, 
// 				"ped-power": false,
// 				"advertising": true,
// 				"survey": true,
// 				"second-screen": true,
// 				"video-handset": false,
// 				"games": true,
// 				"hd": true,
// 				"web/email": false,
// 				"live-tv": false,
// 				"personalization": false,
// 				"voice": false,
// 				"proactive-maintenance": true,
// 				"technical-support": true
// 			}
// 		}
// 	},
// 	{
// 		"product": {
// 			"name": "eXConnect",
// 			"goals": {
// 				"manage-cost": true,
// 				"generate-revenue": true,
// 				"brand-differentiation": true
// 			},
// 			"aircraft-type": {
// 				"narrowbody": true,
// 				"widebody": true
// 			},
// 			"background": {
// 				"premium": false,
// 				"mid-range": false,
// 				"value": true
// 			},
// 			"features": {
// 				"AVOD": false,
// 				"overhead": false,
// 				"wireless-streaming": false,
// 				"ecommerce": false,
// 				"3rd-party-apps": false, 
// 				"ped-power": false,
// 				"advertising": false,
// 				"survey": false,
// 				"second-screen": false,
// 				"video-handset": false,
// 				"games": false,
// 				"hd": false,
// 				"web/email": true,
// 				"live-tv": true,
// 				"personalization": true,
// 				"voice": true,
// 				"proactive-maintenance": true,
// 				"technical-support": true
// 			}
// 		}
// 	}
// ];
// var combinations = [
// 	{
// 		"product": "eX1",
// 		"addons": [
// 			{
// 				"addon": {
// 					"name": "eXW",
// 					"goals": {
// 						"manage-cost": false,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": false
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": true,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": true,
// 						"video-handset": true,
// 						"games": true,
// 						"hd": true,
// 						"web/email": false,
// 						"live-tv": false,
// 						"personalization": false,
// 						"voice": false,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "eXConnect",
// 					"goals": {
// 						"manage-cost": false,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": false
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": false,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": true,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": false,
// 						"video-handset": true,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "exW/eXConnect",
// 					"goals": {
// 						"manage-cost": false,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": false
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": true,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": false,
// 						"video-handset": true,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			}
// 		]
// 	},
// 	{
// 		"product": "eX3",
// 		"addons": [
// 			{
// 				"addon": {
// 					"name": "eXW",
// 					"goals": {
// 						"manage-cost": false,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": false,
// 						"widebody": true
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": true,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": true,
// 						"video-handset": true,
// 						"games": true,
// 						"hd": true,
// 						"web/email": false,
// 						"live-tv": false,
// 						"personalization": false,
// 						"voice": false,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "eXConnect",
// 					"goals": {
// 						"manage-cost": false,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": false,
// 						"widebody": true
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": false,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": true,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": false,
// 						"video-handset": true,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "exW/eXConnect",
// 					"goals": {
// 						"manage-cost": false,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": false,
// 						"widebody": true
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": true,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": false,
// 						"video-handset": true,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			}
// 		]
// 	},
// 	{
// 		"product": "eXLite",
// 		"addons": [
// 			{
// 				"addon": {
// 					"name": "eXW",
// 					"goals": {
// 						"manage-cost": true,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": true
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": false,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": true,
// 						"video-handset": false,
// 						"games": true,
// 						"hd": true,
// 						"web/email": false,
// 						"live-tv": false,
// 						"personalization": false,
// 						"voice": false,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "eXConnect",
// 					"goals": {
// 						"manage-cost": true,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": true
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": false,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": false,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": false,
// 						"video-handset": false,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "exW/eXConnect",
// 					"goals": {
// 						"manage-cost": true,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": true
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": false,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": false,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": true,
// 						"video-handset": false,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			}
// 		]
// 	},
// 	{
// 		"product": "eXO",
// 		"addons": [
// 			{
// 				"addon": {
// 					"name": "eXW",
// 					"goals": {
// 						"manage-cost": true,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": false
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": true,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": false,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": true,
// 						"video-handset": false,
// 						"games": true,
// 						"hd": true,
// 						"web/email": false,
// 						"live-tv": false,
// 						"personalization": false,
// 						"voice": false,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "eXConnect",
// 					"goals": {
// 						"manage-cost": true,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": false
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": false,
// 						"overhead": true,
// 						"wireless-streaming": false,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": false,
// 						"advertising": true,
// 						"survey": false,
// 						"second-screen": false,
// 						"video-handset": false,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			},
// 			{
// 				"addon": {
// 					"name": "exW/eXConnect",
// 					"goals": {
// 						"manage-cost": true,
// 						"generate-revenue": true,
// 						"brand-differentiation": true
// 					},
// 					"aircraft-type": {
// 						"narrowbody": true,
// 						"widebody": false
// 					},
// 					"background": {
// 						"premium": true,
// 						"mid-range": false,
// 						"value": false
// 					},
// 					"features": {
// 						"AVOD": true,
// 						"overhead": true,
// 						"wireless-streaming": true,
// 						"ecommerce": true,
// 						"3rd-party-apps": true, 
// 						"ped-power": false,
// 						"advertising": true,
// 						"survey": true,
// 						"second-screen": true,
// 						"video-handset": false,
// 						"games": true,
// 						"hd": true,
// 						"web/email": true,
// 						"live-tv": true,
// 						"personalization": true,
// 						"voice": true,
// 						"proactive-maintenance": true,
// 						"technical-support": true
// 					}
// 				} 
// 			}
// 		]
// 	}
// ];

// /* 
// Fixed Position Element Prototype
// 	@params - parent element (str)
// 	@params - fixed element (str)
// */

// var FixedElement = function (parent, element) {
// 	var self = this;
// 		self.parent = parent,
// 		self.element = element;

// 				// Animate Element Position
// 		self._animate = function (args) {
// 			var selector = args.selector,
// 				duration = args.duration, 
// 				animation = {};
// 				animation[args.attr] = args.value;
// 				return $(selector).stop().animate(animation, duration);
// 		};
// 		// Style Element
// 		self._style = function (args) {
// 			var selector = args.selector,
// 				duration = args.duration,
// 				animation = {};
// 				animation[args.attr] = args.value;
// 				return $(selector).css(animation, duration);
// 		};
// };

// // Init Fixed Element
// FixedElement.prototype.init = function () {
// 	this.position(null);
// };

// // Centers Fixed Element to Parent - Optional Position to Set to & Callback
// // If Not Setting Position Explicitly, Hand In Null
// FixedElement.prototype.position = function (left, callback) {
// 	var left = (left !== null) ? left : $(this.parent).css("margin-left");
// 		$(this.element).css("left", left);
// 	//If Callback Function Exists, Execute it
// 	typeof callback == 'function' ? callback.apply(this) : void(0);
// };
// // Fades In Element
// FixedElement.prototype.fadein = function (duration, callback) {
// 	$(this.element).fadeIn(duration);
// 	//If Callback Function Exists, Execute it
// 	typeof callback == 'function' ? callback.apply(this) : void(0);
// };
// // Fade Out Element
// FixedElement.prototype.fadeout = function (duration, callback) {
// 	$(this.element).fadeOut(duration);
// 	//If Callback Function Exists, Execute it
// 	typeof callback == 'function' ? callback.apply(this) : void(0);
// };

// /*
// Interactive Prototype
// 	@params - wrapper element (str)
// 	@params - view element (str)
// 	@params - slide element (str)
// 	@params - header element (str)
// 	@params - section parent element (str)
// */

// var Interactive = function (wrapper, view, slide, header, sections) {
// 	var self = this;
// 		self.index = 0,
// 		self.wrapper = wrapper,
// 		self.view = view,
// 		self.slide = slide,
// 		self.header = header,
// 		self.dynamicHeader = new FixedElement(self.wrapper, self.header),
// 		self.sections = sections;

// 		// Loop Through Sections Array and Instantiate New FixedElement For Each
// 		self._initSections = function () {
// 			var sections = $(self.sections).children();
// 			$.each(sections, function (k, v) {
// 				self[v.id] = new FixedElement(self.wrapper, '#' + v.id);
// 				console.log(self[v.id]);
// 			});
// 		};
// 		//Update Header Image
// 		self._updateHeader = function (slide) {
// 			var data = $(slide + '.active').data().sectionname;
// 				typeof data !== undefined || typeof data !== 'splash' ? $(self.header).css("background", "url(img/" + data + ".svg)") : void(0);
// 				console.log(data);
// 		};
// 		//Update Section
// 		self._updateSection = function (slide) {
// 			var data = $(slide + '.active').data().sectionname;
// 			typeof data !== undefined || typeof data !== 'splash' ? $('#' + data).css("background-color", "grey") : void(0);
// 		};

// };

// /*
// Interactive Methods
// */

// // Init Interactive
// Interactive.prototype.init = function (slide) {
// 	$(this.slide).first().addClass('active');
// 	this._initSections();
// 	this.dynamicHeader.init();
// };

// // Next Slide
// Interactive.prototype.next = function (callback) {
// 	//Set Active Slide & Scroll To
// 	$('.active').removeClass('active').next(this.slide).addClass('active');
// 	$(this.view).scrollTo($(this.slide + '.active'), 600);
// 	//Update Header Text
// 	this._updateHeader(this.slide);
// 	this._updateSection(this.slide);
// 	this.index++;
// 	//If Callback Function Exists, Execute it
// 	typeof callback == 'function' ? callback.apply(this) : void(0);
// };
// // Previous Slide
// Interactive.prototype.prev = function (callback) {
// 	//Set Active Slide
// 	$('.active').removeClass('active').prev(this.slide).addClass('active');
// 	$(this.view).scrollTo($(this.slide + '.active'), 600);
// 	//Update Header Text
// 	this._updateHeader(this.slide);
// 	this._updateSection(this.slide);
// 	this.index--;
// 	//If Callback Function Exists, Execute it
// 	typeof callback == 'function' ? callback.apply(this) : void(0);
// };

// /*
// Instantiate & Initialize Interactive
// */

// var interactive = new Interactive('.slide');
// 	interactive.init();

// /*
// Event Bindings
// */
// // $(window).resize(function () {
// // 	interactive.dynamicHeader.position(null);
// // });
// $('.slide').on("click", function () {
// 	interactive.next();
// 	interactive.index > 0 ? interactive.dynamicHeader.fadein(1000) : void(0);
// });
// $('.prev').on("click", function () {
// 	interactive.prev();
// 	interactive.index > 0 ? interactive.dynamicHeader.fadein(1000) : void(0);
// });

var solutionData = [
		{
			"solution": {
				"id": 1,
				"objectives": {
					"manage-cost": false,
					"generate-revenue": true,
					"brand-differentiation": true
				},
				"background": {
					"premium": true,
					"mid-range": false,
					"value": false
				},
				"aircraft-type": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": true,
					"wireless-streaming": true,
					"ecommerce": true,
					"hd": true,
					"third-pary-apps": true,
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
				"main-product": "eX1",
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
					"premium": true,
					"mid-range": false,
					"value": false
				},
				"aircraft-type": {
					"narrow-body": false,
					"wide-body": true
				},
				"features": {
					"avod": true,
					"wireless-streaming": false,
					"ecommerce": true,
					"hd": true,
					"third-pary-apps": true,
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
				"main-product": "eX3",
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
					"premium": false,
					"mid-range": true,
					"value": false
				},
				"aircraft-type": {
					"narrow-body": false,
					"wide-body": true
				},
				"features": {
					"avod": true,
					"wireless-streaming": false,
					"ecommerce": true,
					"hd": true,
					"third-pary-apps": true,
					"ped-power": false,
					"overhead": false,
					"advertising": true,
					"survey": false,
					"games": true,
					"moving-map": true,
					"video-handset": false,
					"proactive-maintenance": true,
					"usage-statistics": true,
					"live-tv": false,
					"voice-sms": false,
					"technical-support": false,
					"web-email": false,
					"personalization": false
				},
				"main-product": "eXLite",
			}
		},
		{
			"solution": {
				"id": 4,
				"objectives": {
					"manage-cost": true,
					"generate-revenue": true,
					"brand-differentiation": false
				},
				"background": {
					"premium": true,
					"mid-range": false,
					"value": false
				},
				"aircraft-type": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": true,
					"wireless-streaming": true,
					"ecommerce": true,
					"hd": false,
					"third-pary-apps": false,
					"ped-power": false,
					"overhead": true,
					"advertising": true,
					"survey": false,
					"games": true,
					"moving-map": true,
					"video-handset": false,
					"proactive-maintenance": true,
					"usage-statistics": true,
					"live-tv": false,
					"voice-sms": false,
					"technical-support": false,
					"web-email": false,
					"personalization": false
				},
				"main-product": "eX1",
			}
		},
		{
			"solution": {
				"id": 5,
				"objectives": {
					"manage-cost": false,
					"generate-revenue": true,
					"brand-differentiation": true
				},
				"background": {
					"premium": true,
					"mid-range": false,
					"value": false
				},
				"aircraft-type": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": true,
					"wireless-streaming": true,
					"ecommerce": true,
					"hd": true,
					"third-pary-apps": true,
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
				"main-product": "eX1",
			}
		},
		{
			"solution": {
				"id": 6,
				"objectives": {
					"manage-cost": false,
					"generate-revenue": true,
					"brand-differentiation": true
				},
				"background": {
					"premium": true,
					"mid-range": false,
					"value": false
				},
				"aircraft-type": {
					"narrow-body": true,
					"wide-body": false
				},
				"features": {
					"avod": true,
					"wireless-streaming": true,
					"ecommerce": true,
					"hd": true,
					"third-pary-apps": true,
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
				"main-product": "eX1",
			}
		}];

var Interactive = function (slide, data) {
	var self = this;
		self.slide = slide,
		self.index = 0,
		self.m1Data = [],
		self.m2Data = [],
		self.m3Data = [],
		self.m4Data = [],
		self.solutionsData = data;
};

/*
Navigation Methods
*/

//Initialize Interactive
Interactive.prototype.init = function () {
	$(this.slide).first().addClass('active');
	self.index = 1;
};
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
// Restart Interactive
Interactive.prototype.restart = function (callback) {
	$(this.slide).first().addClass('active');
	self.index = 1;
	//If Callback Function Exists, Execute It
	typeof callback == 'function' ? callback.apply(this) : void(0);
};

/*
Utility Methods
*/

Interactive.prototype.select = function (id, rule) {
	var element = $('#' + id), rule;
	typeof rule == 'object' ? rule = rule.rule : void(0);
	//rule is integer - determines how many selected items are allowed
	if (typeof rule == 'int') {
		if (element.hasClass('inactive')) {
			return
		}
		//toggle class
		else if (element.hasClass('selected')) {
			element.removeClass('selected');
		}
		//check how if integer limit has been reached
		else if () {
			element.addClass('selected');
		}
		else {
			element.addClass('selected');
		};
	//rule is binary - either or selection with greyout - may not need this
	} else if (rule === 'binary') {

	}
};

Interactive.prototype.clearData = function (arr) {
	console.log(arr);
};

/*
Data Processing Methods
*/

//Update Module 1
Interactive.prototype.updateModule = function (slide, data) {
	var data = data || this.solutionsData;
	console.log(slide);
	console.log(data);
	// else {
	// 	for (var i = 0; i < arr.length; i++) {
	// 		if (arr[i] == id) {
	// 			test = id;
	// 		}
	// 	}
	// 	test === id ? arr.push(test) : false;
	// 	console.log(arr);
	// }
};

//Instantiation & Initialization
var interactive = new Interactive('.slide', solutionData);
	interactive.init();

/*
General Navigation Event Bindings
*/

//First Slide
$('.getStarted').on("click", function () {
	interactive.next();
});

/*
Side Section Navigation
*/

// //Navigate Slides
// $('.section').on("click", function () {
// 	var data = $(this).data().to;
// 		interactive.to(data);
// });

/*
Data Processing Event Bindings - Next Slide
	Because this interactive has some interesting delegations going on and a multi-module algorithm, elements are bound by their parent slide to their slide-specific
	data processing module. Each module updates a prototype array with the user selected data, with the first module accepting the full JSON data object (no user selection).
	This array is then used to determine which possibilities/features to render as selectable. 
*/

//Slide 2 Next
$('#s2 .next, #s2 .toBackground').on("click", function (e) {
	interactive.updateModule(e.currentTarget.id);
	interactive.next();
});
//Slide 3 Next
$('#s3 .next, #s3 .toAircraft-Type').on("click", function (e) {
	interactive.updateModule(e.currentTarget.id, interactive.m1Data);
	interactive.next();
});
//Slide 4 Next
$('#s4 .next, #s4 .toFeatures').on("click", function (e) {
	interactive.updateModule(e.currentTarget.id, interactive.m2Data);
	interactive.next();
});
//Slide 5 Next
$('#s5 .next, #s5 .toSolution').on("click", function (e) {
	interactive.updateModule(e.currentTarget.id, interactive.m3Data);
	interactive.next();
});
/*
Event Bindings - Previous Slide
	Clear the data from the current slide's data array before going back to the previous slide.
*/

//Slide 2 Previous
$('#s2 .prev').on("click", function (e) {
	interactive.clearData(interactive.m1Data);
	interactive.prev();
});
//Slide 3 Previous
$('#s3 .prev, #s3 .toObjective').on("click", function (e) {
	interactive.clearData(interactive.m2Data);
	interactive.prev();
});
//Slide 4 Previous
$('#s4 .prev, #s4 .toBackground').on("click", function (e) {
	interactive.clearData(interactive.m3Data);
	interactive.prev();
});
//Slide 5 Previous
$('#s5 .prev, #s5 .toAircraft-Type').on("click", function (e) {
	interactive.clearData(interactive.m4Data);
	interactive.prev();
});

/*
User Input Selection
*/

//Access Slide 2 Inputs
$('#s2 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, {"rule": 2});
});
//Access Slide 3 Inputs
$('#s3 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, {"rule": 2});
});
//Access Slide 4 Inputs
$('#s4 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id, {"rule": "binary"});
});
//Access Slide 5 Inputs
$('#s5 .input').on("click", function (e) {
	interactive.select(e.currentTarget.id);
});

