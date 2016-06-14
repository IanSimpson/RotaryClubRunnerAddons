(function($) {
	$('.magiccarousel').each(function() {
		var $table = 	$(this),
			$wrapper =	$(this).parent(),
			$fronts =	$('.magiccarousel tr:nth-child(even)'),
			$backs = 	$('.magiccarousel tr:nth-child(odd)'),
			$ind =		$('<ul class="magiccarousel-indicators"/>'),
			width =		0,
			active =	0,
			timer =		null,
			count =		$backs.length,
			setSizes =	function() {
				width = Math.ceil($table.width())
				for(var i = 0; i < count; i++) {
					$($backs[i]).add($fronts[i]).css({
						position: 'absolute',
						top: 0,
						left: (i*width) + 'px',
					})
				}
				slideTo(active)
			},
			slideTo =	function(pos) {
				active = pos
				$table.stop(true,false).animate({
					'margin-left': (0-width*pos) + 'px',
				})
				$ind.children('li').removeClass('active')
				$($ind.children('li')[pos]).addClass('active')
			},
			$leftBtn =	$('<a class="left carousel-control" href=""><span class="glyphicon glyphicon-chevron-left " aria-hidden="true"></span><span class="sr-only">Previous</span></a>'),
			$rightBtn =	$('<a class="right carousel-control" href=""><span class="glyphicon glyphicon-chevron-right " aria-hidden="true"></span><span class="sr-only">Next</span></a>'),
			slideLeft =	function(event) {
				if(typeof event !== 'undefined') {
					event.preventDefault()
					clearInterval(timer)
				}
				var targ = active-1
				if(targ < 0) targ = count-1
				slideTo(targ)
			},
			slideRight = function(event) {
				if(typeof event !== 'undefined') {
					event.preventDefault()
					clearInterval(timer)
				}
				var targ = active+1
				if(targ > count-1) targ = 0
					slideTo(targ)
			}

		timer = window.setInterval(slideRight,5000)

		$wrapper.css({
			overflow: 'hidden',
			position: 'relative',
		})

		$fronts.children().wrapInner('<div class="inner"/>')

		$backs.each(function() {
			var $td = $(this).find('td'),
				$link = $td.find('a').first().clone().empty()
			$td.css({
				'background-image': 'url("' + $td.find('img').first().attr('src') + '")'
			}).empty()
			if($link.length) {
				$td.append(
					$link.addClass('clickable')
				)
			}
		})

		$table
			.after($ind)
			.after($leftBtn)
			.after($rightBtn)

		$leftBtn.on('click',slideLeft)
		$rightBtn.on('click',slideRight)

		for(var i = 0; i < count; i++) {
			$('<li/>').data('pos',i).appendTo($ind).on('click',function() {
				clearInterval(timer)
				slideTo($(this).data('pos'))
			})
		}

		$(window).on('resize',setSizes)
		setSizes()

	})
})(jQuery)
