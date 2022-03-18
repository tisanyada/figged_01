import { CapabilitiesContainer, CapabilitiesCTA, CapabilitiesCTAItem, CapabilitiesLeftCol, CapabilitiesRightCol } from "@/components/Capabilities"
import { Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Capabilities = () => {
	return (
		<Wrapper>
			<CapabilitiesContainer>
				<CapabilitiesLeftCol>
					<h4>Our Capabilities</h4>
					<h2>Forward Thinking Team Of <br /> Designers & Developers</h2>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae purus felis eget massa felis. Eu mattis in malesuada facilisi proin vel.</p>

					<div className="capabilities">
						<div className="capability">
							<h1>80%</h1>
							<p>Software <br /> Development</p>
						</div>
						<div className="capability">
							<h1>90%</h1>
							<p>Graphic Design</p>
						</div>
						<div className="capability">
							<h1>85%</h1>
							<p>Game Design</p>
						</div>
						<div className="capability">
							<h1>100%</h1>
							<p>Web Development</p>
						</div>
					</div>
				</CapabilitiesLeftCol>

				<CapabilitiesRightCol>
					<img src={images.capabilitiesImg} alt="capabilities" />
				</CapabilitiesRightCol>
			</CapabilitiesContainer>

			<CapabilitiesCTA>
				<CapabilitiesCTAItem>
					<img src={images.ctaImg1} alt="cta-1" />
					<h2>120</h2>
					<p>Top Experts</p>
				</CapabilitiesCTAItem>
				<CapabilitiesCTAItem>
					<img src={images.ctaImg2} alt="cta-2" />
					<h2>500</h2>
					<p>Strategies</p>
				</CapabilitiesCTAItem>
				<CapabilitiesCTAItem>
					<img src={images.ctaImg3} alt="cta-3" />
					<h2>347</h2>
					<p>Great Results</p>
				</CapabilitiesCTAItem>
				<CapabilitiesCTAItem className="last-item">
					<img src={images.ctaImg4} alt="cta-4" />
					<h2>120</h2>
					<p>Height Rankings</p>
				</CapabilitiesCTAItem>
			</CapabilitiesCTA>
		</Wrapper>
	)
}

export default Capabilities