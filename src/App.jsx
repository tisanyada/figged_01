import { ThemeProvider } from "styled-components"

import { theme } from './theme'
import Navigation from '@/components/Navigation'
import { Home, Blog, About, CaseStudy, Services, Testimonial, Capabilities, Footer } from '@/container/'


function App() {

	return (
		<ThemeProvider theme={theme}>

			<Navigation />
			<Home />
			<Services />
			<About />
			<CaseStudy />
			<Testimonial />
			<Capabilities />
			<Blog />
			<Footer />

		</ThemeProvider>
	)
}

export default App
