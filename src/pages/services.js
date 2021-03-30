import * as React from "react"
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
// import Teamphotosection from "../components/About/Teamphotosection"



const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="Services of our APP"
    subtitle=""
    heroclass="about-background"
    />
    <Dualinfoblock heading= "A message from Bhavya" />
    <Infoblock heading="Our Services" />
    
    
      </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "Tech.jpg" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

export default ServicePage
