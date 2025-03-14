export const VoltageOptions = {
    series: [

      {

        type: 'gauge',
        min: 0,
        max: 240,
        splitNumber: 6,
        progress: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 48,
            color: [
              [0.54, "#d0e9c6"],
              [1, "#fff"],
            ],
          },
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
      },

      {

        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        progress: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 17,
            color: [
              [1, "#fff"],
            ],

          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
      },
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        progress: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 14,
            color: [[1, '#cccccc']],
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
      },
      {

        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: [
              [1, "#000"],
            ],
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
      },
      {
        type: 'gauge',
        min: 0,
        max: 240,
        splitNumber: 6,
        progress: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: true,
          length: 10
        },
        splitLine: {
          length: 22,
          lineStyle: {
            width: 2,
            color: '#333333'
          }
        },
        axisLabel: {
          distance: 14,
          formatter: (value: number) => {
            if (value === 0) {
              return `{rich1|${value}}`; // 🎯 Apply 'small' style
            } else if (value === 40) {
              return `{rich2|${value}}`; // 🎯 Apply 'medium' style
            } else if (value === 80) {
              return `{rich3|${value}}`; // 🎯 Apply 'medium' style
            } else if (value === 120) {
              return `{rich4|${value}}`; // 🎯 Apply 'medium' style
            } else if (value === 160) {
              return `{rich5|${value}}`; // 🎯 Apply 'medium' style
            } else if (value === 200) {
              return `{rich6|${value}}`; // 🎯 Apply 'medium' style
            }
            return `{rich7|${value}}`; // 🎯 Apply 'large' style
          },
          rich: {
            rich1: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [0, 0, 2, 3]
            },
            rich2: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [3, 0, 0, 3]
            },
            rich3: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [8, 0, 0, 2]
            },
            rich4: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [0, 0, 0, 0]
            },
            rich5: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [8, 1, 0, 2]
            },
            rich6: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [3, 1, 0, 0]
            },
            rich7: {
              color: '#333333',
              fontSize: 18,
              fontWeight: 600,
              padding: [0, 0, 3, 0]
            },
          }

        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '110%',
          offsetCenter: [0, '30%'],
          itemStyle: {
            color: '#e37155'
          }
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 35,
          itemStyle: {
            borderWidth: 1,
            borderColor: '#917776',
            color: '#4684ee'
          }
        },

        title: {
          show: true,
          fontSize: 28,
          offsetCenter: [0, '-28%']
        },
        detail: {
          valueAnimation: true,
          fontSize: 28,
          offsetCenter: ['0', '67.5%']
        },
        data: [
          {
            value: 110,
            name: 'Voltage'
          }
        ]
      }
    ]
  };