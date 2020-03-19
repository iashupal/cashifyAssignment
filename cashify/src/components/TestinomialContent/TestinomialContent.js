import React from 'react'
import './TestinomialContent.css';

function TestinomialContent(props){
    return(
        <div className="testinomial__content">
            <img src={require("../../assets/images/invertedCots.svg")} alt="Testinomial"/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <h4>Nina Margaret</h4>
            <p>CEO, Abc Company</p>
        </div>
    )
}
export default TestinomialContent;