import React from 'react'
import './Home.css'
import {Carousel} from 'react-bootstrap'


const Home = () => {
    
    return (
        <div className="caroHome">
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <h3 id="welcome">مرحبا بيكم في عالم الافلام التونسية.</h3>
    <img className="disney" src="https://pictures.artify.tn/media/ezxhsrwyexyglmoitxlh.jpg"
        alt="logo"/>
    </div>
    <Carousel style={{width:'40%',marginTop:'15px'}}>
  <Carousel.Item interval={1000}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://pictures.artify.tn/media/pk9zzstf3zx9f02n06zn.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://pictures.artify.tn/media/yosu8cmb7ufutgavj0tk.jpg"
      alt="First"
    />
      </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://pictures.artify.tn/media/xlyfdye2imqvobqsuxbo.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://pictures.artify.tn/media/zkk8raa8my6d0dpjqpvx.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
