import React from 'react';
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import play from "../assets/play.png";
import Title from './Title';
import {useScroll}  from './useScroll'
import { motion } from "framer-motion";
import { servicesAnimations } from "../animation";
import {serviceData} from './Services/data'
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
} from './Services/ServiceElement';

function Service() {
  const [element, controls] = useScroll();

  return <Section id="services" ref={element}>
    <Title value="services" />
    
    <ServiceWrapper>
    {serviceData.map((product, index) => {
      return (
        <ServiceCard key={index}>
          <ServiceImg src={product.img} alt={product.alt} />
          <ServiceInfo>
            <ServiceTitle>{product.name}</ServiceTitle>
            <ServiceDesc>{product.desc}</ServiceDesc>
            
            <ServiceButton>{product.button}</ServiceButton>
          </ServiceInfo>
        </ServiceCard>
      );
    })}
  </ServiceWrapper>
    
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service {
    padding: 2rem;
    &:nth-of-type(2) {
      background-color: var(--primary-color);
      .services__service__title {
        span {
          color: #fff;
        }
      }
      .services__service__description {
        color: #fff;
      }
    }
    &__image {
      margin-bottom: 3rem;
    }
    &__title {
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`;

export default Service