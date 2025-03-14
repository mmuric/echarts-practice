import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { RowLogsOptions } from './options/RowLogsOptions';

interface IRowLogs {
    value: number;
    name: string;
    itemStyle: { color: string };
}

export const RowLogChart = ({data}: {data: IRowLogs[]}) => {
    const [option, setChartOption] = useState(RowLogsOptions);

    useEffect(() => {
        if (data !== null) {
        setChartOption((prevOption) => ({
            ...prevOption,
            series: prevOption.series.map((s, index) =>
            index === prevOption.series.length - 1 
                ? { ...s, data: data }
                : s
            ),
        }));
        }
    }, [data]);

    return <ReactECharts
        option={option}
        style={{ height: '400px', width: '400px' }}
    />
}