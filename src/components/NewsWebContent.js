import React from 'react'
import handleHtmlText from '../utils/textToHtmlFunction';

export default function NewsWebContent({data}) {

    //through data prop takes a single object of the news array to display the title and the content

    let dataDisplay;
    

    if(data){
        dataDisplay=(
            <div className="d-flex flex-column">
                
                <strong style={{textDecoration:"underline overline #9AC9FB", textDecorationThickness:"3px"}}>{data.name}</strong>
                
                <div dangerouslySetInnerHTML={handleHtmlText(data.content)}></div>
                
            </div>
        )
    }

    return (
        <div className="container p-4">
           <h2> Contenido de Novedad </h2>
            {dataDisplay}
        </div>
    )
}
