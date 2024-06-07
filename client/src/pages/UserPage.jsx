import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
        <UserHeader />
        <UserPost likes={2400} replies={251} postImg={'/rxjans.png'} postTitle="How I manage personal life while being a multi-millionaire"/>
        <UserPost likes={400} replies={251} postTitle="how's everyone. whats your best life experience, share your thoughts lorem ipsum askdnasuidhas asudbasuid ba asiudnasiudn asiudnuisniuasdnuaisd as aa susadasdasd a asdasd a as dasdas d"/>
        <UserPost likes={3400} replies={251} postTitle="lets play fortnite"/>
        <UserPost likes={40} replies={251} postTitle="What is the weather"/>
    </>
  )
}

export default UserPage
