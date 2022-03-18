import { ServiceItem, ServiceItemBody, ServiceItemHeader, ServiceItems, ServicesContainer } from "@/components/Services"
import { HeaderContainer, SectionHeader1, SectionHeader2, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Services = () => {
	return (
		<Wrapper>
			<ServicesContainer>
				<HeaderContainer>
					<SectionHeader2>Our Services</SectionHeader2>
					<SectionHeader1 weight="600">What We Do</SectionHeader1>
				</HeaderContainer>

				<ServiceItems>
					<ServiceItem>
						<ServiceItemHeader>
							<img src={images.serviceImg1} alt="service-item1" />
							<h1>01</h1>
						</ServiceItemHeader>
						
						<ServiceItemBody>
							<h4>UX Design</h4>
							<h6>Mobile App, Website</h6>
							<p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
						</ServiceItemBody>
					</ServiceItem>

					<ServiceItem>
						<ServiceItemHeader>
							<img src={images.serviceImg2} alt="service-item2" />
							<h1>02</h1>
						</ServiceItemHeader>

						<ServiceItemBody>
							<h4>Game Design</h4>
							<h6>Mobile App, Website</h6>
							<p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
						</ServiceItemBody>
					</ServiceItem>
					
					<ServiceItem>
						<ServiceItemHeader>
							<img src={images.serviceImg3} alt="service-item3" />
							<h1>03</h1>
						</ServiceItemHeader>

						<ServiceItemBody>
							<h4>Graphic Design</h4>
							<h6>Mobile App, Website</h6>
							<p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
						</ServiceItemBody>
					</ServiceItem>
					
					<ServiceItem>
						<ServiceItemHeader>
							<img src={images.serviceImg4} alt="service-item4" />
							<h1>04</h1>
						</ServiceItemHeader>

						<ServiceItemBody>
							<h4>Web Design</h4>
							<h6>Mobile App, Website</h6>
							<p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
						</ServiceItemBody>
					</ServiceItem>
					
					<ServiceItem>
						<ServiceItemHeader>
							<img src={images.serviceImg5} alt="service-item5" />
							<h1>05</h1>
						</ServiceItemHeader>

						<ServiceItemBody>
							<h4>App Design</h4>
							<h6>Mobile App, Website</h6>
							<p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
						</ServiceItemBody>
					</ServiceItem>
					
					<ServiceItem>
						<ServiceItemHeader>
							<img src={images.serviceImg6} alt="service-item6" />
							<h1>06</h1>
						</ServiceItemHeader>

						<ServiceItemBody>
							<h4>Digital Marketing</h4>
							<h6>Mobile App, Website</h6>
							<p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
						</ServiceItemBody>
					</ServiceItem>
				</ServiceItems>
			</ServicesContainer>
		</Wrapper>
	)
}

export default Services