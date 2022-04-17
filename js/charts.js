// chart1
function chart1() {
    let chartDom = document.getElementById('chart1');
    let myChart = echarts.init(chartDom);
    let option;
    option = {
        xAxis: {
            type: 'category',
            data: [2000, 2001, 2002, 2003, 2004, 2005]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [8278.06, 9076.22, 10076.52, 10903.23, 13308.08, 15947.51],
                type: 'line',
                lineStyle: {
                    normal: {
                        color: '#6A8975',
                        width: 4

                    },
                },
                itemStyle: {
                    color: '#6A8975'
                }
            }
        ],
        tooltip: {
            valueFormatter: function (value) {
                return value + ' 亿元';
            },
            trigger: 'axis',
            // axisPointer: {
            //     type: 'cross',
            //     label: {
            //         backgroundColor: '#6a7985'
            //     }
            // }
        },
        title: {
            text: '山东省GDP增长率',
            x: 'left',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'bottom',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 14,
            }
        },


    };

    option && myChart.setOption(option);

}

// chart2
function chart2() {
    let chartDom = document.getElementById('chart2');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title: {
            text: '山东省二氧化碳排放强度及其增长率',
            x: 'left',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'bottom',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 14,
            }
        },
        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: ['line', 'bar'] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        color: ['#BAD5C4', '#808D12'],
        legend: {
            data: ['二氧化碳排放强度', '二氧化碳强度增长率'],
            // orient: 'vertical',
            // x: 'left',
            // y: 'top',
            // padding: [80, 0, 0, 0]
        },
        xAxis: [
            {
                type: 'category',
                data: [2000, 2001, 2002, 2003, 2004, 2005],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '二氧化碳排放强度/ 百万吨',
                min: 0,
                max: 800,
                interval: 200,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '二氧化碳强度增长率',
                min: 0,
                max: 40,
                interval: 10,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '二氧化碳排放强度',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 百万吨';
                    }
                },
                data: [261.42, 303.35, 345.88, 424.16, 518.28, 661.84],
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                            var colorList = [];
                            for (var i = 0; i < 6; i++) {
                                colorList.push(['#FBFFDB', '#BAD5C4'][i % 2])
                            }
                            return colorList[params.dataIndex]
                        }
                    }
                }

            },
            {
                name: '二氧化碳强度增长率',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' %';
                    }
                },
                data: [0.384936925, 16.04051332, 14.02124744, 22.63009377, 22.18964601, 27.69997666],
                lineStyle: {
                    normal: {
                        color: '#808D12',
                        width: 4

                    },
                },
                itemStyle: {
                    color: '#808D12'
                },
                symbol: 'circle',     //设定为实心点
                symbolSize: 15,   //设定实心点的大小
            }
        ]
    };

    option && myChart.setOption(option);
}

// chart3
function chart3() {
    let chartDom = document.getElementById('chart3');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title: {
            text: '山东省碳生产力发展情况',
            x: 'left',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'bottom',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 14,
            }
        },
        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: ['line', 'bar'] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        color: ['#BAD5C4', '#808D12'],
        legend: {
            data: ['碳生产力', '碳生产力增长情况'],
            // orient: 'vertical',
            // x: 'left',
            // y: 'top',
            // padding: [80, 0, 0, 0]
        },
        xAxis: [
            {
                type: 'category',
                data: [2000, 2001, 2002, 2003, 2004, 2005],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '碳生产力/ 元/吨',
                min: 2000,
                max: 3500,
                interval: 500,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '碳生产力增长情况',
                min: -15,
                max: 15,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '碳生产力',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 元/吨';
                    }
                },
                data: [3166.57486, 2991.996044, 2913.29941, 2570.546492, 2567.739446, 2409.5718],
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                            var colorList = [];
                            for (var i = 0; i < 6; i++) {
                                colorList.push(['#FBFFDB', '#BAD5C4'][i % 2])
                            }
                            return colorList[params.dataIndex]
                        }
                    }
                }

            },
            {
                name: '碳生产力增长情况',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' %';
                    }
                },
                data: [10.03807919, -5.513175084, -2.63023857, -11.76511131, -0.10920036, -6.159801232],
                lineStyle: {
                    normal: {
                        color: '#808D12',
                        width: 4

                    },
                },
                itemStyle: {
                    color: '#808D12'
                },
                symbol: 'circle',     //设定为实心点
                symbolSize: 15,   //设定实心点的大小
            }
        ]
    };

    option && myChart.setOption(option);

}

// chart4
function chart4() {
    let chartDom = document.getElementById('chart4');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        //   tooltip: {
        //     trigger: 'item'
        //   },
        //   legend: {
        //     top: '5%',
        //     left: 'center'
        //   },
        color: ['#2E4D49', '#D8D8D8'],
        title: {
            text: '50%',
            x: 'center',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'center',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 60,
            },
            subtext: '全球发电设备交易额',
            subtextStyle: { // 副标题文本样式{"color": "#aaa"}
                fontSize: 16,
            }
        },
        series: [
            {
                // name: 'Access From',
                type: 'pie',
                radius: ['83%', '90%'],
                // avoidLabelOverlap: true,
                // label: {
                //     show: false,
                //     position: 'center'
                // },
                // emphasis: {
                //     label: {
                //         show: true,
                //         fontSize: '40',
                //         fontWeight: 'bold'
                //     }
                // },
                // labelLine: {
                //     show: false
                // },
                data: [
                    { value: 60, name: '风能发电设备出口收入' },
                    { value: 60, name: '其他' },
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}

// chart5
function chart5() {
    let chartDom = document.getElementById('chart5');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        //   tooltip: {
        //     trigger: 'item'
        //   },
        //   legend: {
        //     top: '5%',
        //     left: 'center'
        //   },
        color: ['#2E4D49', '#D8D8D8'],
        title: {
            text: '1/3',
            x: 'center',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'center',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 60,
            },
            subtext: '全球光伏发电设备',
            subtextStyle: { // 副标题文本样式{"color": "#aaa"}
                fontSize: 16,
            }
        },
        series: [
            {
                // name: 'Access From',
                type: 'pie',
                radius: ['83%', '90%'],
                // avoidLabelOverlap: true,
                // label: {
                //     show: false,
                //     position: 'center'
                // },
                // emphasis: {
                //     label: {
                //         show: true,
                //         fontSize: '40',
                //         fontWeight: 'bold'
                //     }
                // },
                // labelLine: {
                //     show: false
                // },
                data: [
                    { value: 1, name: '夏普公司' },
                    { value: 2, name: '其他' },
                ]
            }
        ]
    };

    option && myChart.setOption(option);
}

