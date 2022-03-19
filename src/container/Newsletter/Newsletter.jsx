import { NewsletterContainer, NewsletterLeftCol, NewsletterRightCol } from "@/components/Newsletter"
import { HeaderContainer, SectionHeader1, SectionHeader2, Wrapper } from "@/components/Utils"


const Newsletter = () => {
	return (
		<Wrapper>
			<NewsletterContainer>
				<NewsletterLeftCol>
					<h4>Subscribe Newsletter</h4>
					<h2>Lets Stay In Touch</h2>
				</NewsletterLeftCol>

				<NewsletterRightCol>
					<div>
						<label>Subscribe Now</label>
						<input type="email" placeholder="Enter your email"/>
					</div>
				</NewsletterRightCol>
			</NewsletterContainer>
		</Wrapper>
	)
}

export default Newsletter