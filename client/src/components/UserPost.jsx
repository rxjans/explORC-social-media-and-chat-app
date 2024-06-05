import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";

const UserPost = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  return (
    <Link to={"/rajan/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="Rajan Sharma" src="/rajan.jpg"></Avatar>
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2} />
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="John Doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding="2px"
            />
            <Avatar
              size="xs"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding="2px"
            />
            <Avatar
              size="xs"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding="2px"
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text mr={1} fontSize={"sm"} fontWeight={"bold"}>
                Rajan Sharma
              </Text>
              <MdVerified className="text-sky-600" />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>
            How I manage personal life while being a multi-millionaire
          </Text>
          <Box
            borderRadius={6}
            border={"1px solid"}
            borderColor={"gray.light"}
            overflow={"hidden"}
          >
            <Image w={"full"} src="/rxjans.png" />
          </Box>
          <Flex gap={3} my={1} alignItems={'center'}>
            <Flex gap={3} my={2} onClick={(e) => e.preventDefault()}>
              <Flex gap={1}>
                {like ? (
                  <BiSolidUpvote
                    className="text-blue-600 text-2xl "
                    onClick={() => {
                      setLike(!like);
                    }}
                  />
                ) : (
                  <BiUpvote
                    className="text-2xl"
                    onClick={() => {
                      setLike(!like);
                      setDislike(false);
                    }}
                  />
                )}
                <Text fontSize={"sm"}>{like ? "1" : "0"}</Text>
                {dislike ? (
                  <BiSolidDownvote
                    onClick={() => setDislike(!dislike)}
                    className="text-2xl text-red-500"
                  />
                ) : (
                  <BiDownvote
                    onClick={() => {
                      setDislike(!dislike);
                      setLike(false);
                    }}
                    className="text-2xl"
                  />
                )}
              </Flex>
              <FaRegComment className="text-[23px] " />
              <PiShareFatBold className="text-[23px] "/>
            </Flex>
          </Flex>

          <Flex gap={2} alignItems={'center'}>
            <Text fontSize={'sm'} color={'gray.light'}>120 replies</Text>
            <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
            <Text fontSize={'sm'} color={'gray.light'}>1249 likes</Text>
          </Flex>

        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
