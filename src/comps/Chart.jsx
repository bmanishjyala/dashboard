import { useEffect,useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart() {
  const [width, setwidth] = useState(null)
 useEffect(()=>{
   if(window.innerWidth>600)
   setwidth(true)
 },[])
    const data = [
        {
          name: 'Jan',
          user: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          user: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          user: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          user: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          user: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          user: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          user: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className='chart shadow'>
    <h3 className="chartTitle">Sales Analytics</h3>
    <ResponsiveContainer id="heightAspect"     width="100%" aspect={3/1}  >
        <LineChart 
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis 
         dataKey="name" />
          <YAxis 
        />
          <Tooltip />
          <Line type="monotone" dataKey="user" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
