import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './index.css'

export default class User extends Component {
    state = {
        users: {},
        repo:[]
    }

    async componentDidMount(){
        const { login } = this.props.match.params;

        const response = await api.get(`/users/${login}`)
        this.setState({ users: response.data})

        const responseData = await api.get(`/users/${login}/repos`)
        this.setState({ repo: responseData.data})


    }
    
    render() {
        const { users, repo  } = this.state
        console.log(repo)
        return(
            <div className="user-card">
                <div className="user-profile">
                    <img className="user-image" alt="foto do perfil do usuario git hub" src={users.avatar_url}></img>
                    <strong className="user-name">{users.login}</strong>
                    </div>
                <div className="user-details">
                    <p><strong>followers: </strong> {users.followers}</p>
                    <p><strong>following: </strong>{users.following}</p>
                    <p><strong>public_repos: </strong>{users.public_repos}</p>
                </div>

                  <div className="user-repos">
                    <h1>Repositorios</h1>
                    <div className="repos">
                        <ul>
                        {repo.map(repos => (
                            <li key={repos.id} className='repos-list'>
                                <h3><a href={repos.html_url}>{repos.full_name}</a></h3>
                                <div className='repos-stars'>
                                    <i className='fas fa-star fa fa-search'></i>
                                    {repos.stargazers_count}
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <Link className= "btn-back" to={`/`}> VOLTAR </Link>
                </div>
            </div>    
        )
    }
}