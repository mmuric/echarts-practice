import { useState } from 'react';
import { VoltageChart } from './components/VoltageChart';
import { RowLogChart } from './components/RowLogsChart';
import { UseCaseLOBChart } from './components/UseCasesLOBChart';
import { UseCaseLOBData } from './components/options/UseCaseLOBData';

const App = () => {
  const [voltage, setVoltage] = useState<number>(110);
  const [random, setRandom] = useState(UseCaseLOBData);
  const [rowLogData, setRowLogData] = useState([
    { value: 130, name: 'Raw logs', itemStyle: { color: "#c23531" } },
    { value: 50, name: 'Events', itemStyle: { color: "#2f4554" } },
    { value: 30, name: 'Cases', itemStyle: { color: "#61a0a8" } },
    { value: 10, name: 'Incidents', itemStyle: { color: "#d48265" } },
  ]);


  const setRowLogs = (value: number, name: string) => {
    const index = rowLogData.findIndex((f) => name === f.name);

    if (index >= 0) {
      const field = rowLogData[index];

      setRowLogData(
        [
          ...rowLogData.slice(0, index),
          {value: value, name: name, itemStyle: field.itemStyle},
          ...rowLogData.slice(index + 1)]
      )
    }
  }

  const generateData = () => {
    const min = 0.5
    const max = 3.5
    
    const data = UseCaseLOBData.map((item) => {
      return {
        name: item.name,
        itemStyle: item.itemStyle,
        children: item.children.map((child) => {
          return {
            name: child.name,
            value: Math.random() * (max - min + 1) + min,
            itemStyle: child.itemStyle,
          }
        }) ?? []
      }
    })
    
    setRandom(data);
  }

  return <div className='p-10'>
    <div className="w-full flex justify-center items-center">
      <div className=''>
        <img src='/Voltage.png' />
      </div>
      <div className=''>
        <VoltageChart data={voltage} />
      </div>
    </div>
    <div className='w-full flex justify-center mt-2'>
      <div className='w-xl'>
        <input
          type='number'
          value={voltage}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={(e) => setVoltage(+e.target.value)}
        />
      </div>
    </div>


    <div className="w-full flex justify-center items-center mt-10">
      <div className=''>
        <img src='/rowlogs.png' />
      </div>
      <div className=''>
        <RowLogChart data={rowLogData} />
      </div>
    </div>
    <div className='w-full grid justify-center mt-2'>
      {rowLogData.map((item, index) => {
        return <div key={index} className='w-xl mt-2'>
          <input
            type='number'
            value={item.value}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => setRowLogs(+e.target.value, item.name)}
          />
        </div>
      })}
    </div>

    <div className="w-full flex justify-center items-center mt-10">
      <div className=''>
        <img src='/lob.png' />
      </div>
      <div className=''>
        <UseCaseLOBChart data={random} />
      </div>
    </div>
    <div className="w-full grid justify-center mt-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setRandom(generateData)}
      >
        Random data
      </button>
    </div>

  </div>;
};

export default App;