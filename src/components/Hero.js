import React from 'react'
import Navbar from './Navbar';
import history from '../img/history.png';
import fiction from '../img/fiction.png';
import kidsbook from '../img/kids-book.png';
import colorbook from '../img/color-book.png';
import backgroundBlob from '../img/background-blob.png';
import "../css/main.css";


function Hero() {
  return (
		<>
			<section
				className="pt-1 pb-5"
				style={{
					background: '#160701',
					color: '#fff',
				}}
			>
				<Navbar />
				<div
					className="top_bg"
					style={{
						backgroundImage: `url(${backgroundBlob})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center ',
						backgroundSize: 'contain',
						borderRadius: '50%',
					}}
				>
					<div className="d-flex justify-content-center align-items-center">
						<h1 className="display-1 fw-bolder text-center header">
							OUR <br />
							COLLECTION
						</h1>
					</div>
					<div className="">
						<div className="text-center">
							<img
								className="img-fluid top_img"
								src={history}
								alt="history"
							/>
							<img
								className="img-fluid top_img"
								src={fiction}
								alt="fiction"
							/>
							<img
								className="img-fluid top_img"
								src={kidsbook}
								alt="kids-book}"
							/>
							<img
								className="img-fluid top_img"
								src={colorbook}
								alt="color-book"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
  );
}

export default Hero