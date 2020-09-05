import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import Footer from './Footer'

class Portfolio extends Component {
    render() {
        return(
            <div className='portfolio'>
                {/* <h1 className='portTitle'>Portfolio</h1> */}
                <div className='cards'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Music World</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | JS | API</Card.Subtitle>
                            <Card.Text>A website that allows you to find your favorite artist's social media pages as well as a few random songs.</Card.Text>
                            <Card.Link href="https://github.com/harleydi/Music-World">Github</Card.Link>
                            <Card.Link href="https://music-world.netlify.app/">Go to website</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>MCTS</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React | API</Card.Subtitle>
                            <Card.Text>A website that allows you to find ACS centers in NYC via borough.</Card.Text>
                            <Card.Link href="https://github.com/harleydi/MCTS">Github</Card.Link>
                            <Card.Link href="http://mymcts.surge.sh/">Go to website</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Expedia: Eco-friendly Remake</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
                            <Card.Text>This is a remake of the Expedia website with eco-friendly options.</Card.Text>
                            <Card.Link href="#">Github</Card.Link>
                            <Card.Link href="http://expedia-flying-four.herokuapp.com/">Go to website</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Marshall Hub</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React | API | Rails</Card.Subtitle>
                            <Card.Text>A website that allows you to view and post peoples life incidents or your own.</Card.Text>
                            <Card.Link href="https://github.com/harleydi/Marshall-Hub">Github</Card.Link>
                            <Card.Link href="#">Go to website</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Portfolio