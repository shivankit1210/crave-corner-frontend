// import { Box, Typography, styled } from '@mui/material'
// import React, { useEffect, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import {MdCall,MdLocationOn} from 'react-icons/md'
// import {GrMail} from 'react-icons/gr'
// import {AiFillInstagram,AiFillGoogleCircle} from 'react-icons/ai'
// import {BiLogoTwitter,BiLogoFacebook } from 'react-icons/bi'
// import {GoDotFill} from 'react-icons/go'
// import { useSelector } from 'react-redux'
// const Container=styled(Box)({
//     display:'flex',
//     flexDirection:'column',
//     margin:'50px 20px',
// })
// const Main=styled(Box)({
//     display:'flex',
//     flexDirection:'column',   
//     gap:10,
//     marginBottom:20,
// })
// const Font=styled(Typography)({
//     fontSize:15,
//     display:'flex',
//     gap:10,
//   alignItems:'center',
//     color:'rgb(248,248,248)',
//     '& > a':{
//         textDecoration:'none',
//         color:'rgb(248,248,248)',

//     }
// })
// const Heading=styled(Typography)({
//     fontSize:40,
//     color: `var(--maincol)`,
//     fontWeight:'bold'
// })
// const Lower=styled(Typography)({
//     fontSize:30,
//     color:'rgb(255,255,255)',
//     fontWeight:'bold'

// })
// const Links=styled(Box)({
//     display:'flex',
//     flexDirection:'column',
//     '&>a':{
//         display:'flex',
//         alignItems:'center',
//         textDecoration:'none',
//         color:'white',
//         gap:10,
//         '&  > svg':{
//             color:'rgb(142, 181, 11)',
//         }
//     }
// })
// const Info=styled(Typography)({
//     color:`var(--maincol)`,
//     marginLeft:25,
//     fontSize:15,
    
// })
// const Media=styled(Box)({
//     display:'flex',
//     gap:10,
//    '& > div':{
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',
//     borderRadius:10,
//     background:'rgb(255,255,255)',
//     border:'1px solid rgb(255,255,255)',
//     width:40,
//     height:40,
//     '&> a':{
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         fontSize:22,
//         color: 'rgb(37, 37, 37)'
//     }
//    }
    
// })
// const UperFooter=()=> {
//     const navigate=useNavigate();
   
//     const show=useSelector(state=>state.aboutSlice)
//     const about=useRef(null);
  
//     if(show && about.current){
//         about.current.scrollIntoView({behavior:'smooth'})
//     }
   
//     // if(show===true){
//     //     about.current.scrollIntoView({behavior:'smooth'})
//     // }
//   return (
//     <Container ref={about}>
//         {/* for established */}
//         <Main>
//         <Heading style={{textDecoration:"underline"}}>
//           Crave-Corner
//         </Heading>
//         <Font>
//         For two years, Crave Corner has graced the culinary scene of Noida, earning a reputation as an iconic destination for exceptional dining.
//         </Font>
//         </Main>

//         {/* for navigation  */}
//         {/* <Main>
//             <Lower>
//                 NAVIGATION
//             </Lower>
//             <Links>
//             <Link to='/'><GoDotFill /> Home</Link>
//             <Link onClick={()=>handleRoute(about)}><GoDotFill /> About</Link>
//             <Link to='/delivery'><GoDotFill /> Shop</Link>
//             <Link to='/services'><GoDotFill /> Services</Link>
//             </Links>

//         </Main> */}

//         {/* for contact info  */}
//         <Main>
//             <Lower>
//                 CONTACT INFO
//             </Lower>
//             {/* for addess */}
//             <Box>
//                     <Info>Restaurant Address</Info>
//                 <Font>
//                     <MdLocationOn />near Karol Bagh, Delhi
//                 </Font>
//                 <Info>Customer Service</Info>
//                 <Font>
//                     <MdCall /><a href="tel:+9520593213">+91-9675241816</a>
//                 </Font>
//                 <Font>
//                     <GrMail /><a href="mailto:shivankit1210@gmail.com">shivankit1210@gmail.com</a>
//                 </Font>
//             </Box>

