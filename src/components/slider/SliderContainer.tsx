
import React, {FC, PropsWithChildren} from "react";
import Link from "next/link";
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

interface IProps extends PropsWithChildren {
    sectionTitle: string;
    children?: React.ReactNode;
}

const SliderContainer: FC<IProps> = ({ sectionTitle, children }) => {

    const switchSection = (): string => {
        switch (sectionTitle) {
            case 'Top Rated':
                return '/movies/top_rated';
            case 'Now Playing':
                return '/movies/now_playing';
            case 'Upcoming':
                return '/movies/upcoming';
            default:
                return '/movies';
        }
    }

    return (
        <Box marginY={4} marginX={10} width={"90%"}>
            {sectionTitle && (
                <Flex marginX={{ base: 16, sm: 0 }} marginBottom={2} alignItems="center" >
                    <Heading
                        textTransform="uppercase"
                        letterSpacing={2}
                        fontSize={{ base: 'md', sm: 'lg' }}
                        color={'pink.400'}
                    >
                        {sectionTitle}
                    </Heading>
                    <Button
                        color={'pink.400'}
                        marginLeft="auto"
                        size={{ base: 'xs', sm: 'sm' }}
                    >
                        <Link href={switchSection()}>SEE MORE </Link>
                    </Button>
                </Flex>
            )}
            <Flex paddingX={8} paddingY={4} overflowX="scroll" overflowY="hidden" bgColor={'none'} width={"100%"}>
                <Flex
                    flexWrap="nowrap"
                    alignItems="center"
                    minHeight="250px"
                    overflowX="scroll"
                    overflow="visible"
                    gridColumnGap={6}
                >
                    {children}
                </Flex>
            </Flex>
            <Spacer height={4} />
        </Box>
    );
};

export default SliderContainer;
