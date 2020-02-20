import React, { useState, useEffect } from "react";
import axios from "axios";



const UpdateForm = props => {

const initialItem = {
    title: '',
    director:'',
    metascore:''
}

    const [movie, setMovie] = useState(initialItem);

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then( res => {
            console.log(res);
            setMovie(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const changeHandler = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
        .then(res => {
            
            props.history.push('/')
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                onChange={changeHandler}
                placeholder="title"
                value={movie.title}
                />
                <input
                type="text"
                name="director"
                onChange={changeHandler}
                placeholder="director"
                value={movie.director}
                />
                <input
                type="text"
                name="metascore"
                onChange={changeHandler}
                placeholder="metascore"
                value={movie.metascore}
                />
                <button>Update</button>
            </form>
        </div>
    )

}

export default UpdateForm;