import React from 'react'
import Heading from './Heading'
import { Link} from 'gatsby'
import Card from './Card'


export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
            <Heading title={heading} />
            <div className="row">
            <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
             "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum,Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage.
            </p>
            </div> 
            <div className="col-4">
            <Card  title="LearnCodeOnline" buttonText="My LCO App"/>
            
            </div>
            </div>
            </div>
        </section>
    )
}
