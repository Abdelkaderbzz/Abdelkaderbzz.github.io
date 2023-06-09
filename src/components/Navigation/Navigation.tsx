import { NavLink, Route } from 'react-router-dom'
import { RiHome2Fill } from 'react-icons/ri'
import { FaFileCode } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { RiQuillPenFill } from 'react-icons/ri'
import { BsMask } from 'react-icons/bs'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { FaCommentAlt } from 'react-icons/fa'
import { ReactNode, useState } from 'react'
interface NavigationProps {
  icon: string | ReactNode
  route: string
  children: React.ReactNode
}
const NavigationLink = ({
  icon = null,
  route = '/',
  children,
}: NavigationProps) => {
  const [hover, setHover] = useState<boolean>(false)
  const handlehover = () => {
    setHover(!hover)
  }
  return (
    <>
      <NavLink
        to={route}
        className='navigation_link'
        onClick={() => console.log('close sidebar')}
      >
        <div className={hover ? 'hover--icon' : 'hover--icon none'}>
          <div className='rectangel'>
            <span>{children}</span>
          </div>
          <BsFillCaretDownFill />
        </div>
        <div
          className='navigation_link__content'
          //@ts-ignore
          onMouseEnter={() => handlehover()}
          onMouseLeave={() => handlehover()}
        >
          {icon}
        </div>
      </NavLink>
    </>
  )
}

const Navigation = () => {
  return (
    <div className='all-navigation-button'>
      <div>
        <BsMask />
      </div>
      <div className='navigation__container'>
        <NavigationLink
          route='/'
          icon={<RiHome2Fill className='link_logo' />}
          children={'home'}
        ></NavigationLink>
        <NavigationLink
          route='/service'
          icon={<FaFileCode className='link_logo' />}
          children={'service'}
        ></NavigationLink>
        <NavigationLink
          route='/history'
          icon={<FaUserGraduate className='link_logo' />}
          children={'history'}
        ></NavigationLink>
        <NavigationLink
          route='/portfolio'
          icon={<MdOutlineWork className='link_logo' />}
          children={'portfolio'}
        ></NavigationLink>
        <NavigationLink
          route='/blog'
          icon={<RiQuillPenFill className='link_logo' />}
          children={'blog'}
        ></NavigationLink>
        <NavigationLink
          route='/contact'
          icon={<FaCommentAlt className='link_logo' />}
          children={'contact'}
        ></NavigationLink>
      </div>
    </div>
  )
}

export default Navigation
