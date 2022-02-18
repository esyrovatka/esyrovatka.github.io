import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const Chart = ({ workoutData }) => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    workoutData.length &&
      setDate([
        {
          name: "Jan",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 0).length,
        },
        {
          name: "Feb",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 1).length,
        },
        {
          name: "Mar",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 2).length,
        },
        {
          name: "Apr",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 3).length,
        },
        {
          name: "May",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 4).length,
        },
        {
          name: "Jun",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 5).length,
        },
        {
          name: "Jul",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 6).length,
        },
        {
          name: "Aug",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 7).length,
        },
        {
          name: "Sep",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 8).length,
        },
        {
          name: "Oct",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 9).length,
        },
        {
          name: "Nov",
          uv:
            2 + 1 * workoutData.filter((item) => item.getMonth() === 10).length,
        },
        {
          name: "Dec",
          uv:
            3 + 1 * workoutData.filter((item) => item.getMonth() === 11).length,
        },
      ]);
  }, [workoutData]);

  return (
    <ChartStyled>
      <Typography variant="h5">Workout Stats</Typography>
      <ResponsiveContainer width="95%" height={330}>
        <LineChart
          // width={630} height={330}
          data={date}>
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#2D9CDB"
            strokeWidth={4}
            fill="#8884d8"
          />
          <XAxis dataKey="name" />
        </LineChart>
      </ResponsiveContainer>
    </ChartStyled>
  );
};

const ChartStyled = styled(Box)`
  margin: 0px auto;
  background: #fff;
  width: 50%;
  padding: 50px;
  border-radius: 25px;

  @media (max-width: 1200px) {
    margin: 20px auto;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 50px 25px;
    justify-content: center;
  }

  // @media (max-width: 768px) {
  //   width: 90%;
  // }
`;

export default Chart;
