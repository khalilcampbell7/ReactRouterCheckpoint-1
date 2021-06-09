import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <Link exact to="/">
                        <li>Home</li>
                    </Link>
                    <Link exact to="/about">
                        <li>About</li>
                    </Link>
                    <Link exact to="/profiles">
                        <li>Profiles</li>
                    </Link>
                </ul>
            </nav>
        </div>

    )
}