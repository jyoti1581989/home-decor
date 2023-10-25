import { Carousel } from "antd"
import "./HomePage.css"

export default function HomePage() {
    return (<div>
        <Carousel autoplay>
            <div>
                <img src="/images/home-spring.png" alt="" className="contentStyle" />
            </div>
            <div>
                <img src="/images/home-summer.png" alt="" className="contentStyle" />
            </div>
            <div>
                <img src="/images/home-fall.png" alt="" className="contentStyle" />
            </div>
            <div>
                <img src="/images/home-christmas.png" alt="" className="contentStyle" />
            </div>
        </Carousel>
        <div className="about">
            <h1>About</h1>
        </div>
        <p> HomeDecor is where style lives. The best home decor website is the places we get all our inspiration...and furniture, accessories and finishing touches.
            It is the ultimate guide to decorating and design and the indispensable go-to source for everyone who wants to create a more beautiful life.
            Whether your taste is classic or contemporary—or an eclectic mix of both—you'll find items and inspiration, the latest information and products, and tools to help you decorate, renovate, and entertain stylishly.
        </p>
    </div>
    )
}