// chart6
function chart6() {
    let chartDom = document.getElementById('chart6');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        color: ['rgb(114, 217, 224)', '#93d1c2'],
        title: {
            text: '山东省能源消费占比',
            x: 'left',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'bottom',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 14,
            }
        },
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //   type: 'cross',
            //   label: {
            //     backgroundColor: '#6a7985'
            //   }
            // }
        },
        legend: {
            // data: ['煤品', '油品']
            data: ['油品', '煤品']
        },
        //   toolbox: {
        //     feature: {
        //       saveAsImage: {}
        //     }
        //   },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [


            {
                name: '煤品',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(114, 217, 224,.6)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [74.09, 76.87, 81.84, 79.47, 75.98, 80.76, 79.8, 80.47, 77.98, 77.13, 76.21, 79.6, 80.22, 79.74, 80.75, 76.51026427, 73.92296408, 72.69876217, 69.32128297, 67.27646232, 66.84034531]
            },
            {
                name: '油品',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#A4EAD8'
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 255,255,0)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [25.36, 21.8, 17.73, 19.8, 23.29, 18.35, 19.25, 18.66, 20.58, 21.27, 21.98, 17.11893256, 15.94251792, 16.29293202, 14.88972017, 14.71603754, 15.81423417, 16.15109932, 17.54050462, 15.51964032, 13.60658989]
            },
        ]
    };

    option && myChart.setOption(option);

}

// chart7
function chart7() {
    let chartDom = document.getElementById('chart7');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        color: ['#6A8975'],
        xAxis: {
            type: 'category',
            data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
        },
        tooltip: {
            trigger: 'axis',
            valueFormatter: function (value) {
                return value + ' %';
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [0.384936925, 16.04051332, 14.02124744, 22.63009377, 22.18964601, 27.69997666, 12.65187241, 2.69154211, 8.602192208, 5.81036936, 5.603804812, 5.10568076, 3.174784873, -6.259276648, 5.647081261, 5.447151519, 4.232674018, 0.462912071, 10.73064387, 2.022811687],
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            if (params.data > 0) return '#6A8975'
                            else return '#BAD5C4'
                        }
                    }
                }
            }
        ],
        title: {
            text: '山东省二氧化碳排放增长率',
            x: 'left',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'bottom',
            textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                color: '#2E4D49',
                fontSize: 14,
            }
        },
    };

    option && myChart.setOption(option);
}

// chart8
function chart8() {
    let chartDom = document.getElementById('chart8');
    let myChart = echarts.init(chartDom);
    let option;

    setTimeout(function () {
        option = {
            color: ['#c2ead8', '#78b5b6', '#97c7a6'],
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['年份', "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
                    ['第一产业', 1221, 1252.08, 1340.46, 1369.15, 1456.98, 1748.22, 1928.17, 2098.26, 2451.01, 2876.2, 3076.19, 3411.34, 3768.55, 4047.06, 4454.11, 4662.81, 4902.82, 4830.25, 4832.71, 4950.52, 5116.99, 5363.76, 6029],
                    ['第二产业', 3644.32, 4120.19, 4466.74, 5037.63, 5720.01, 7327.61, 8841.13, 10568.49, 12529.41, 14911.5, 15919.67, 17733.08, 19926.11, 21275.89, 22615.89, 23588.02, 24814.88, 25565.04, 26925.59, 27523.67, 28171.78, 28612.19, 33187.2],
                    ['第三产业', 2628.52, 2905.79, 3269.02, 3669.74, 3726.24, 4232.25, 5178.21, 6301.05, 7737.64, 9318.52, 10544.94, 12778.07, 15370.27, 17634.36, 20274.33, 22524.01, 25571.09, 28367.17, 31253.8, 34174.68, 37251.71, 39153.05, 43879.7],
                ]
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '42%' },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'line',
                    smooth: true,
                    seriesLayoutBy: 'row',
                    emphasis: { focus: 'series' }
                },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    emphasis: {
                        focus: 'self'
                    },
                    label: {
                        formatter: '{b}: {@2021} 亿元 ({d}%)'
                    },
                    encode: {
                        itemName: '年份',
                        value: '2021',
                        tooltip: '2021'
                    }
                }
            ]
        };
        myChart.on('updateAxisPointer', function (event) {
            const xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} 亿元 ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
        myChart.setOption(option);
    });

    option && myChart.setOption(option);
}

// chart9
function chart9() {
    let chartDom = document.getElementById('chart9');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        // backgroundColor: '#2c343c',
        title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 155.1 },
                    { value: 1000 - 155.1 },

                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    option && myChart.setOption(option);
}


function init() {
    chart1()
    chart2()
    chart3()
    chart4()
    chart5()
    chart6()
    chart7()
    chart8()
    chart9()
}

init()