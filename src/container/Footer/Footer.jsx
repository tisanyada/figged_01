import { FaFacebookF } from 'react-icons/fa'
import {AiFillInstagram, AiFillSkype, AiOutlineTwitter} from 'react-icons/ai'

import { FooterCol, FooterContainer, FooterRow } from "@/components/Footer"
import { Logo } from "@/components/Utils"


const Footer = () => {
	return (
		<FooterContainer>
			<FooterCol>
				<Logo color="white"><span>Digi</span>ency</Logo>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor facilisi quis risus egestas ipsum.</p>
			</FooterCol>

			<FooterCol>
				<h4>Location</h4>
				<p className="content">3517 W. Gray St. Utica, Pennsylvania 57867</p>
			</FooterCol>

			<FooterCol>
				<h4>Call Us</h4>
				<p className="content">(252) 555-0126</p>
				<p className="content">info@digiency.com</p>
			</FooterCol>

			<FooterCol>
				<h4>Follow Us</h4>
				<div className="socials">
					<FaFacebookF size={40}/>
					<AiFillInstagram size={40}/>
					<AiFillSkype size={40}/>
					<AiOutlineTwitter size={40}/>
				</div>
			</FooterCol>

			<FooterRow>
				<p className="copyright">&copy; Copyright 2021. All rights reserved.</p>
				<div className="terms-policy">
					<li>Privacy Policy</li>
					<li>Terms of Use</li>
				</div>
			</FooterRow>
		</FooterContainer>
	)
}

export default Footer