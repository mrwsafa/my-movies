
import React, { Component } from 'react';

export default class SearchBar extends Component {
    
    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                        onChange={this.props.searchMovieProp}  
                        type="text" className="form-control" 
                        placeholder="Search a movie"
                         />
                    </div>
                </div>
            </form>
        )
    }
}


    