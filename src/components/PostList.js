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