import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: []
    };

    //getting data from our server/API
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data.movies})
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1>This is the read component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}

