import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
// import '../css/main.css';

function Footer() {
  return (
		<section
			style={{
				backgroundColor: '#FFEBE4',
				padding: '5rem 1rem 14rem 1rem',
				marginTop: "0"
			}}
		>
			<div className="text-center">
				<h5 className='mb-3'>Get Best deals in your mailbox</h5>
				<div className="d-md-flex justify-content-center">
					<div className='footer'>
						<InputGroup className="mb-3" size="lg">
							<Form.Control
								placeholder="Enter Your Email"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
								style={{
									backgroundColor: '#210A02',
									color: '#9D5338',
								}}
							/>
							<Button
								style={{
									backgroundColor: '#9D5338',
									color: '#fff',
								}}
								id="button-addon2"
							>
								Button
							</Button>
						</InputGroup>
					</div>
				</div>
				<h5 className='mt-3'>Designed by Fessburn</h5>
			</div>
		</section>
  );
}

export default Footer