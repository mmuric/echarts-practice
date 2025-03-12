
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');
import { useState } from 'react';
import classNames from 'classnames';

// https://echarts.apache.org/examples/en/editor.html?c=sunburst-drink


const Chart1 = () => {
  const option = {
    
    
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
          show: false,
          width: 18
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


  return <ReactECharts
    option={option}    
    style={{height: '360px', width: '360px'}}
  />
}


const Chart2 = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: 'Number of row logs <br/>{b} : {c}',
      show: true,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with 50% opacity
      borderColor: "rgba(255, 255, 255, 0)", // White border
      borderWidth: 2,
      textStyle: {
        color: "#fff",
        fontSize: 12, 
        fontWeight: "bold"
      },
      padding: 10,
    },
    toolbox: {
      feature: {
        dataView: false,
        restore: false,
        saveAsImage: false
      }
    },
    legend: {
      data: ['Raw logs', 'Events', 'Cases', 'Incidents']
    },
    series: [
      {  
        type: 'funnel',
        maxSize: '170%',
        label: {
          position: 'inside',
          formatter: '{b}',
          color: '#fff'
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2,
          opacity: 1,
          color: (params) => {
            const colors = ["#4684ee", "#e37155", "#000", '#cccccc']; // Custom colors
            return colors[params.dataIndex];
          },
        },
        emphasis: {
          label: {
            fontSize: 20,
            fontWeight: "bold",
            
          }
        },
        data: [
          { value: 130, name: 'Raw logs', itemStyle: { color: "#c23531" } },
          { value: 50, name: 'Events', itemStyle: { color: "#2f4554" } },
          { value: 30, name: 'Cases', itemStyle: { color: "#61a0a8" } },
          { value: 10, name: 'Incidents', itemStyle: { color: "#d48265" } },
        ],
        z: 100
      }
    ]
  };

  return <ReactECharts
    option={option}    
    style={{height: '400px', width: '400px'}}
  />

}



const App = () => {
  const [hideImg, setHideImg] = useState<boolean>(false);
  const [hideWork, setHideWork] = useState<boolean>(false);

  
  
  return <div>
    
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div className='flex'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setHideImg(!hideImg)}
      >
        Hide image
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setHideWork(!hideWork)}
      >
        Hide work
      </button>
    </div>
    
    

    <div className="flex items-center justify-center h-screen">
      <div className={classNames('absolute', {
        'hidden': hideImg
      })}>
        <img src='/rowlogs.png' />
      </div>

      <div className={classNames('absolute', {
        'hidden': hideWork,
        'opacity-50': !hideWork,
        'opacity-100': !hideWork && hideImg
      })}>
        <Chart2 />
      </div>

    </div>

    

    <div className="flex items-center">
      <div className=''>
        <img src='/Voltage.png' />
      </div>
      <div className=''>
        <Chart1 />
      </div>
    </div>

    <div className="flex items-center">
      <div className=''>
        <img src='/rowlogs.png' />
      </div>
      <div className=''>
        <Chart2 />
      </div>
    </div>
    
  </div>;
};

export default App;