import { FaLaptopCode } from 'react-icons/fa' // web application
import { HiOutlineMicrophone } from 'react-icons/hi'
import { TfiCamera } from 'react-icons/tfi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { TfiWrite } from 'react-icons/tfi' // writing
import { AiOutlineAndroid } from 'react-icons/ai' // mobile application
const myServices = [
  {
    name: 'Web Development',
    des: 'Blog E-commerce',
    icon: <FaLaptopCode />,
  },
  {
    name: 'Sound Design',
    des: 'Voice Over ,Beat Making',
    icon: <HiOutlineMicrophone />,
  },
  {
    name: 'UI/UX Design',
    des: 'Blog E-commerce',
    icon: <MdOutlineDesignServices />,
  },
  {
    name: 'Mobile Development',
    des: 'socila Networking, lifestyle',
    icon: <AiOutlineAndroid />,
  },
  {
    name: 'Photography',
    des: 'Protrait, Product Phototgraphy',
    icon: <TfiCamera />,
  },
  {
    name: 'Writing and Translation',
    des: 'Articles and blog Posts',
    icon: <TfiWrite />,
  },
]
const Service = () => {
  return (
    <div className='my-services'>
      <h4>My Services</h4>
      <p>
        I can help my clients maintain a strong online presence and reach their
        target audience.
      </p>
      {myServices.map(({name , des , icon}, index)=>{
        return (
          <div key={index} className='service-card'>
            {icon}
            <h4>{name}</h4>
            <p>{des}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Service
