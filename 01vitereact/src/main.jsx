import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
return(
    <div>
        <h1>Custom App</h1>
    </div>
)
}

/*const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'

}
*/
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser="uri puri"
const reactElement=React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    },
    'click me',
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    //<App />
    //MyApp()  // can be run bcs its a function but should not be used
    reactElement
    //this executes and not execute element bcs in it we have customised props which are not necessary expected by binder but here normal object is passed
)
