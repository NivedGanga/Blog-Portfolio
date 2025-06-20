import { useTheme } from '../../../hooks/ThemeProvider'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
    text: string
    id: string
}

function TopBarButton(props: Props) {
    const { text, id } = props
    const { theme } = useTheme()
    const location = useLocation()
    const navigate = useNavigate()
    const handleScroll = (id: string): void => {
        if (location.pathname !== '/') {
            console.log(location.pathname)
            navigate(`/#${id}`)
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <button className={`
        uppercase text-sm font-semibold font-mono tracking-wider hover:text-gray-400 size-fit cursor-pointer opacity-90 ${theme.isLight() && 'text-[#000000af] font-bold'}
        `} onClick={() => handleScroll(id)}>
            {text}
        </button>
    )
}

export default TopBarButton
