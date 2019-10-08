/* global Chartist */

function headsetSalesCharts() {
	const data = [
		{
			label: 'Other',
			sales17q3: 14000,
			sales2016: 0
		},
		{
			label: 'HTC',
			sales17q3: 16000,
			sales2016: 450083
		},
		{
			label: 'Oculus',
			sales17q3: 21000,
			sales2016: 355088
		},
		{
			label: 'Sony',
			sales17q3: 49000,
			sales2016: 745434
		},
		{
			label: 'Samsung',
			sales17q3: 0,
			sales2016: 2316632
		},
		{
			label: 'Google cardboard',
			sales17q3: 0,
			sales2016: 84400000
		}
	];
	new Chartist.Bar(
		'#vr-headset-sales',
		{
			labels: data.map(function(row) { return row.label; }),
			series: [
				data.map(function(row) { return row.sales17q3; }),
				data.map(function() { return 0; })
			]
		},
		{
			chartPadding: {
				left: 50
			},
			axisY: {
				offset: 0 
			},
			animation: {
				onComplete: function() {
					console.log(this);
				}
			}
		}
	);

	/*
	new Chartist.Bar(
		'#vr-headset-sales2016',
		{
			labels: data.map(function(row) { return row.label; }),
			series: [
				data.map(function(row) { return row.sales2016; }),
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

	new Chartist.Bar(
		'#vr-headset-sales2016-full',
		{
			labels: data.map(function(row) { return row.label; }),
			series: [
				data.map(function(row) { return row.sales17q3; }),
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
	*/

}

//document.addEventListener('DOMContentLoaded',function(){
	headsetSalesCharts();
//});
