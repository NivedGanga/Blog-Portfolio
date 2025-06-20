
import { topBarRoutes } from "../../utils/routes"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Switch from "./widgets/SwitchButton"
import TopBarButton from "./widgets/TopBarButton"

interface Props { }

function TopBar(props: Props) {
    const { } = props
    return (
        <div className="w-full h-24 flex justify-center items-center">
            <div className="flex-1 flex justify-center items-center gap-10 max-md:hidden">
                {
                    topBarRoutes.map((item, index) => (
                        <TopBarButton id={item.id} text={item.text} key={index} />
                    ))
                }
            </div>
            <div className="hidden max-md:flex max-md:items-start flex-1 pl-8 relative">
                <HamburgerMenu />
            </div>
            <div className="absolute right-16 max-md:right-5">
                <Switch />
            </div>
        </div>
    )
}

export default TopBar
