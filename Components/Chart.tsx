import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {name: '', User: 100, Guest: 200, amt: 100 ,value :500},
    {name: 'Week 1', User:420 , Guest: 280, amt: 100 ,value :100},
    {name: 'Week 2', User: 150, Guest: 210, amt: 100 ,value :200},
    {name: 'Week 3', User: 440, Guest: 300, amt: 100 ,value :300},
    {name: 'Week 4', User: 250, Guest: 450, amt: 100 ,value :400},
    {name: '', User: 420, Guest: 150, amt: 100 ,value :400}
];

export default function Chart () {
    return (
        <ResponsiveContainer width="99%" height="100%">
        <LineChart
          className=''
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="name" />
          <YAxis dataKey='value' domain={[0 ,500 ,100]} />
          <Tooltip  />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="Guest"
            stroke="#E9A0A0"
            // activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
        </LineChart>
        </ResponsiveContainer>
      );
}