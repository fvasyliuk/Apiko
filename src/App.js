import React from 'react';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import './App.css';

class App extends React.Component {


  constructor(){
    super();
    this.state={ 
      posts: [], 
      counter: 0,
      search: '',
      isLoader: true,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);    
  }
  

  handleButtonClick(){
    this.setState((state)=>({
      ...state,
      counter: state.counter + 1
    }))
  }
  handleOnChange(event){
    const search = event.target.value;
    this.setState((state)=>({
      ...state,
      counter: 1,
      search,
    }))
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json() )
      .then(json => this.setState({
        posts: json, 
        counter: 1,
        isLoader:false,
      }))
  }

  render(){
    if (this.state.isLoader){
      return <h2>Loader...</h2>
    }    

    const search= this.state.search.toUpperCase()
    let postsList;

    if (search){
      postsList = this.state.posts.filter(item => 
      item.title.toUpperCase().includes(search) 
      || item.body.toUpperCase().includes(search)
      ).slice(0, 10*this.state.counter)
    } else { postsList = this.state.posts.slice(0, 10*this.state.counter)}
    
    return (
      <div className="App">
        <input placeholder='search' onChange={this.handleOnChange} />
        <PostList posts= {postsList}/>
        <MoreButton onClick={this.handleButtonClick}/>
      </div>
    );
  }
  
} 

export default App;
