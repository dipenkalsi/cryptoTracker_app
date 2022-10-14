import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar} from 'antd';
import Card from '@mui/material/Card';
import './Newsstyle.css'
import moment from 'moment';


import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { CardActionArea, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified ,mode}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if(!cryptoNews?.value) return (<div style={{display:"flex" ,justifyContent:"center",alignItems:"center", height:"100vh"}}><CircularProgress style={{margin:"0 auto"}}/></div>)

  return (
    <div className={mode=="dark"?"bg-[#0d0d0d] py-5 dark":"py-5"} >
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            placeholder="Choose a crypto"
            optionFilterProp="children"
            size="large"
            theme="dark"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            style={{width:"90%", marginLeft:"4vw",}}
            className={mode=="dark"?"dark-select":""}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Grid item xs={12} md={6} lg={4} xl={4} style={{padding:"0 10px", margin:"auto"}}>
          <Card className="h-72 dark:bg-gray-900">
<CardActionArea>
<a href={news.url} target="_blank" rel="noreferrer">
<div class="my-0">
  <div class="max-w-md  bg-white pb-4 dark:bg-gray-900">
    <div class="text-right p-4 bg-green-500 dark:bg-green-900">
      <span class="text-md font-semibold text-gray-100 tracking-widest uppercase">{moment(news.datePublished).startOf('ss').fromNow()}</span>
    </div>

    <div class="flex items-center relative mb-10">
      <div class="border-t border-gray-200 z-20 w-full"></div>

      <div class="rounded-full z-30 p-2 inline-block absolute mx-8">
        <img src={news.provider[0]?.image?.thumbnail?.contentUrl ||"https://pro-comm-online.com/wp-content/uploads/2019/11/not-available.jpg"} alt="" className="w-14 h-auto rounded-full"/>
      </div>
    </div>
    <div class="px-8 pb-4">
      <h4 class="text-green-700 text-sm dark:text-green-300">{news.provider[0]?.name}</h4>
      <h2 class="text-blue-800 text-xl font-bold dark:text-blue-300">{news.name}</h2>
      <p class="text-gray-600 text-sm dark:text-green-100">
      {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
      </p>
                
    </div>
  </div>
</div>
</a>
</CardActionArea>
</Card>
        </Grid>
      ))}
    </Row>
    </div>
  );
};

export default News;