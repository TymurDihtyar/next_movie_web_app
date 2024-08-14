'use client'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    Center,
    useDisclosure,
    Input,
    IconButton, useColorMode,
} from '@chakra-ui/react'
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import Link from "next/link";
import {GenreLink} from "@/components/navbar/genres/GenreLink";
import React from "react";

export default function Navbar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const hoverColor = useColorModeValue('gray.200', 'gray.800');

    return (
        <>
            <Box px={10} zIndex={2}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box fontSize="xl" fontWeight={500} color={'pink.400'}>
                            <Link href={'/'}> FILMOTEKA </Link>
                        </Box>
                        <HStack as={'div'} spacing={4} display={{base: 'none', md: 'flex'}}>
                            <Box fontSize="xl"
                                 px={2}
                                 py={1}
                                 rounded={'md'}
                                 _hover={{
                                     textDecoration: 'none',
                                     bg: hoverColor,
                                 }}>
                                <Link href={'/movies'}>Movies</Link>
                            </Box>
                            <Box fontSize="xl"
                                 px={2}
                                 py={1}
                                 rounded={'md'}
                                 _hover={{
                                     textDecoration: 'none',
                                     bg: hoverColor,
                                 }}>
                                <GenreLink/>
                            </Box>
                            <Input variant='flushed' placeholder='Search ' size='sm' width='40' fontSize="l"/>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack as={'div'} direction={'row'} spacing={4}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                            </Button>
                            <Menu>
                                <MenuButton
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'
                                        }
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br/>
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}
                                        />
                                    </Center>
                                    <br/>
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br/>
                                    <MenuDivider/>
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'div'} spacing={4}>
                            <Box fontSize="xl"
                                 px={2}
                                 py={1}
                                 rounded={'md'}
                                 _hover={{
                                     textDecoration: 'none',
                                     bg: hoverColor,
                                 }}>
                                <Link href={'/movies'}>Movies</Link>
                            </Box>
                            <Box fontSize="xl"
                                 px={2}
                                 py={1}
                                 rounded={'md'}
                                 _hover={{
                                     textDecoration: 'none',
                                     bg: hoverColor,
                                 }}>
                                <GenreLink/>
                            </Box>
                            <Input variant='flushed' placeholder='Search ' size='sm' width='40' fontSize="l"/>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
