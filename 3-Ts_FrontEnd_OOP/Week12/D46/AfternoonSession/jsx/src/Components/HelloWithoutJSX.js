import React from 'react'

const HelloWithoutJSX = () =>{
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement("h1",null,"Hello World Without JSX"))
}

export  {HelloWithoutJSX}