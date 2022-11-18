import * as echarts from 'echarts';

var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
    myChart.hideLoading();
    graph.nodes.forEach(function (node) {
        node.symbolSize = 5;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [
            {
                // selectedMode: 'single',
                data: graph.categories.map(function (a) {
                    return a.name;
                })
            }
        ],
        series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    position: 'right'
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };
    myChart.setOption(option);
});

option && myChart.setOption(option);