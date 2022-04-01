import React from 'react';
import styled from "styled-components";

function Title({ value }) {
  return ( 
  <Div>
    <h1>{value}</h1>
  </Div>
  );
}

const Div = styled.div`
position: relative;
h1 {
  position: absolute;
  transform: translateX(-30%) translateY(12vw) rotate(-90deg);
  font-size: 8rem;
  font-weight:500;
  text-transform: uppercase;
  color: var(--secondary-color);
 
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
  }
}
`;

export default Title