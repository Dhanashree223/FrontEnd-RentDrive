import React from 'react';
import Navbar from '../Navbars/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../Images/rental3.jpg';
import Img2 from '../Images/rental5.jpg';
import Img3 from '../Images/rental1.jpg';
import ServiceImg from '../Images/service.jpg';
class Home extends React.Component{
    render()
    {
        return(
             <div>
                <Navbar/>
                    <div >
                    <h1 className="text-dark text-center pt-2">Let's Hire Your Drive</h1>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Img1}
                                alt="First slide"
                                width="640"
                                height="360"
                            />
                            <Carousel.Caption>
                                <h3 >Need A Vehicle On Rent?</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Img2}
                                alt="Second slide"
                                width="640"
                                height="360"
                            />
                            <Carousel.Caption>
                             <h2>Have It On Finger Tips </h2>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={Img3}
                            alt="Third slide"
                            width="640"
                            height="360"
                            />
                            <Carousel.Caption>
                            <h3>Rent A Safe Drive</h3>
                            <p></p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <h1 className="text-primary text-center pt-2">Travel Hastle free</h1>
                    <div className="row pt-2" >
                        <div className="col-sm-4">
                            <div className="card bg-light border-dark mb-3">
                            <div class="card-header">
                                <img
                                    className="center d-block w-40"
                                    src={ServiceImg}
                                    alt="Third slide"
                                    width="50"
                                    height="50"
                                    />     
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Rent A Car Or Truck</h4>
                                    <p className="card-text">You can rent a Car as well as truck by connecting with us. Get Your Type</p>     
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card bg-light border-dark">
                            <div class="card-header">
                            <img
                                    className="center d-block w-40"
                                    src={ServiceImg}
                                    alt="Third slide"
                                    width="50"
                                    height="50"
                                    /> 
                            </div>
                                <div className="card-body">
                                    <h4 className="card-title">Get Your Favorite here</h4>
                                    <p className="card-text">We have variety of brands with us. You can choose what you want.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card bg-light border-dark">
                            <div class="card-header">
                            <img
                                    className="center d-block w-40"
                                    src={ServiceImg}
                                    alt="Third slide"
                                    width="50"
                                    height="50"
                                    /> 
                            </div>
                                <div className="card-body">
                                    <h4 className="card-title">Drive with Affordable pricing</h4>
                                    <p className="card-text">We will provide you the drive with affordable pricing.Travel with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
}
export default Home;