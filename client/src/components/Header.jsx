import { useColorMode } from "@chakra-ui/react"
import { MdOutlineTravelExplore } from "react-icons/md"

const Header = () => {
    const{colorMode, toggleColorMode} = useColorMode();
  return (
    <>
        <header  className={`flex justify-center mt-6 mb-12  ${colorMode === 'light' ? 'text-black' : 'text-white'}`}>
            <MdOutlineTravelExplore onClick={toggleColorMode} className="cursor-pointer hover:text-[30px] transition-all duration-200 text-[26px]"/>
        </header>
    </>
  )
}

export default Header
