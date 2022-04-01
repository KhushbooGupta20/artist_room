import React from 'react';
import {
  ServicesContainer,
  ServiceWrapper,
  ServicesHeading,
  ServiceTitle,
  ServiceCard,
  ServiceImg,
  ServiceInfo,
  ServiceDesc,
  ServicePrice,
  ServiceButton
} from './ServiceElement';

const Service = ({ heading, data }) => {
  return (
    <ServicesContainer>
      <ServicesHeading>{heading}</ServicesHeading>
      <ServiceWrapper>
        {data.map((product, index) => {
          return (
            <ServiceCard key={index}>
              <ServiceImg src={product.img} alt={product.alt} />
              <ServiceInfo>
                <ServiceTitle>{product.name}</ServiceTitle>
                <ServiceDesc>{product.desc}</ServiceDesc>
                <ServicePrice>{product.price}</ServicePrice>
                <ServiceButton>{product.button}</ServiceButton>
              </ServiceInfo>
            </ServiceCard>
          );
        })}
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Service;