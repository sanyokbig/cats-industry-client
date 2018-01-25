import * as React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Routes from './routes';
import './ws/socket';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Link to="/jobs">>Jobs</Link>
                <Link to="/settings">>Settings</Link>
                <Routes/>
            </div>
        );
    }
}

export default App;
