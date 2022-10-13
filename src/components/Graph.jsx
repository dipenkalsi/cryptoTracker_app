
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i+=10) {
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
    coinPrice.push(coinHistory.data.history[i].price);
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: true,
        backgroundColor: 'green',
        borderColor: 'green',
        
      },
    ],
  };

  const options = {
    scales: {
      y: 
        {
          ticks: {
            beginAtZero: true,
          },
        },
    },
  };
  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-Typography.Title mt-4">
          {coinName} Price History
        </Typography.Title>
        <Col className="chart-container">
          <Typography.Title level={5} className="chart-Typography.Title md:mt-7">
            <div className='inline mr-3'>Change =<p className={{coinHistory}>0?"text-green-600":"text-red-600"} style={{display:"inline"}}>{coinHistory?.data?.change}%</p></div>
            <div className='inline'>Current Price=<p className='inline text-blue-600'>{currentPrice} $</p></div>
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart