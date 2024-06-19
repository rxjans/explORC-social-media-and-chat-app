import { Flex, Text } from "@chakra-ui/react";
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";


const Actions = ({like, likes, setLike, dislike, setDislike}) => {
  return (
   <>
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
                <Text fontSize={"sm"}>{likes ? likes : 200 + (like ? 1 : 0) - (dislike ? 1 : 0)}</Text>
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
   </>
  )
}

export default Actions
