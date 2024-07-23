import { extendTheme, ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './components/Header.jsx';
import Preview from './components/Preview.jsx';
import Footer from './components/Footer.jsx';

const brand = {
	fontFamily: `'Inter', sans-serif`,
	colors: {
		darkblue: 'hsl(233, 47%, 7%)',
		darkdesaturatedblue: 'hsl(244, 38%, 16%)',
		softviolet: 'hsl(277, 64%, 61%)',
		white: 'hsl(0, 0%, 100%)',
		whiteAlpha600: 'hsla(0, 0%, 100%, 0.6)',
		whiteAlpha700: 'hsla(0, 0%, 100%, 0.75)',
	},
	lineHeight: 1.73,
};

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: brand.colors.darkblue,
				color: brand.colors.whiteAlpha600,
				lineHeight: brand.lineHeight,
			},
		},
	},
	fonts: {
		body: brand.fontFamily,
		heading: brand.fontFamily,
	},
	colors: {
		brand: brand.colors,
	},
});

function App() {
	return (
		<ChakraProvider resetCSS={false} theme={theme}>
			<Header />
			<Flex as="main" flex="auto">
				<Flex flex="auto" justify="center" align="center" p="0 2.4rem">
					<Preview />
				</Flex>
			</Flex>
			<Footer />
		</ChakraProvider>
	);
}

export default App;
