var Anilink = new Class( {
	Implements : [ Options ],
	options : {
		enterClass : 'link-enter',
		leaveClass : 'link-leave',
		duration: 500,
		morph : {
			duration : 500,
			transition : 'quad:in:out',
			onComplete : $empty
		}
	},
	Links : [],
	initialize : function(elements, options) {
		this.setOptions(options);
		Links = $$(elements);
		Links.each(function(link, i) {

			link.addEvent('mouseenter', function() {
				link.removeClass(this.options.leaveClass);
				link.set('morph', this.options.morph);
				link.morph('.' + this.options.enterClass);
			}.bind(this));

			link.addEvent('mouseleave', function() {
				link.removeClass(this.options.enterClass);
				link.set('morph', $merge(this.options.morph, {
					onComplete : function() {
						link.setStyle('background-color', 'transparent');
					}
				}));
				link.morph('.' + this.options.leaveClass);
			}.bind(this));

		}, this);
	}
});
