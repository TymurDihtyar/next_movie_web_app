import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "@/interfaces";
import {Box, Flex, Icon, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import Link from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";

interface IProps extends PropsWithChildren {
    id: number
    name: string
}

const SubGenreLink: FC<IProps> = ({id, name}: IGenre) => {

    const hoverColor = useColorModeValue('pink.50', 'gray.900');

    return (
        <Link href={`/genres/${id}`}>
            <Box
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{bg: hoverColor}}>
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{color: 'pink.400'}}
                            fontWeight={500}>
                            {name}
                        </Text>
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon}/>
                    </Flex>
                </Stack>
            </Box>
        </Link>
    )
}

export {SubGenreLink};