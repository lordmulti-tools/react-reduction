import React from 'react';

import { Row, Col } from 'reactstrap';

import Page from 'components/Page';
import { NumberWidget, IconWidget } from 'components/Widget';

import { iconWidgetsData, numberWidgetsData } from 'demos/widgetPage';

const WidgetPage = () => {
  return (
    <Page
      className="WidgetPage"
      title="Database"
      breadcrumbs={[{ name: 'widgets', active: true }]}
    >
      <Row>
        {numberWidgetsData.map(({ color }, index) => (
          <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
            <NumberWidget
              title="Address Targeted"
              subtitle="This month"
              number="11"
              color={color}
              progress={{
                value: 100,
                label: 'Last month',
              }}
            />
          </Col>
        ))}
      </Row>

      <Row>
        {iconWidgetsData.map(
          ({ bgColor, icon, title, subtitle, ...restProps }, index) => (
            <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor={bgColor}
                icon={icon}
                title={title}
                subtitle={subtitle}
                {...restProps}
              />
            </Col>
          )
        )}
      </Row>
    </Page>
  );
};

export default WidgetPage;
