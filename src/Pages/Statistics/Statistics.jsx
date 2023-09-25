import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const [donation, setDonation] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    fetch("./donation.json")
      .then((res) => res.json())
      .then((data) => setTotal(data));
  }, []);

  useEffect(() => {
    const yourDonationJson = localStorage.getItem("cards");
    const yourDonation = JSON.parse(yourDonationJson);
    setDonation(yourDonation);
  }, []);
  let donate = 0;
  if (donation) {
    donate = donation.length;
  }

  const data = [
    { name: "Group A", value: total.length - donate },
    { name: "Group B", value: donate },
  ];
  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
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

  return (
    <>
      <div className="flex justify-center mt-20">
        <PieChart width={320} height={320}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="w-full text-center flex justify-center flex-col md:flex-row md:gap-10 mb-24">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-lg text-dark-1">Your Donation</p>
          <span className="w-24 h-2.5 rounded bg-[#00C49F] mt-0.5"></span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p className="text-lg text-dark-1">Total Donation</p>
          <span className="w-24 h-2.5 rounded bg-[#FF444A]"></span>
        </div>
      </div>
    </>
  );
};

export default Statistics;
