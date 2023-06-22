import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class App extends Component {
	state = {
		textSearch: '',
	};

	handleSubmit = textSearch => {
		this.setState({ textSearch });
	};

	render() {
		const { textSearch } = this.state;
		return (
			<div>
				<Searchbar onSubmit={this.handleSubmit} />
				<div>
					<ImageGallery value={textSearch} />
				</div>
				<ToastContainer transition={Slide} draggable={60} />
			</div>
		);
	}
}
