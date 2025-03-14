import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { VoltageOptions } from './options/VoltageOptions';



export const VoltageChart = ({ data }: {data: number}) => {
    
    const [option, setChartOption] = useState(VoltageOptions);

    useEffect(() => {
        if (data !== null) {
            // @ts-ignore
            setChartOption((prevOption) => ({
                ...prevOption,
                series: prevOption.series.map((s, index) =>
                index === prevOption.series.length - 1 // Update only the last gauge (where data is set)
                    ? { ...s, data: [{ value: data, name: "Voltage" }] }
                    : s
                ),
            }));
        }
    }, [data]);

    return <ReactECharts
        option={option}
        style={{ height: '360px', width: '360px' }}
    />
}

 