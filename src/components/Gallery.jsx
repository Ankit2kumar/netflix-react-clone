import React from 'react';
import {
	Container,
	Row,
	Col,
	Dropdown,
	Button,
	ButtonGroup,
} from 'react-bootstrap';
class Gallery extends React.Component {
	state = {};
	componentDidMount() {
		window.onload = async () => {
			const response = await fetch(
				'http://www.omdbapi.com/?apikey=fcb31e8f&s=harry%20potter'
			);

			const data = await response.json();
			console.log(data.Search);
			data.Search.map((movie) => (
				<Col>
					<div className="card text-white bg-dark mb-3">
						<img
							src={movie.Poster}
							className="card-img-top"
							alt="..."
							style={{ height: 330 }}
						/>
						<div className="card-body">
							<h5 className="card-title">{movie.Title}</h5>
							<p className="card-text">{movie.Type}</p>
							<a
								href="#"
								className="btn btn-primary rounded-circle float-right"
							>
								<ion-icon name="play-outline" />
							</a>
						</div>
					</div>
				</Col>
			));
		};
	}
	render() {
		return (
			<>
				<Container>
					<Row className="text-white">
						<Col xs={6} lg={5} className="mx-0 px-0">
							TV SHOWS
						</Col>
						<Col xs={6} lg={5} className="mr-auto">
							<Dropdown as={ButtonGroup}>
								<Button variant="dark">Split Button</Button>

								<Dropdown.Toggle
									split
									variant="dark"
									id="dropdown-split-basic"
								/>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">
										Another action
									</Dropdown.Item>
									<Dropdown.Item href="#/action-3">
										Something else
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
						<Col xs={6} lg={1}>
							1 of 1
						</Col>
						<Col xs={6} lg={1}>
							1 of 1
						</Col>
					</Row>
					<Row>
						<Col id="trending">Trending Now</Col>
					</Row>
					<Row></Row>
				</Container>
			</>
		);
	}
}

export default Gallery;
