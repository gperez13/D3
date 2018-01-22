console.log("Hello World!")

const myStyles = [
	'#268BD2', '#FCF4DC', '#EAE3CB', '#536870', '#042029', '#259286'
]


d3.select('.item:nth-child(2)')
	.html('<strong>Snoop Dogg</strong>')

d3.select('#chart')
	.append('div')
	.html('<strike>Macklemore</strike>')

d3.selectAll('.item')
	.attr('class', 'highlight')
	.data(myStyles)
	.style('background', function(d) {
		return d
	})


