export const RowLogsOptions = {
    tooltip: {
      trigger: 'item',
      formatter: 'Number of row logs <br/>{b} : {c}',
      show: true,
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
      borderColor: "rgba(255, 255, 255, 0)",
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