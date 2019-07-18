import Highcharts from 'highcharts'

const config = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                showInLegend: true,
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: 'black'
                },
                stacking: 'normal'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '目前续约率',
            y: 41,
            sliced: true,
            dataLabels: {
                rotation: 0
            }
        }, {
            name: 'IP登录数',
            y: 11,
            dataLabels: {
                rotation: 0
            }
        }, {
            name: '席位',
            y: 8
        }, {
            name: '登录次数',
            y: 7
        }, {
            name: '检索次数',
            y: 6
        }, {
            name: '导出次数',
            y: 6
        }]
    }]
}

export default config
