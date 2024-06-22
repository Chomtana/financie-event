import Layout from "@/components/layout/Layout"
import AboutUs1 from "@/components/sections/AboutUs1"
import Action1 from "@/components/sections/Action1"
import FAQ1 from "@/components/sections/FAQ1"
import HeroSlider1 from "@/components/sections/HeroSlider1"
import Montono1 from "@/components/sections/Montono1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Partners1 from "@/components/sections/Partners1"
import Portfolio1 from "@/components/sections/Portfolio1"
import RoadMap1 from "@/components/sections/RoadMap1"
import Speciality1 from "@/components/sections/Speciality1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import BlogGrid from "./blog-grid/page"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSlider1 />
                <BlogGrid />
                {/* <AboutUs1 /> */}
                {/* <Speciality1 /> */}
                {/* <Portfolio1 /> */}
                {/* <Montono1 /> */}
                {/* <RoadMap1 /> */}
                {/* <Newsletter1 /> */}
                {/* <Team1 /> */}
                {/* <Partners1 /> */}
                {/* <Testimonial1 /> */}
                {/* <FAQ1 /> */}
                {/* <Action1 /> */}
            </Layout>
        </>
    )
}