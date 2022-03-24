import { BsStopwatch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { AiOutlineComment } from 'react-icons/ai'

import { BlogContainer, BlogItem, BlogItems } from "@/components/Blog"
import { Button, HeaderContainer, SectionHeader1, SectionHeader2, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Blog = () => {
	return (
		<Wrapper bgColor="orange02" id="blog">
			<BlogContainer>
				<HeaderContainer>
					<SectionHeader2>Our Blog</SectionHeader2>
					<SectionHeader1 weight={600}>Every Single Update From Here</SectionHeader1>
				</HeaderContainer>

				<BlogItems>
					<BlogItem
						whileInView={{ scale: [0.8, 1] }}
						transition={{ duration: 0.5 }}
					>
						<img src={images.blogImg1} alt="blogimg-1" />

						<div className="body">
							<h4>35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired</h4>
							<div className="tags">
								<div>
									<BsStopwatch size={13} />
									January 25, 2021
								</div>
								<div>
									<BiUser size={13} />
									Christopher Westervelt
								</div>
								<div>
									<AiOutlineComment size={13} />
									10 Comments
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
							<Button
								padding="15px 25px"
								radius="5px"
								bgColor="orange01"
								color="white"
								margin="20px 0 0 0"
								fontWeight="500"
								whileHover={{ scale: [1, .9], boxShadow: "0 0 10px #FF5300", }}
								transition={{ duration: 0.5, type: 'spring' }}
							>Read More</Button>
						</div>
					</BlogItem>
					<BlogItem
						whileInView={{ scale: [0.8, 1] }}
						transition={{ duration: 0.5 }}
					>
						<img src={images.blogImg2} alt="blogimg-2" />

						<div className="body">
							<h4>35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired</h4>
							<div className="tags">
								<div>
									<BsStopwatch size={13} />
									January 25, 2021
								</div>
								<div>
									<BiUser size={13} />
									Christopher Westervelt
								</div>
								<div>
									<AiOutlineComment size={13} />
									10 Comments
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
							<Button
								padding="15px 25px"
								radius="5px"
								bgColor="orange01"
								color="white"
								margin="20px 0 0 0"
								fontWeight="500"
								whileHover={{ scale: [1, .9], boxShadow: "0 0 10px #FF5300", }}
								transition={{ duration: 0.5, type: 'spring' }}
							>Read More</Button>
						</div>
					</BlogItem>
					<BlogItem
						whileInView={{ scale: [0.8, 1] }}
						transition={{ duration: 0.5 }}
					>
						<img src={images.blogImg3} alt="blogimg-3" />

						<div className="body">
							<h4>35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired</h4>
							<div className="tags">
								<div>
									<BsStopwatch size={13} />
									January 25, 2021
								</div>
								<div>
									<BiUser size={13} />
									Christopher Westervelt
								</div>
								<div>
									<AiOutlineComment size={13} />
									10 Comments
								</div>
							</div>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
							<Button
								padding="15px 25px"
								radius="5px"
								bgColor="orange01"
								color="white"
								margin="20px 0 0 0"
								fontWeight="500"
								whileHover={{ scale: [1, .9], boxShadow: "0 0 10px #FF5300", }}
								transition={{ duration: 0.5, type: 'spring' }}
							>Read More</Button>
						</div>
					</BlogItem>
				</BlogItems>
			</BlogContainer>
		</Wrapper>
	)
}

export default Blog