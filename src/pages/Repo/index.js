// import React, { Component } from 'react'
// import api from '../../services/api'


// export default class Repo extends Component {
//     state = {
//         repo:{}
//     }

//     async componentDidMount(){
//         const { login } = this.props.match.params;

//         const response = await api.get(`/users/${login}/repos`)
//         this.setState({ repo: response.data})
//         console.log(response)

//     }
    
//     render() {
//         // const { repo  } = this.state
//         return(
//             <div><h1>Repo</h1>
//             {/* <ul>
//             {repo.map(({ repo }) => (
//                 <li key={repo.id} className='repo-list'>
//                     <h3><a href={repo.html_url}>{repo.full_name}</a></h3>
//                     <div className='repo-stars'>
//                         <i className='fas fa-star'></i>
//                         {repo.stargazers_count}
//                     </div>
//                 </li>
//             ))}
//         </ul> */}
//             </div>    
//         )
//     }
// }