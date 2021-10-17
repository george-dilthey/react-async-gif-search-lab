import React from 'react'


class GifSearch extends React.Component {
    constructor(){
        super()
        this.state = {
           
        }
    }

    

    render(){ 
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <label for="query">Search</label>
                    <input type='text'name='query'></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
  }
}

export default GifSearch