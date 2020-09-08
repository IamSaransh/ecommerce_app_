import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import slide1 from '../homeAssets/slide1.jpg'
import slide2 from '../homeAssets/slide2.jpg'
import slide3 from '../homeAssets/slide3.jpg'
import slide4 from '../homeAssets/Slide4.jpg'


class Carousel extends React.Component{
    render(){
        return(
            <div>
                <div>
                    {/*Carousel Wrapper*/}
                    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                        {/*Indicators*/}
                        <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to={0} className="active" />
                        <li data-target="#carousel-example-2" data-slide-to={1} />
                        <li data-target="#carousel-example-2" data-slide-to={2} />
                        <li data-target="#carousel-example-2" data-slide-to={3} />
                        </ol>
                        {/*/.Indicators*/}
                        {/*Slides*/}
                        <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view">
                            <img className="d-block w-100" src={slide1} alt="First slide" />
                            <div className="mask rgba-black-light" />
                            </div>
                            <div className="carousel-caption">
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/*Mask color*/}
                            <div className="view">
                            <img className="d-block w-100" src={slide3} alt="Second slide" />
                            <div className="mask rgba-black-strong" />
                            </div>
                            <div className="carousel-caption">
                            <h3 className="h3-responsive">Strong mask</h3>
                            <p>Secondary text</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/*Mask color*/}
                            <div className="view">
                            <img className="d-block w-100" src={slide4} alt="Second slide" />
                            <div className="mask rgba-black-strong" />
                            </div>
                            <div className="carousel-caption">
                            <h3 className="h3-responsive">Strong mask</h3>
                            <p>Secondary text</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/*Mask color*/}
                            <div className="view">
                            <img className="d-block w-100" src={slide2} alt="Third slide" />
                            <div className="mask rgba-black-slight" />
                            </div>
                            <div className="carousel-caption">
                            <h3 className="h3-responsive">Slight mask</h3>
                            <p>Third text</p>
                            </div>
                        </div>
                        </div>
                        {/*/.Slides*/}
                        {/*Controls*/}
                        <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                        </a>
                        {/*/.Controls*/}
                    </div>
                    {/*/.Carousel Wrapper*/}v
                    </div>

                                
            </div>
        )
    }
}
export default Carousel;