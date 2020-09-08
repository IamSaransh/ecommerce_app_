import React from 'react';
import paymentIcon from '../homeAssets/payment.png'
import returnIcon from '../homeAssets/return.png'
import trustIcon from '../homeAssets/trust.png'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class SecondSection extends React.Component{
    render(){
        return(
            <section className=" second-section my-3 py-5 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="text-center">
                            <img mb-3 width="75px" height="75px" src={paymentIcon} alt="paymentIcon"/>
                            <div className="">
                             <h4>Easy payment</h4>
                             <p>The payment process is very easy to navigate </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="text-center">
                            <img mb-3 width="75px" height="75px" src={returnIcon} alt="returnIcon"/>
                            <div className="">
                             <h4>Easy return</h4>
                             <p>The return process is very easy to navigate </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                    <div className="text-center ">
                            <img mb-3 width="75px" height="75px" src={trustIcon} alt="trustIcon"/>
                            <div className="">
                             <h4>Trust Quality</h4>
                             <p>We have trusted quality products  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default SecondSection;