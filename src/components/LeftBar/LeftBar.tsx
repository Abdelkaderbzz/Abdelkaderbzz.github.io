import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'
import SideBarPhoto from './../../assets/images/sidebar-photo.png'
import OneInfo from '../OneInfo/OneInfo'
import ProgressBar from '../ProgressBar/ProgressBar'
import ExtraSkills from '../ExtraSkills/ExtraSkills';
import {BsDownload} from 'react-icons/bs'
import cssVars from '@mui/system/cssVars';
const listOfInfo = {
  Age: 19,
  Residence: 'BD',
  freelance: 'Available',
  Address: 'Sousse, Tunisia',
}
const languages = {
  Arabic: '100%',
  English: '75%',
  french: '60%',
  spanich: '45%',
}
const Skills = {
  HTML: '100%',
  CSS: '80%',
  Js: '80%',
  Ts: '78%',
  Reactjs: '80%',
  Nodejs: '85%',
}
const LeftBar = () => {
  return (
    <div className='left-bar'>
      <div className='person-photo-container'>
        <img src={SideBarPhoto} alt='' />
        <h1>Rayan Adlardard</h1>
        <h4>Front-End Developer</h4>
        <div className='social-media-link'>
          <a target='_blank' href='https://facebook.com'>
            <BsFacebook />
          </a>
          <a target='_blank' href='https://instagram.com'>
            <BsInstagram />
          </a>
          <a target='_blank' href='https://linkedin.com'>
            <BsLinkedin />
          </a>
          <a target='_blank' href='https://twitter.com'>
            <BsTwitter />
          </a>
          <a target='_blank' href='https://youtube.com'>
            <BsYoutube />
          </a>
        </div>
      </div>
      <div className='person-description'>
        {Object.entries(listOfInfo).map(([key, value], index) => {
          return <OneInfo key={index} infoName={key} infoValue={value} />
        })}
      </div>
      <div className='languages-skills'>
        <div className='languages'>
          <h2>Languages</h2>

          {Object.entries(languages).map(([key, value], index) => {
            return <ProgressBar key={index} value={key} percentage={value} />
          })}
        </div>
        <div className='skills'>
          <h2>Skills</h2>

          {Object.entries(Skills).map(([key, value], index) => {
            return <ProgressBar key={index} value={key} percentage={value} />
          })}
        </div>
      </div>
      <ExtraSkills />
      <a
        href='./../../../public/CV.pdf'
        download={"CV.pdf"}
        className='btn-install'
      >
        <BsDownload />
        <p>DOWNLOAD CV</p>
      </a>
    </div>
  )
}

export default LeftBar
