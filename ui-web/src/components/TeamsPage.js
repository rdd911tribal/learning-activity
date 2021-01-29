import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class TeamsPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }

        this.teamsAPI = axios.create({
            baseURL: 'http://localhost:3001',
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
                    <th>Designation</th>
                </tr>
                { this.state.data.map((item) => {
                    const teamLink = "/team/" + item.id
                    return (<tr>
                        <td>{item.id}</td>
                        <td><Link to={teamLink}>{item.name}</Link></td>
                        <td>{item.designation}</td>
                    </tr>)
                }) }
            </table> 
        </div>);
    }
}

export default TeamsPage;