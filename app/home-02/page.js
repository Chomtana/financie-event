
import Layout from "@/components/layout/Layout"
import AboutUs2 from "@/components/sections/AboutUs2"
import Blog2 from "@/components/sections/Blog2"
import Counter2 from "@/components/sections/Counter2"
import FAQ2 from "@/components/sections/FAQ2"
import HeroSlider2 from "@/components/sections/HeroSlider2"
import Montono2 from "@/components/sections/Montono2"
import Partners from "@/components/sections/Partners"
import Portfolio from "@/components/sections/Portfolio"
import RoadMap2 from "@/components/sections/RoadMap2"
import Speciality from "@/components/sections/Speciality"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <HeroSlider2 />
                <Speciality />
                <AboutUs2 />
                <Montono2 />
                <RoadMap2 />
                <Portfolio />
                <Team2 />
                <Counter2 />
                <Testimonial2 />
                <FAQ2 />
                <Blog2 />
                <Partners />
            </Layout>
        </>
    )
}