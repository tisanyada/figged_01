import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { MdStar, MdStarHalf } from 'react-icons/md'

import { NextBtn, PrevBtn, TestimonialCarousel, TestimonialContainer } from "@/components/Testimonial"
import { HeaderContainer, SectionHeader1, SectionHeader2, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Testimonial = () => {

	const sliderSettings = {
		infinite: true,
		speed: 800,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			}
		]
	}

	return (
		<Wrapper bgColor="orange02">
			<TestimonialContainer>
				<HeaderContainer>
					<SectionHeader2>Our Testimonial</SectionHeader2>
					<SectionHeader1 weight="600">What Our Clients Are Saying</SectionHeader1>
				</HeaderContainer>


				<TestimonialCarousel>
					<Slider
						{...sliderSettings}
						prevArrow={
							<PrevBtn>
								<BsArrowLeftCircle />
							</PrevBtn>
						}
						nextArrow={
							<NextBtn>
								<BsArrowRightCircle />
							</NextBtn>
						}
					>
						<div>
							<div className="stars">
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStarHalf size={25} />
							</div>

							<p className="text">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>

							<div className="user">
								<div>
									<img src={images.testimonialImg1} alt="testimonial-1" />
									<p>Lauren Lavin <br /> <span>CEO / Creative IT</span></p>
								</div>
								<img src={images.quotesImg} alt="quotes" />
							</div>
						</div>

						<div>
							<div className="stars">
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStarHalf size={25} />
							</div>

							<p className="text">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>

							<div className="user">
								<div>
									<img src={images.testimonialImg2} alt="testimonial-2" />
									<p>Lauren Lavin <br /> <span>CEO / Creative IT</span></p>
								</div>
								<img src={images.quotesImg} alt="quotes" />
							</div>
						</div>

						<div>
							<div className="stars">
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStarHalf size={25} />
							</div>

							<p className="text">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>

							<div className="user">
								<div>
									<img src={images.testimonialImg3} alt="testimonial-3" />
									<p>Lauren Lavin <br /> <span>CEO / Creative IT</span></p>
								</div>
								<img src={images.quotesImg} alt="quotes" />
							</div>
						</div>

						<div>
							<div className="stars">
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStar size={25} />
								<MdStarHalf size={25} />
							</div>

							<p className="text">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>

							<div className="user">
								<div>
									<img src={images.testimonialImg2} alt="testimonial-2" />
									<p>Lauren Lavin <br /> <span>CEO / Creative IT</span></p>
								</div>
								<img src={images.quotesImg} alt="quotes" />
							</div>
						</div>
					</Slider>
				</TestimonialCarousel>
			</TestimonialContainer>
		</Wrapper>
	)
}

export default Testimonial