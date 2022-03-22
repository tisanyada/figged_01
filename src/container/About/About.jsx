import { AiFillCheckCircle } from 'react-icons/ai'

import { AboutContainer, AboutLeftCol, AboutRightCol } from "@/components/About"
import { Wrapper } from "@/components/Utils"
import images from '@/constants/images'


const About = () => {
	return (
		<Wrapper bgColor="orange02" id="about us">
			<AboutContainer>
				<AboutLeftCol>
					<h4>About Us</h4>
					<h2>Grow Your Business With <br /> Our Agency</h2>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus.</p>

					<div className="service-list">
						<li><AiFillCheckCircle size={20} /> Innovative website design</li>
						<li><AiFillCheckCircle size={20} /> UI/UX design with global trends</li>
						<li><AiFillCheckCircle size={20} /> Web and email hosting service</li>
					</div>
				</AboutLeftCol>

				<AboutRightCol
					// whileInView={{ x: [100, 0] }}
					whileInView={{ y: [80, 1] }}
					transition={{ duration: .8 }}
				>
					<img src={images.aboutImg} alt="aboutus-img" />
				</AboutRightCol>
			</AboutContainer>
		</Wrapper>
	)
}

export default About