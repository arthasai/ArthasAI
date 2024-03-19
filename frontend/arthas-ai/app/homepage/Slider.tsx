import React, { useState } from "react";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function Slider({ slides }: { slides: any }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="h-screen w-full m-auto p-4 relative">
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className="w-full h-full rounded-2xl bg-auto bg-cover duration-500 relative">
				<div className="absolute bottom-1/4 pl-8 text-balance space-y-4">
					<h2 className="text-4xl font-semibold duration-500 w-2/3">
						{slides[currentIndex].title}
					</h2>
					<h3 className="text-xl duration-500 w-1/2">
						{slides[currentIndex].description}
					</h3>
				</div>
				{/* Left Arrow */}
				<button onClick={prevSlide} className="absolute bottom-32 left-0 pl-8">
					<IoIosArrowDropleftCircle size={60} />
				</button>
				{/* Right Arrow */}
				<button onClick={nextSlide} className="absolute bottom-32 left-14 pl-8">
					<IoIosArrowDroprightCircle size={60} />
				</button>
			</div>
		</div>
	);
}
