import { Fragment } from 'react'
import { GlobalStyles } from './theme'
import { Navigation, Home, Blog, About, CaseStudy, Services, Testimonial, Capabilities, Footer } from '@/container/'


function App() {

	return (
		<Fragment>
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
		</Fragment>
	)
}

export default App
