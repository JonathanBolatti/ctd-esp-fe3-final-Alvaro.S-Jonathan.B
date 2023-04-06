import React from 'react'

import { TextCard, H2, H3, Span, CardContanier } from '../Styles/StyleComponents'


export const PopUp = (props) => {
    return (
       
         <CardContanier>
            <TextCard>
                <H2> ¡ Thank you {props.name} !</H2>
                <H3> We received your inquiry, shortly we will contact you by email <Span> {props.email} </Span></H3>
            </TextCard>
        </CardContanier>


    )
}
