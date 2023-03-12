import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { list_three } from '../constants/Booklist';

function SectionFive() {
	const [thirdList, setThirdList] = useState([]);

	useEffect(() => {
		setThirdList(list_three);
	}, []);
	return (
		<section
			style={{
				background: '#160701',
				color: '#fff',
				marginBottom: "0",
				border: "1px solid black"
			}}
		>
			<Container>
				<h1 className="text-center fw-bolder display-3 py-5 my-3">BLOG</h1>
				<Row className="mb-3">
					{thirdList.map((item, key) => {
						return (
							<>
								<Col xs={12} md={4} key={key} >
									<Card
										className="border-0 mb-4 mb-sm-1"
										style={{
											backgroundColor: 'transparent',
										}}
									>
										<Card.Img
											variant="top"
											src={item.url}
										/>
										<Card.Body className="">
											<p>{item.date}</p>
											<Card.Text className="fs-4">
												{item.intro}
											</Card.Text>
											<a
												className="text-reset"
												href={item.externalUrl}
											>
												Read more
											</a>
										</Card.Body>
									</Card>
								</Col>
							</>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}

export default SectionFive;
