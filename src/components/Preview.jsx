import { Stack, Flex, Heading, Image, Text } from '@chakra-ui/react';

import meetingImg from '../assets/meeting.jpg';

function StatusItem({ label, number }) {
	return (
		<Stack
			as="li"
			gap="0.2rem"
			fontSize="1.2rem"
			textTransform="uppercase"
			sx={{
				'@media (min-width: 65em)': {
					minW: '11.2rem',
				},
			}}
		>
			<Text as="span" fontSize="2rem" fontWeight="700" color="#fff">
				{number}
			</Text>
			<Text as="span" letterSpacing="0.8px">
				{label}
			</Text>
		</Stack>
	);
}

export default function Preview() {
	const fontFamilyHeading = `'Inter', sans-serif`;

	return (
		<Flex
			as="article"
			direction="column"
			w="100%"
			maxW="42rem"
			bgColor="#1b1938"
			m="3rem 0 6rem"
			borderRadius="8px"
			overflow="hidden"
			sx={{
				'@media (min-width: 65em)': {
					flexDir: 'row-reverse',
					maxW: '111rem',
				},
			}}
		>
			<Flex
				direction="column"
				sx={{
					'@media (min-width: 65em)': {
						flexShrink: '0',
						flexBasis: '50%',
						maxW: '50%',
					},
				}}
			>
				<Flex
					direction="column"
					pos="relative"
					h="0"
					pb="76%"
					bgColor="#aa5cdb"
					sx={{
						'@media (min-width: 65em)': {
							position: 'static',
							flex: 'auto',
							height: 'auto',
							pb: '0',
						},
					}}
				>
					<Image
						src={meetingImg}
						alt="People at a meeting"
						pos="absolute"
						top="0"
						left="0"
						w="100%"
						h="100%"
						objectFit="cover"
						objectPosition="top"
						opacity=".75"
						sx={{
							'mix-blend-mode': 'multiply',
							'@media (min-width: 65em)': {
								position: 'static',
							},
						}}
					/>
				</Flex>
			</Flex>
			<Flex
				direction="column"
				p="4rem 2.4rem"
				textAlign="center"
				sx={{
					'@media (min-width: 65em)': {
						flexShrink: '0',
						flexBasis: '50%',
						maxW: '50%',
						padding: '7rem',
						textAlign: 'left',
					},
				}}
			>
				<Heading
					mb="1.6rem"
					fontFamily={fontFamilyHeading}
					fontSize="2.6rem"
					fontWeight="700"
					color="#fff"
					lineHeight="1.25"
					sx={{
						'@media (min-width: 65em)': {
							mb: '2.2rem',
							fontSize: '3.6rem',
						},
					}}
				>
					Get{' '}
					<Text as="mark" bgColor="transparent" color="#aa5cdb">
						insights
					</Text>{' '}
					that help your business grow.
				</Heading>
				<Text
					mb="3.6rem"
					sx={{
						'@media (min-width: 65em)': {
							maxW: '37rem',
							mb: '6rem',
						},
					}}
				>
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</Text>
				<Stack
					as="ul"
					gap="3rem"
					sx={{
						'@media (min-width: 65em)': {
							flexDir: 'row',
						},
					}}
				>
					<StatusItem number="10k+" label="Companies" />
					<StatusItem number="314" label="Templates" />
					<StatusItem number="12M+" label="Queries" />
				</Stack>
			</Flex>
		</Flex>
	);
}
