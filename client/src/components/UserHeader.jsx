import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { TbShare } from "react-icons/tb";

const UserHeader = () => {
    const toast = useToast();
    const copyURL = ()=>{
        const currURL = window.location.href;
        navigator.clipboard.writeText(currURL).then(()=>{
            toast({
                title: `Profile link Copied to clipboard`,
                status: 'success',
                isClosable: true,
            })
        }).catch(()=>{
            toast({
                title: `Unknown error occurred. Please try again`,
                status: 'error',
                isClosable: true,
            })
        });
    }
  return (
    <VStack gap={4} alignItems={'start'}>
        <Flex justifyContent={"space-between"} w={'full'}>
            <Box>
                <Text fontSize={"2xl"} fontWeight={'bold'}>
                    Rajan Sharma
                </Text>
                <Flex gap={2} alignItems={"center"}>
                    <Text fontSize={"sm"}>Rajan Sharma</Text>
                    <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>Github</Text>
                </Flex>
            </Box>
            <Box>
                <Avatar name="Rajan Sharma" src="/rajan.jpg" size={"xl"}/>
            </Box>
        </Flex>

        <Text>Co-founder, executive creator of explORC</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={'center'}>
                <Text color={"gray.light"}>110K followers</Text>
                <Box w={1} h={1} bg={"gray.light"} borderRadius={'full'}></Box>
                <Link color={'gray.light'}>github.com/rxjans</Link>
            </Flex>
            <Flex>
                <Box className="h-[40px] w-[40px] hover:bg-[#1e1e1e] p-[8px] rounded-full">
                    <BsInstagram size={24} cursor={'pointer'}/>
                </Box>
                <Box className="h-[40px] w-[40px] hover:bg-[#1e1e1e] p-[8px] rounded-full">
                    <Menu>
                        <MenuButton>
                            <TbShare size={24} cursor={'pointer'}/>
                        </MenuButton>
                        <Portal>
                            <MenuList bg={'gray.dark'}>
                                <MenuItem onClick={copyURL} bg={'gray.dark'}>Copy profile link</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    </VStack>
  )
}

export default UserHeader
