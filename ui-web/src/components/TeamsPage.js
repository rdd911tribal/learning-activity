import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class TeamsPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
        console.log(process.env.REACT_APP_TEAM_URL)

        this.teamsAPI = axios.create({
            baseURL: process.env.REACT_APP_TEAM_URL,
            headers: { 'Content-Type': 'application/json'}
        })
    }

    componentDidMount() {
        this.teamsAPI.get('/teams')
        .then(response => {
            this.setState({
                data: response.data
            });
        })
        .catch((error) => console.error(error))
    }

    render() {
        return (<div>  
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                { this.state.data.map((item) => {
                    console.log(item);
                    const taskLink = "/team/" + item.id
                    return (<tr key={item.id}>
                        <td>{item.id}</td>
                        <td><Link to={taskLink}>{item.name}</Link></td>
                    </tr>)
                }) }
            </table> 
        </div>);
    }
}

export default TeamsPage;