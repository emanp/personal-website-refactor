
import {Avatar} from "@heroui/avatar"; 

interface INavbarAvatarProps {
    imgSrc: string,
    href: string,
    styling?: string

}

export default function NavbarAvatar({imgSrc, href, styling}: INavbarAvatarProps ){
    return (
        <div>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <Avatar showFallback name="test" src={imgSrc} />
            </a>
        </div>
    )
}

