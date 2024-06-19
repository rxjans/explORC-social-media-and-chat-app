import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import { PiShareFatBold } from "react-icons/pi"
import Comment from "../components/Comment"
import Actions from "../components/Actions"

const PostPage = () => {
  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  return (
    <>
      <Flex>
        <Flex alignItems={'center'} w={'full'} gap={3}>
          <Avatar src='/rajan.jpg' size={'md'} name='Rajan Sharma'/>
          <Flex alignItems={'center'}>
            <Text fontSize={'sm'} mr={2} fontWeight={'bold'}>Rajan Sharma</Text>
            <MdVerified  className="text-sky-600" />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={'center'} >
          <Text fontSize={'sm'} color={'gray.light'}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about money.</Text>

      <Box
            borderRadius={6}
            border={"1px solid"}
            borderColor={"gray.light"}
            overflow={"hidden"}
          >
            <Image w={"full"} src='/rxjans.png' />
      </Box>

      <Actions like={like} setLike={setLike} dislike={dislike} setDislike={setDislike} />
      
          <Flex gap={2} alignItems={'center'}>
              <Text fontSize={'sm'} color={'gray.light'}>123 replies</Text>
              <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
              <Text fontSize={'sm'} color={'gray.light'}>{436 + (like ? 1 : 0) - (dislike ? 1 : 0)} likes</Text>
          </Flex>
          <Divider my={4} />
          <Comment 
            Comment='looks really good'
            createdAt='2d'
            username='john doe'
            userAvatar='https://bit.ly/ryan-florence'
            likes={100}
          />
          <Comment 
            Comment='looks really good'
            createdAt='2d'
            username='john doe'
            userAvatar='https://bit.ly/ryan-florence'
            likes={100}
          />
          <Comment 
            Comment='looks really good'
            createdAt='2d'
            username='john doe'
            userAvatar='https://bit.ly/ryan-florence'
            likes={100}
          />
          
    </>
  )
}

export default PostPage
