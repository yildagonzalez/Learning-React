import React from 'react'
// component using ES6 class syntax
class HelloWorld extends React.Component{
    render() {
        return (
        <h1>Hello {this.props.name}</h1> 
        )
    
    }
}
export default HelloWorld
