import React from 'react'

import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'
// the App component should render out the GifListContainer component 

class GifListContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            gifs: [],
            query: 'test'
        }
    }

    componentDidUpdate(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(data => this.setState({
                gifs: [data.data[0].images.original.url, data.data[1].images.original.url, data.data[2].images.original.url]
            }));
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            query: e.target.query.value
        })
    }

    render(){ 
        return (
            <div>
                < GifSearch onSubmit={this.handleSubmit} />
                <GifList urls={this.state.gifs}/>
            </div>
        )
  }
}

export default GifListContainer