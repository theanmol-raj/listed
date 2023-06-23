import React from 'react'
import { PieChart, Pie as PC, Cell ,ResponsiveContainer } from "recharts";
type Props = {}

const data = [
    { name: "Group C", value: 310 },
    { name: "Group B", value: 550 },
    { name: "Group D", value: 140 }
  ];

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



function Pie({}: Props) {
  return (
    <ResponsiveContainer width="99%" height="85%">
    <PieChart>
      <PC
        data={data}
        
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={60}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </PC>
    </PieChart>
    </ResponsiveContainer>
  )
}

export default Pie