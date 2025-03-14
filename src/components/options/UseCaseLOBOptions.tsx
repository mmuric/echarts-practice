import { UseCaseLOBData } from '../options/UseCaseLOBData';

export const UseCaseLOBOptions = {
    series: {
      type: 'sunburst',
      data: UseCaseLOBData,
      radius: [0, '80%'],
      sort: undefined,
      emphasis: {
        focus: 'none',
      },
      levels: [
        {
          r0: '0%',
          r: '15%',
          itemStyle: {
            color: 'red',  // Change center color
            borderWidth: 0
          },
        },
        {
          r0: '15%',
          r: '55%',
          itemStyle: {
            borderWidth: 2
          },
          label: {
            fontSize: 8,
            fontWeight: 1000,
            overflow: 'break',
            lineHeight: 10,
            width: 50,
            rich: {
              wrap: {
                width: 50,
                overflow: 'break',
                lineHeight: 10
              }
            }
          }
        },
        {
          r0: '58%',
          r: '80%',
          label: {
            fontSize: 8,
            fontWeight: 1000,
            align: 'center', 
            position: 'outside',
            padding: 3,
            distance: 2,
            silent: false,
          }
        },
      ]
    },    
  };