import * as React from "react"
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="About learncodeonline"
    subtitle=""
    heroclass="about-background"
    />
    <Dualinfoblock heading= "A message from CEO" />
    <Infoblock heading="About our vision" />
    <Teamphotosection />
    
      </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

export default AboutPage
