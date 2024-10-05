import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowPost extends Component {
  render() {
    if(!this.props.selectedPost){
        return null
    }
    return (
      <div>
        <h2>User ID : {this.props.selectedPost.userId}</h2>
        <h2>Title : {this.props.selectedPost.title}</h2>
        <h2>Body : {this.props.selectedPost.body}</h2>
      </div>
    )
  }
}

function mapStatetoProps(state){
    return{
        selectedPost: state.selectedPost
    };
}

export default connect(mapStatetoProps,null)(ShowPost)
