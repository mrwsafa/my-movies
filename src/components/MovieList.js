
import React, { Component } from 'react';

export default class MovieList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.movies.map((movie) => (

                <div className="col-lg-4">
                    <div className= "card mb-4 shadow-sm">
                        <img src= "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg" className="card-img-top" alt="Sample Movie"/>
                        <div className="card-body">
                            <h5 className="card-title"> Sample Movie</h5>
                            <p className="card-text">Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge badge-info">9.0</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                ))}; 
            </div>
            
        )
    }
}

    