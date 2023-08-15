import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App() {
    const handleClick = () => {
        console.log('Button was clicked!');
    };


    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                    Personal Digital Assistant
                    </p>
                </div>
            </section>
        
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard title='Alexa'
                            handle='@alexa99'
                            image={AlexaImg}
                            description="Adipisicing deserunt labore mollit Lorem incididunt duis pariatur nisi est officia."
                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title='Cortana' handle='@cortana69' image={CortanaImg}
                            description="Nulla deserunt do pariatur aliquip duis ex laborum amet. Nostrud elit aute dolore proident aliqua pariatur veniam occaecat."
                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title='Siri' handle='@siri83' image={SiriImg}
                            description="Sit dolore qui tempor occaecat nulla culpa nisi. Eiusmod nulla mollit consectetur sint eiusmod adipisicing enim ad do nisi aute velit sint non."
                            />
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <button className='button is-link is-rounded' onClick={handleClick}>Add Animal</button>
            </div>

        </div>
    )
}

export default App;