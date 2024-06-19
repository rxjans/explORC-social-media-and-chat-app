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
import Actions from "./Actions";

const UserPost = ({likes, replies, postImg, postTitle}) => {
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
            {postTitle}
          </Text>
          {postImg && <Box
            borderRadius={6}
            border={"1px solid"}
            borderColor={"gray.light"}
            overflow={"hidden"}
          >
            <Image w={"full"} src={postImg} />
          </Box>}
          
          <Actions like={like} setLike={setLike} dislike={dislike} setDislike={setDislike} />

          <Flex gap={2} alignItems={'center'}>
            <Text fontSize={'sm'} color={'gray.light'}>{replies} replies</Text>
            <Box w={0.5} h={0.5} borderRadius={'full'} bg={'gray.light'}></Box>
            <Text fontSize={'sm'} color={'gray.light'}>{likes} likes</Text>
          </Flex>

        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
