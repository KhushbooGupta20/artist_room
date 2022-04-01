import styled from 'styled-components';



export const ServicesContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top:200px;
`;

export const ServiceCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ServiceImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
// height:200px;
// width:200px;
// max-width: 100%;
// border-radius:50%;
// margin-left:50px;
// outline: 5px solid #fff;
// outline-offset: 10px;
  box-shadow: 8px 8px var(--secondary-color);
  &:hover {
    transition: .5s ease-in-out;
    -webkit-transform: scale(1);
    transform: scale(1.1);
  }
`;

export const ServicesHeading = styled.h1`
  font-size: clamp(4rem, 2.5vw, 5rem);
  text-align: center;
  margin-bottom: 5rem;
  font-family: 'Lobster', cursive;
  letter-spacing:2px;
`;

export const ServiceTitle = styled.h2`
  font-weight: 700;
  font-size: 1.3rem;
  color:var(--secondary-color)
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ServiceDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ServicePrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ServiceButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background:var(--secondary-color) ;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    font-weight:700;
  }#e31837
`;