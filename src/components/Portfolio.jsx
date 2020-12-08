import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './Portfolio.css'
import Footer from './Footer'
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
      width: '20rem',
      height: '15rem',
      background: '#2b2d42',
      borderBlockColor: '#fca311',
      opacity: '.8'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
    yellow: {
        color: '#fca311'
    },
    white: {
        color: 'white'
    }
  });

export default function Portfolio() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className='portfolioContainer'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h4" color="textSecondary" gutterBottom>Music World</Typography>
                    <Typography variant="caption">HTML/JS/API</Typography>
                    <Typography className={classes.white} variant="body1">A website that allows you to find your favorite artist's social media pages as well as a few random songs.</Typography>
                </CardContent>
                <CardActions>
                    <Button href="https://music-world.netlify.app/" className={classes.yellow} size="large">Website</Button>
                    <Button href="https://github.com/harleydi/Music-World" className={classes.yellow} size="large">Github</Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h4" color="textSecondary" gutterBottom>MCTS</Typography>
                    <Typography variant="caption" >React / API / Express</Typography>
                    <Typography className={classes.white} variant="body1">A website that allows you to find ACS centers in NYC via borough.</Typography>
                </CardContent>
                <CardActions>
                    <Button href="https://github.com/harleydi/MCTS" className={classes.yellow} size="large">Website</Button>
                    <Button href="https://github.com/harleydi/MCTS" className={classes.yellow} size="large">Github</Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>Expedia Eco-Friendly Clone</Typography>
                    <Typography variant="caption" >React</Typography>
                    <Typography className={classes.white} variant="body1">This is a remake of the Expedia website with eco-friendly options.</Typography>
                </CardContent>
                <CardActions>
                    <Button href="http://expedia-flying-four.herokuapp.com/" className={classes.yellow} size="large">Website</Button>
                    <Button className={classes.yellow} size="large">Github</Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h4" color="textSecondary" gutterBottom>Marshall Hub</Typography>
                    <Typography variant="caption" >React / Rails / API</Typography>
                    <Typography className={classes.white} variant="body1">A website that allows you to view and post peoples life incidents or your own.</Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.yellow} size="large">Website</Button>
                    <Button href="https://github.com/harleydi/Marshall-Hub" className={classes.yellow} size="large">Github</Button>
                </CardActions>
            </Card>
        </div>
    )
}







// class Portfolio extends Component {
//     render() {
//         const useStyles = makeStyles({
//             root: {
//               minWidth: 275,
//             },
//             bullet: {
//               display: 'inline-block',
//               margin: '0 2px',
//               transform: 'scale(0.8)',
//             },
//             title: {
//               fontSize: 14,
//             },
//             pos: {
//               marginBottom: 12,
//             },
//           });
//         return(
//             <div className='portfolio'>
//                 {/* <h1 className='portTitle'>Portfolio</h1> */}
//                 <div className='cards'>
//                 <Card className={classes.root}>
//                     <CardContent>
//                         <Typography className={classes.title} color="textSecondary" gutterBottom>
//                         Word of the Day
//                         </Typography>
//                         <Typography variant="h5" component="h2">
//                         be{bull}nev{bull}o{bull}lent
//                         </Typography>
//                         <Typography className={classes.pos} color="textSecondary">
//                         adjective
//                         </Typography>
//                         <Typography variant="body2" component="p">
//                         well meaning and kindly.
//                         <br />
//                         {'"a benevolent smile"'}
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">Learn More</Button>
//                     </CardActions>
//                 </Card>
//                     {/* <Card style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>Music World</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">HTML | JS | API</Card.Subtitle>
//                             <Card.Text>A website that allows you to find your favorite artist's social media pages as well as a few random songs.</Card.Text>
//                             <Card.Link href="https://github.com/harleydi/Music-World">Github</Card.Link>
//                             <Card.Link href="https://music-world.netlify.app/">Go to website</Card.Link>
//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>MCTS</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">React | API</Card.Subtitle>
//                             <Card.Text>A website that allows you to find ACS centers in NYC via borough.</Card.Text>
//                             <Card.Link href="https://github.com/harleydi/MCTS">Github</Card.Link>
//                             <Card.Link href="http://mymcts.surge.sh/">Go to website</Card.Link>
//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>Expedia: Eco-friendly Remake</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
//                             <Card.Text>This is a remake of the Expedia website with eco-friendly options.</Card.Text>
//                             <Card.Link href="#">Github</Card.Link>
//                             <Card.Link href="http://expedia-flying-four.herokuapp.com/">Go to website</Card.Link>
//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>Marshall Hub</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">React | API | Rails</Card.Subtitle>
//                             <Card.Text>A website that allows you to view and post peoples life incidents or your own.</Card.Text>
//                             <Card.Link href="https://github.com/harleydi/Marshall-Hub">Github</Card.Link>
//                             <Card.Link href="#">Go to website</Card.Link>
//                         </Card.Body> */}
//                     {/* </Card> */}
//                 </div>
//                 {/* <Footer /> */}
//             </div>
//         )
//     }
// }

// export default Portfolio