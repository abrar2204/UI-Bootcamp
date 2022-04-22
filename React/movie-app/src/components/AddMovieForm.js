import React, { useState } from "react";

import { useMovie } from "../context/MovieContext";

const AddMovieForm = ({ isAddFormVisible, setisAddFormVisible }) => {
	const {
		actions: { addMovie },
	} = useMovie();
	const [movieDetails, setMovieDetails] = useState({
		title: "",
		description: "",
		imageUrl: "",
		score: "",
		releaseDate: "",
		backDrop: "",
	});

	const formHandler = (e) => {
		setMovieDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setMovieDetails({
			title: "",
			description: "",
			imageUrl: "",
			score: "",
			releaseDate: "",
			backDrop: "",
		});
		addMovie(movieDetails);
		setisAddFormVisible(false);
	};
	return (
		<div className={isAddFormVisible ? "" : "hidden"}>
			<div className="overlay" onClick={() => setisAddFormVisible(false)}></div>
			<form onSubmit={submitHandler} className="add-movie-form">
				<label>
					Title:
					<input name="title" onChange={formHandler} />
				</label>
				<label>
					Description:
					<input name="description" onChange={formHandler} />
				</label>
				<label>
					Image URL:
					<input name="imageUrl" onChange={formHandler} />
				</label>
				<label>
					Score:
					<input name="score" onChange={formHandler} />
				</label>
				<label>
					Release Date:
					<input name="releaseDate" onChange={formHandler} />
				</label>
				<label>
					Backdrop URL:
					<input name="backDrop" onChange={formHandler} />
				</label>
				<button type="submit">Add Movie</button>
			</form>
		</div>
	);
};

export default AddMovieForm;
