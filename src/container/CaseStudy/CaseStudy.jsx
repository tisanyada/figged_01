import { useState } from "react"
import { RiShareBoxLine } from 'react-icons/ri'

import { CaseStudyContainer, CaseStudyButtons, CaseStudyItems, CaseStudyItem } from "@/components/CaseStudy"
import { Button, HeaderContainer, SectionHeader1, SectionHeader2, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const CaseStudy = () => {
	const [activeButton, setActiveButton] = useState('All')

	return (
		<Wrapper id="portfolio">
			<CaseStudyContainer>
				<HeaderContainer>
					<SectionHeader2>Our Case Study</SectionHeader2>
					<SectionHeader1 weight="600">Our Recent Project</SectionHeader1>
				</HeaderContainer>

				<CaseStudyButtons>
					{['All', 'UX Design', 'Web Design', 'App Development', 'Game Design', 'Graphic Design'].map((link, index) => (
						<Button
							key={index}
							margin="0 2px"
							padding="10px 40px"
							radius="10px"
							bgColor={`${link === activeButton ? 'orange01' : 'white'}`}
							color={`${link === activeButton ? 'white' : 'gray01'}`}
							onClick={() => setActiveButton(link)}
							className="btn"
						>{link}</Button>
					))}
				</CaseStudyButtons>

				<CaseStudyItems>
					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg1} alt="casestud-1" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg2} alt="casestud-2" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg3} alt="casestud-3" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg4} alt="casestud-4" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg5} alt="casestud-5" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg6} alt="casestud-6" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg7} alt="casestud-7" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg8} alt="casestud-8" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>

					<CaseStudyItem
						// whileInView={{ scale: [0.8, 1] }}
						whileInView={{ y: [-40, 1] }}
						transition={{ duration: 0.8 }}
					>
						<img src={images.casestudImg9} alt="casestud-9" />

						<div>
							<RiShareBoxLine size={35} />
							<h4>Web Template</h4>
						</div>
					</CaseStudyItem>
				</CaseStudyItems>
			</CaseStudyContainer>
		</Wrapper>
	)
}

export default CaseStudy