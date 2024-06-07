import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import { PiShareFatBold } from "react-icons/pi"

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

      <Flex gap={3} my={1} alignItems={'center'}>
            <Flex gap={3} my={2} onClick={(e) => e.preventDefault()}>
              <Flex gap={1}>
                {like ? (
                  <BiSolidUpvote
                    className="text-blue-600 text-xl "
                    onClick={() => {
                      setLike(!like);
                    }}
                  />
                ) : (
                  <BiUpvote
                    className="text-xl"
                    onClick={() => {
                      setLike(!like);
                      setDislike(false);
                    }}
                  />
                )}
                <Text fontSize={"sm"}>{436 + (like ? 1 : 0) - (dislike ? 1 : 0)}</Text>
                {dislike ? (
                  <BiSolidDownvote
                    onClick={() => setDislike(!dislike)}
                    className="text-xl text-red-500"
                  />
                ) : (
                  <BiDownvote
                    onClick={() => {
                      setDislike(!dislike);
                      setLike(false);
                    }}
                    className="text-xl"
                  />
                )}
              </Flex>
              <FaRegComment className="text-xl " />
              <PiShareFatBold className="text-xl "/>
              </Flex>
          </Flex>
          <Flex gap={2} alignItems={'center'}>
              <Text fontSize={'sm'} color={'gray.light'}>123 replies</Text>
              <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
              <Text fontSize={'sm'} color={'gray.light'}>{436 + (like ? 1 : 0) - (dislike ? 1 : 0)} likes</Text>
          </Flex>
          <Divider my={4} />

    </>
  )
}

export default PostPage
