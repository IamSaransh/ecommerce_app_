import React from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './homeAssets/home.css'
import Carousel  from './Components/Carousel'
import SecondSection from './Components/SecondSection'
import Sidebar from './Components/Sidebar'
import CoronaBar from './homeAssets/bar.png'
import SideImage from './homeAssets/sideimage.png'
import Abc1 from './homeAssets/abc1.png'
import Abc2 from './homeAssets/abc2.png'
import HomeItem from './HomeItem'
// import the data from server without worryig about child parent nesting!
import AppContext from './AppContext'



class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                {/* //gredient with class gred 1*/}
                <div id="grad1"></div>
                
                <div className ="container-fluid m-0 p-0">
                    <Sidebar/>
                </div>
                

                

                <section className="first-section mt-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 p-0">
                                <Carousel/>
                            </div>
                            <div className="col-4 p-0 mt-1">
                                <img src={SideImage} height="100%" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <img  src={CoronaBar} alt="corona bar"/>
                </div>
                <div>
                    <img  src={Abc1} alt="corona bar"/>
                </div>
                <SecondSection/>
               
                <section className= "third-section">
                   <div className="container">
                   <div className="row">
                        {   
                            this.context.products.map((product,index) => 
                                <HomeItem product={product} key={index}/>
                                
                            )
                        }
                        
                    </div>
                   </div>
                </section>
                <div>
                    <img  src={Abc2} alt="corona bar"/>
                </div>

                <Footer/>
                
                
                
            </div>
            
        )
    }
}

Home.contextType = AppContext
export default Home;