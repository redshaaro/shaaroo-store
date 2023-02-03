import React from 'react'
import style from './contact.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <p>BE IN TOUCH WITH US</p>

        </div>
        <div className={style.mid}>
            <input type="text" placeholder='Enter Your Email' />
            <button>JOIN US</button>

        </div>
        <div className={style.right}>
            <FacebookIcon style={{marginRight:"5px"}}></FacebookIcon>
            <InstagramIcon style={{marginRight:"5px"}}></InstagramIcon>
            <TwitterIcon style={{marginRight:"5px"}}></TwitterIcon>
            <EmailIcon style={{marginRight:"5px"}}></EmailIcon>
            <PinterestIcon style={{marginRight:"5px"}}></PinterestIcon>



        </div>


    </div>
  )
}

export default Contact