import React from 'react'


class GifList extends React.Component {
    constructor(){
        super()
        this.state = {
           
        }
    }

    

    render(){ 
        return (
            <ul>
                <li><img src={this.props.urls[0]}></img></li>
                <li><img src={this.props.urls[1]}></img></li>
                <li><img src={this.props.urls[2]}></img></li>
            </ul>
        )
  }
}

export default GifList