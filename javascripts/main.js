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


d3.select('#chart')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', "#93A1A1")
	.append("rect")
		.attr('x', 200)
		.attr('y', 100)
		.attr('height', 200)
		.attr('width', 200)
		.style('fill', '#CB4B19')
	d3.select('svg')
		.append('circle')
		.attr('cx', '300')
		.attr('cy', '200')
		.attr('r', '50')
		.style('fill', '#2176C7')
