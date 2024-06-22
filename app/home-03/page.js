
import Layout from "@/components/layout/Layout"
import AboutUs3 from "@/components/sections/AboutUs3"
import Blog3 from "@/components/sections/Blog3"
import Counter3 from "@/components/sections/Counter3"
import FAQ3 from "@/components/sections/FAQ3"
import HeroSlider3 from "@/components/sections/HeroSlider3"
import Infomation2 from "@/components/sections/Infomation2"
import Montono3 from "@/components/sections/Montono3"
import Newsletter2 from "@/components/sections/Newsletter2"
import RoadMap3 from "@/components/sections/RoadMap3"
import Team3 from "@/components/sections/Team3"
import Technology2 from "@/components/sections/Technology2"
import Testimonial3 from "@/components/sections/Testimonial3"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2}>
                <HeroSlider3 />
                <AboutUs3 />
                <Infomation2 />
                <RoadMap3 />
                <Montono3 />
                <Team3 />
                <Technology2 />
                <Testimonial3 />
                <Counter3 />
                <Blog3 />
                <FAQ3 />
                <Newsletter2 />
            </Layout>
        </>
    )
}