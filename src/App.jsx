import { Flex } from '@chakra-ui/react';

import Header from './components/Header.jsx';
import Preview from './components/Preview.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<Flex as="main" flex="auto">
				<Flex flex="auto" justify="center" align="center" p="0 2.4rem">
					<Preview />
				</Flex>
			</Flex>
			<Footer />
		</>
	);
}

export default App;
