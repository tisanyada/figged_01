import { HomeContainer, HomeLeftCol, HomeRightCol } from "@/components/Home"
import { Button, Wrapper } from "@/components/Utils"
import images from "@/constants/images"


const Home = () => {
    return (
        <Wrapper bgColor="orange02" id="home">
            <HomeContainer>
                <HomeLeftCol>
                    <h1>Choose What Matters To Your Business & Your Customers.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in digni ssim euismod purus donec mus vulputate habitant iaculis. Com
                        odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>
                    <Button
                        padding="15px 25px"
                        radius="5px"
                        bgColor="orange01"
                        color="white"
                        margin="20px 0"
                        fontWeight="500"
                        whileHover={{ scale: [1, 0.9], boxShadow: "0 0 20px #FF5300", }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >Get Started Now</Button>
                </HomeLeftCol>

                <HomeRightCol
                    whileInView={{ scale: [0.8, 1, 0.9, 1] }}
                    // whileInView={{ y: [-80, 1] }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={images.homeImg} alt="home-img" />
                </HomeRightCol>
            </HomeContainer>
        </Wrapper>
    )
}

export default Home