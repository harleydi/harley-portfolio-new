import React from 'react'
import Navbar from '../components/Navbar'
import { Button, makeStyles } from '@material-ui/core'
import './Home.css'
import Footer from './Footer'


const useStyles = makeStyles({
    yellow: {
        color: '#fca311',
    }
})


export default function Home() {
    const classes = useStyles();
    

    return(
        <div className='homepage'>
            <div className='introduction'>
                <h1 className='title'></h1>
                {/* <Image src="2train.jpg" fluid /> */}
                <p className='brandStatement'>I am a motivated software engineer who is eager to expand my knowledge and connections to make a technical impact in the world. Over time, I gained skills to maintain focus and attention to detail and problem-solving skills. I have a passion for adventure and experiencing different cultures and ways of life. I plan to use these skills and dedication to help to make dynamic and user-friendly web applications and exploring the world of development.</p>
                <div className='homeButtons'>
                    <Button className={classes.yellow} variant="outlined"  href='https://www.docdroid.net/qgq3lY5/disneyharley2020-pdf'>View Resume</Button>
                    <Button className={classes.yellow} variant="outlined"  href='/portfolio'>Go to Portfolio</Button>
                </div>
            </div>
            <Footer/>
        </div>
        )
}
