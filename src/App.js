import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

function App(){
    return(
       <div>
        <div>Personal Digital Assistants</div>
        <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImg} />
        <ProfileCard title='Cortana' handle='@cortana69' image={CortanaImg} />
        <ProfileCard title='Siri' handle='@siri83' image={SiriImg} />
       </div>
    )
}

export default App;