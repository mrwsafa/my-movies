import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




class App extends React.Component {
    state = {
        movies: [],
        search: "" 
        
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        this.setState({ movies: response.data })
    }

    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }


    searchMovie = (e) => {
        this.setState({search: e.target.value})

    }

    
    addMovie = async (movie) => {
        await axios.post(`http://localhost:3002/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))

        this.getMovies();
    }

    editMovie = async (id, updatedMovie) => {
        await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
        this.getMovies();
    }



    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        ).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        });

        return (
            <Router>

                <div className="container">

                    <Switch>


                        <Route path="/" exact render={() => (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchMovieProp={this.searchMovie} />
                                    </div>
                                </div>


                                <MovieList
                                    movies={filteredMovies}
                                    deleteMovieProp={this.deleteMovie}

                                />
                            </React.Fragment>
                        )}>

                        </Route>

                        <Route path="/add" render={({ history }) => (

                            <AddMovie

                                onAddMovie={(movie) => {
                                    this.addMovie(movie)
                                    history.push("/")
                                }
                                }

                            />

                        )}>

                        </Route>

                        <Route path="/edit/:id" render={(props) => (

                            <EditMovie
                                {...props}
                                onEditMovie={(id, movie) => {
                                    this.editMovie(id, movie)
                                }
                                }

                            />

                        )}>

                        </Route>

                    </Switch>
                </div>

            </Router>
        )

    }


}

    


export default App;