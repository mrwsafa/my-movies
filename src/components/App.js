import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';

const movies =[
   
]


class App extends React.Component {
    state = {
        movies: [
           
        ],

        search: "" 
        
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        this.setState({movies: response.data})

        
    }
    deleteMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movies.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !==movie.id
        )
        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (e) => {
        this.setState({searchQuery: e.target.value})

    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.indexOf(this.state.searchQuery) !== -1
            }
        )
        return (
           <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <SearchBar searchMovieProp={this.searchMovie} />
                   </div>
               </div>

               <MovieList 
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
               />
               
           </div>
            )

    }
    
}

export default App;