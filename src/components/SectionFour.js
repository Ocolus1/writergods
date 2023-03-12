import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import raveGod from "../img/rave-god.png"
import largeOnce from "../img/largeonce.png"
import books from "../img/books.png"

function SectionFour() {
  return (
		<section
			style={{
				backgroundColor: '#FFEBE4',
				padding: '0',
			}}
		>
			<Row>
				<Col xs={12} lg={6} className="d-lg-flex align-items-end">
					<div className="text-center text-lg-start pt-4">
						<Image
							src={raveGod}
							className=""
						/>
					</div>
					<div className="text-center text-lg-start align-self-center ms-2 mb-4 mb-sm-0">
						<div>
							<p className="display-3 fw-bolder">
								GET - 50% ON THESE TITLES
							</p>
							<a href="/" className="text-reset mt-3 mb-5">
								Explore now
							</a>
						</div>
					</div>
				</Col>
				<Col xs={12} lg={6}>
					<div>
						<div className="d-none d-md-none d-lg-block text-end ps-lg-3 ps-xl-1 d-md-flex align-items-end flex-column">
							<div class="p-2">
								<Image src={largeOnce} />
							</div>
							<div class="mt-auto p-2">
								<Image src={books} />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</section>
  );
}

export default SectionFour