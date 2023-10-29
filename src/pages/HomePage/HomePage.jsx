import { Carousel } from "antd"
import "./HomePage.css"
import { Footer } from "antd/es/layout/layout"

export default function HomePage() {
    return (<><div className='home-page'>
        <Carousel autoplay>
            <div>
                <img src="/Images/home-spring.png" alt="" className="contentStyle" />
            </div>
            <div>
                <img src="/Images/home-summer.png" alt="" className="contentStyle" />
            </div>
            <div>
                <img src="/Images/home-fall.png" alt="" className="contentStyle" />
            </div>
            <div>
                <img src="/Images/home-christmas.png" alt="" className="contentStyle" />
            </div>
        </Carousel>
        <div className="about">
            <h1>About</h1>
        </div>
        <div className="about-text">At Home Decor, we believe that your home is your sanctuary. It's the place where you relax, unwind, and spend time with the people you love. That's why we're dedicated to helping you create a home that reflects your unique personality and style.
            We offer a wide selection of high-quality home decor products, from furniture and rugs to lighting and accessories. We also have a team of experienced interior designers who can help you create the perfect look for your home, no matter your budget or style.
            We're passionate about home decor, and we love helping our customers create homes that they love. That's why we offer a 100% satisfaction guarantee on all of our products and services.
            If you're looking for stylish and affordable home decor, visit Home Decore today. We're confident that you'll find everything you need to create a home that you love.


        </div>
    </div>
        <Footer className='footer'>Home Decor ©2023 Created by Jyoti Vaishnav</Footer>
    </>
    )
}