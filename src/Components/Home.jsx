import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import play from '../assets/play.png'
import home from '../assets/home.png'
import { homeAnimation, homeInfoAnimation } from "../animation";
import {useScroll}  from './useScroll'

export default function Home(props) {
  const[element,controls]=useScroll();


    return (
        <>
        <Section id="home">
        <Navbar />
        <motion.div className="home"
        variants={homeAnimation}
      
        transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
        >
          <div className="content">
            <div className="title">
              <h1>ArtistRoom Saloon</h1>
            </div>  
            <div className="subTitle">
              <p>
                At the Beauty Salon, we believe in beauty with a conscience. 
                We have created a salon that offers the highest quality hair 
                & beauty services.
              </p>  
            </div>

     
        
        </div>
        </motion.div>
        <motion.div className="info"
      variants={homeInfoAnimation}  
    
      transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
      >
       <div className="grid">
            <div className="col">
                <strong>Salon</strong>
                <p>ArtistRoom Unisex Salon</p>
            </div>
            <div className="col">
                <strong>Email</strong>
                <p>artistroom@gmail.com</p>
            </div> 
            <div className="col">
                <strong>Mobile</strong>
                <p>+91 9999999999</p>
            </div> 
            <div className="col">
                <strong>Address</strong>
                <p>abc, Long Fly,</p>
                <p>Amrawati India</p>
            </div> 
            <div className="col">
                <strong>Services</strong>
                <p>Hair Services</p>
                <p>Beauty Services</p>
                <p>(Unisex)</p>
            </div> 
            <div className="col">
                <strong>Working Hours</strong>
                <p>Monday to Sunday</p>
                <p>08:00 to 09:00</p>
            </div>   
          </div>
      </motion.div>
      
        
        </Section>
            
        </>
    )
}
const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:flex-start;
      width: 55%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 10rem;
      padding-left: 10rem;
      .title {
        h1 {
          align-items: flex-start;
          justify-content:flex-start;
          font-size: 6rem;
          line-height: 5.3rem;
          width: 55%;
         
        }
      }
      .subTitle {
        p {
          align-items: flex-end;
          justify-content:flex-end;
          padding-left:0;
          width: 55%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    border-radius:50px 0% 0% 50px;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
     
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;