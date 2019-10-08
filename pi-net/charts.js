console.log('Loaded');

function slide1Charts() {
	var global = 7.5;
	var broadbandUsers = 1.1;
	var totalUsers = 3.5;

	new Chartist.Pie(
		'#global-users',
		{
			labels: ['Users', ''],
			series: [totalUsers, global - totalUsers]
		},
		{
			donutWidth: 50,
			chartPadding: 50
		}
	);

	new Chartist.Pie(
		'#global-broadband',
		{
			labels: ['Broadband', ''],
			series: [broadbandUsers, global - broadbandUsers]
		},
		{
			donut: true,
			donutWidth: 50
		}
	);
}

function connSpeedChart() {
	const data = [
		{
			label: 'Australia',
			avg: 10.1,
			low: 76
		},
		{
			label: 'Philipines',
			avg: 4.5,
			low: 31
		},
		{
			label: 'Indonesia',
			avg: 6.7,
			low: 71
		},
		{
			label: 'India',
			avg: 5.6,
			low: 38
		},
		{
			label: 'China',
			avg: 6.3,
			low: 73
		}
	];
	new Chartist.Bar(
		'#speed-chart-avg',
		{
			labels: data.map(function(row) { return row.label; }),
			series: [
				data.map(function(row) { return row.avg; }),
				data.map(function() { return 0; })
			]
		},
		{
			axisY: {
				offset: 60 
			},
			animation: {
				onComplete: function() {
					console.log(this);
				}
			}
		}
	);

	let lowChart = new Chartist.Bar(
		'#speed-chart-low',
		{
			labels: data.map(function(row) { return row.label; }),
			series: [
				data.map(function() { return 0; }),
				data.map(function(row) { return row.low; }),
			]
		},
		{
			axisX: {
				showLabel: false
			},
			axisY: {
				position: 'end',
				labelInterpolationFnc: function(value) {
					return value + '%';
				}
			}
		}
	);

}

//document.addEventListener('DOMContentLoaded',function(){
	slide1Charts();
	connSpeedChart();
//});
