import React from "react";
import axios from "axios";

export class TasksPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }

        this.teamsAPI = axios.create({
            baseURL: process.env.REACT_APP_TICKET_URL,
            headers: { 'Content-Type': 'application/json'}
        })
    }

    componentDidMount() {
        const personId = this.props.match.params.personId;
        this.teamsAPI.get('/tickets/'+personId)
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
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
               <thead>
               { this.state.data.map((item) => (<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>)
                ) }
               </thead>
            </table> 
        </div>);
    }
}

export default TasksPage;