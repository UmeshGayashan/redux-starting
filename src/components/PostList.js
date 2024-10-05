import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostList extends Component {
    createListItems(){
        return this.props.AllPost.map((post)=>{
            return(
                <li key={post.id}>{post.title} {post.body}</li>
            );
        });
    }
  render() {
    if(!this.props.AllPost){
        return (<h1>Click the Button First</h1>)
    }
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}


function mapStatetoProps(state){
    return{
        AllPost: state.AllPost
    };
}

export default connect(mapStatetoProps,null)(PostList)