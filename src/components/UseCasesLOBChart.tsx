import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { UseCaseLOBOptions } from './options/UseCaseLOBOptions';

export interface IUseCaseLOB {
    name: string;
    itemStyle: {
        color: string;
    };    
    children: {
        name: string;
        itemStyle: {
            color: string;
        };
        value: number;
    }[];
}

export const UseCaseLOBChart = ({ data }: { data: IUseCaseLOB[] }) => {
    const [option, setChartOption] = useState(UseCaseLOBOptions);

    // const handleChartClick = (event: any) => {
    //     console.log("handleChartClick", event.treePathInfo.length, option.series.levels)
    //     // const levels = option.series.levels.map((level, index) => {
    //     //     if (index === 1) {
    //     //         return {
    //     //             ...level,
    //     //             r0: event.treePathInfo.length === 2 ? '30%' : '15%'
    //     //         };
    //     //     }
    //     //     return level;
    //     // })
    //     // setChartOption({
    //     //     series: {
    //     //         ...option.series,
    //     //         levels: levels ?? []
    //     //     }
    //     // })

    //     // if (event.treePathInfo.length) {
          
    //     //       ...prevOption.series,
    //     //       levels: prevOption.series.levels.map((level, index) => {
    //     //         if (index === 1) {
    //     //           return {
    //     //             ...level,
    //     //             r0: '30%' // Adjust r0 for Level 1
    //     //           };
    //     //         }
    //     //         return level;
    //     //       })
    //     //     }
    //     //   }));
    //     // }
    // };
    
    

    useEffect(() => {
        if (data !== null) {

            setChartOption({
                series: {
                    ...option.series,
                    data: data
                }
            });

        }
    }, [data]);

    return <ReactECharts
        option={option}
        style={{ height: '360px', width: '360px' }}
        
    />
}