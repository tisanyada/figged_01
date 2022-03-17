import { GlobalStyles } from './theme'
import { Navigation, Home, Blog, About, CaseStudy, Services, Testimonial, Capabilities, Footer } from '@/container/'


function App() {

	return (
		<>
			<GlobalStyles />

			<Navigation />
			<Home />
			<Services />
			<About />
			<CaseStudy />
			<Testimonial />
			<Capabilities />
			<Blog />
			<Footer />

		</>
	)
}

export default App
