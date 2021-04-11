
import React, { Component } from 'react';

export default class SearchBar extends Component {
    
    state = {
        search: ""
    }

    render() {
        return (
            <form>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                        onChange={(e) => this.setState({search: e.target.value})}  
                        type="text" className="form-control" 
                        placeholder="Search a movie"
                        value={this.state.search} />
                    </div>
                </div>
            </form>
        )
    }
}


    