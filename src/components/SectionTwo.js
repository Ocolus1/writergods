import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {list_one, list_two} from "../constants/Booklist"

function SectionTwo() {
    const [firstList, setFirstList] = useState([])
    const [secondList, setSecondList] = useState([])

    useEffect(() => {
        setFirstList(list_one)
        setSecondList(list_two)
    },[])
  return (
		<section
			style={{
				backgroundColor: '#FFEBE4',
                padding: "1rem 1rem 3rem 1rem"
			}}
		>
			<Container>
				<h1 className="text-center fw-bolder display-3 py-5">
					BEST DEALS
				</h1>
				<Row className="mb-3">
					{firstList.map((item, key) => {
						return (
							<>
								<Col xs={12} md={4} key={key}>
									<Card className="border-0" style={{backgroundColor: "transparent"}}>
										<Card.Img
											variant="top"
											src={item.url}
										/>
										<Card.Body className="text-center">
											<p>{item.bookType}</p>
											<Card.Title>
												{item.bookTitle}
											</Card.Title>
											<Card.Text>
												${item.newPrice} USD
												<span className="text-decoration-line-through ms-2">
													${item.oldPrice} USD
												</span>
											</Card.Text>
											<a
												className="nav-link"
												href={item.externalUrl}
											>
												Visit Page
											</a>
										</Card.Body>
									</Card>
								</Col>
							</>
						);
					})}
				</Row>
				<Row className="mt-5">
					{secondList.map((item, key) => {
						return (
							<>
								<Col xs={12} sm={6} md={3} key={key}>
									<Card
										className="border-0"
										style={{
											backgroundColor: 'transparent',
										}}
									>
										<Card.Img
											variant="top"
											src={item.url}
										/>
										<Card.Body className="text-center">
											<p>{item.bookType}</p>
											<Card.Title>
												{item.bookTitle}
											</Card.Title>
											<Card.Text>
												${item.newPrice} USD
												<span className="text-decoration-line-through ms-2">
													${item.oldPrice} USD
												</span>
											</Card.Text>
											<a
												className="nav-link"
												href={item.externalUrl}
											>
												Visit Page
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

export default SectionTwo