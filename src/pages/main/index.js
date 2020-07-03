import React, { Component} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './styles.css'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            details:[],
            usersInfo: [],
            page: 1,
            loading: false
        }
      }

    loadUsers = async (page = 1) => {
        this.setState({
            loading: true
          })
        const name = this.refs.name.value;
        
        const response = await api.get(`/search/users?q=${name}&page=${page}`)
        const { items, ...usersInfo } = response.data
        this.setState({ users: items, ...usersInfo, page })
        this.loadDetails()
        
    };

    loadDetails = async () => {
      this.setState({
          loading: true
        })
      const name = this.refs.name.value;

      const responseDetails = await api.get(`/users/${name}`)
      this.setState({ details: responseDetails.data })
      
  };

  // usersDetails = () => {
  //   return (
  //     <ul>
  //       {this.state.details.map(detail => (
  //             <li key={detail.id} className='list'>
  //              followers: {detail.followers}
  //              following: {detail.following} 
  //              public_repos: {detail.public_repos}   
  //             </li>
  //         ))}
  //     </ul>
  //   )
  // };

    prevPage = () => {
        const { page } = this.state;
    
        if(page === 1) return;
        
        const pageNumber = page - 1;
    
        this.loadProducts(pageNumber);
      };
    
      nextPage = () => {
        const { page, usersInfo } = this.state;
    
        if(page === usersInfo.pages) return;
        
        const pageNumber = page + 1;
    
        this.loadUsers(pageNumber);
      };

    render(){
        const { users, page, usersInfo, details } = this.state;
        return(
            <div>
            <div className='section-search'>
            <div id='search-bar'>
                  <input type='text' placeholder='Digite um User Name' ref='name'/>
                  <button className='search-btn' onClick={this.loadUsers}><i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
            </div>
            <div className="users-list">
                {users.map(users => (
                    <article key={users.id}>
                        <div>
                            <img alt="foto do perfil do usuario git hub" src={users.avatar_url}></img>
                            <strong>{users.login}</strong>
                        </div>
                        <Link to={`/users/${users.login}/repos`}> Acessar Detalhes </Link>
                    </article>
                ))}
                  <div className="actions">
                    <button disabled={page === 1 || users.length === 0 } onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === usersInfo.pages || users.length === 0} onClick={this.nextPage}>Próximo</button>
                  </div>
            </div>
            </div>
        )
    }
}