//         </Main>

//         {/* follow  */}
//         <Main>       
//         <Lower >
//             DISCOVER
//         </Lower>
//         <Media>
//        <Box ><a href="#"><BiLogoFacebook /></a></Box> 
//         <Box><a href="#"><AiFillInstagram /></a></Box>
//         <Box><a href="#"><BiLogoTwitter /></a></Box>
//         <Box><a href="#"><AiFillGoogleCircle /></a></Box>
//         </Media>
//         </Main>
       
//     </Container>
//   )
// }
// export default UperFooter


import { Box, Typography, styled } from '@mui/material'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdCall, MdLocationOn } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import { AiFillInstagram, AiFillGoogleCircle } from 'react-icons/ai'
import { BiLogoTwitter, BiLogoFacebook } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
import { useSelector } from 'react-redux'

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    margin: '50px 20px',
})

const MainRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    marginBottom: '20px',
    flexWrap: 'wrap',
})

const Section = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1, // Distribute space evenly
    minWidth: '250px',
})

const Font = styled(Typography)({
    fontSize: 15,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    color: 'rgb(248,248,248)',
    '& > a': {
        textDecoration: 'none',
        color: 'rgb(248,248,248)',
    }
})

const Heading = styled(Typography)({
    fontSize: 40,
    color: `var(--maincol)`,
    fontWeight: 'bold'
})

const Lower = styled(Typography)({
    fontSize: 20,
    color: 'rgb(255,255,255)',
    fontWeight: 'bold'
})

const Links = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    '& > a': {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        gap: 10,
        '& > svg': {
            color: 'rgb(142, 181, 11)',
        }
    }
})

const Info = styled(Typography)({
    color: `var(--maincol)`,
    marginLeft: 25,
    fontSize: 15,
})

const Media = styled(Box)({
    display: 'flex',
    gap: 10,
    '& > div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        background: 'rgb(255,255,255)',
        border: '1px solid rgb(255,255,255)',
        width: 40,
        height: 40,
        '& > a': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            color: 'rgb(37, 37, 37)'
        }
    }
})

const UperFooter = () => {
    const show = useSelector(state => state.aboutSlice)
    const about = useRef(null)

    if (show && about.current) {
        about.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Container ref={about}>
            <MainRow>
                {/* Quick Links */}
                <Section>
                    <Lower>QUICK LINKS</Lower>
                    <Links>
                        <Link to="/"> Home</Link>
                        <Link to="/about"> About Us</Link>
                        <Link to="/menu"> Menu</Link>
                        <Link to="/delivery"> Delivery</Link>
                        <Link to="/contact"> Contact</Link>
                    </Links>
                </Section>

                {/* Contact Info */}
                <Section>
                    <Lower>CONTACT INFO</Lower>
                    <Box>
                        <Info>Restaurant Address</Info>
                        <Font><MdLocationOn /> near Karol Bagh, Delhi</Font>
                        <Info>Customer Service</Info>
                        <Font><MdCall /><a href="tel:+9520593213">+91-9675241816</a></Font>
                        <Font><GrMail /><a href="mailto:shivankit1210@gmail.com">shivankit1210@gmail.com</a></Font>
                    </Box>
                </Section>

                {/* Features */}
                <Section>
                    <Lower>FEATURES</Lower>
                    <Font> Online Table Book</Font>
                    <Font> Free Home Delivery</Font>
                    <Font> 24/7 Customer Support</Font>
                    <Font> Best In Quality</Font>
                </Section>

                <Section>
                <Lower>FOLLOW US</Lower>

                    <Media>
                    <Box><a href="#"><BiLogoFacebook /></a></Box>
                    <Box><a href="#"><AiFillInstagram /></a></Box>
                    <Box><a href="#"><BiLogoTwitter /></a></Box>
                    <Box><a href="#"><AiFillGoogleCircle /></a></Box>
                </Media>
                </Section>
            </MainRow>

        </Container>
    )
}

export default UperFooter
