import { Link, useParams } from 'react-router-dom'
import { data } from '../data/server'
import '../styles/profiles.css'


export default function ProfileImage() {
    let { id } = useParams();

    return (
        <div>
            <img className='large-profile-image' src={data.contactProfiles[Number(id)].profileImage} alt={data.contactProfiles[Number(id)].profileImage}></img>
        </div>

    )
}