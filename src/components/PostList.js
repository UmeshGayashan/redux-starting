import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPost } from '../actions/postAction';
import { bindActionCreators } from 'redux'

class PostList extends Component {
    createListItems(){
        return this.props.AllPost.map((post)=>{
            return(
                <li key={post.id} onClick={()=>this.props.selectPost(post)}>{post.title} {post.body}</li>
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
        AllPost: state.all_Posts
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPost:selectPost},dispatch)

}

export default connect(mapStatetoProps,matchDispatchToProps)(PostList)