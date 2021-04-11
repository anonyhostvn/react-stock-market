import React from 'react';
import {Card, Col, Row} from "antd";
import {FormattedMessage} from "umi";
import {GridContent} from "@ant-design/pro-layout";
import StockMarketTable from "@/pages/dashboard/stockMarket/stockMarket.table";
import {data, topIncreaseData, topDecreaseData} from "@/pages/dashboard/stockMarket/config/priceTable.fakeData";
import TopIncreaseStockTable from "@/pages/dashboard/stockMarket/topIncreaseStock.table";
import TopDecreaseStockTable from "@/pages/dashboard/stockMarket/topDecreaseStock.table";


const Index = () => {
  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card
              title={
                <FormattedMessage
                  id="dashboardandstockmarket.stockmarket.markettable"
                  defaultMessage="Real-Time Trading Activity"
                />
              }
              bordered={false}
            >
              <StockMarketTable data={data}/>
            </Card>
          </Col>

          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card
              title={
                <FormattedMessage
                  id="dashboardandstockmarket.stockmarket.topChangeTable"
                  defaultMessage="Real-Time Trading Activity"
                />
              }
              bordered={false}
            >
              <Row gutter={24}>
                <Col xl={12} lg={12} md={24}>
                  <TopIncreaseStockTable data={topIncreaseData}/>
                </Col>

                <Col xl={12} lg={12} md={24}>
                  <TopDecreaseStockTable data={topDecreaseData}/>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  )
}

export default Index;
