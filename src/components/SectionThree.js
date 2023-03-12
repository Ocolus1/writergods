import React from 'react'
import { Image } from 'react-bootstrap';
import author from "../img/gideon.png"
import '../css/main.css';

function SectionThree() {
  return (
		<section
			style={{
				backgroundColor: '#160701',
				padding: '3rem 1rem',
				color: '#fff',
			}}
		>
			<div className="d-md-flex justify-content-center align-items-center">
				<div className="text-center">
					<h1 className='mb-5'>AUTHOR OF THE MONTH</h1>
					<div className="mt-3 mx-auto">
						<div className="d-md-flex justify-content-center align-items-center">
							<Image
								src={author}
								className="img-fluid"
								thumbnail={true}
							/>
							<div className="author_text mt-3 "
                            >
								<h1>GIDEON AWOLESI</h1>
								<div className=" fs-3">
									“My books are marked down because most of
									them are marked with an on the edge by the
									publisher.”
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default SectionThree