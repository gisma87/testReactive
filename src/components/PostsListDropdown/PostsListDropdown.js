import React, {useEffect, useRef, useState} from "react";
import './PostsListDropdown.scss'
import {connect} from "react-redux";

const PostsListDropdown = props => {

  const [styleContent, setStyleContent] = useState({})
  const content = useRef(null)
  const contentWrapper = useRef(null)

  useEffect(() => {
    animate()
    // eslint-disable-next-line
  }, [props.active, props.count])

  function animate() {
    props.active
      ? setStyleContent({height: `${contentWrapper.current?.clientHeight + 15}px`})
      : setStyleContent({height: 0})
  }

  return (
    <div ref={content}
         style={styleContent}
         className={'PostsListDropdown' + (!props.active ? ' PostsListDropdown_contentDisabled' : '')}>
      <div ref={contentWrapper} className='PostsListDropdown__contentDropdown'>
        <h3 className='PostsListDropdown__title'>Посты:</h3>
        {props.postsUserActive &&
        props.postsUserActive.map(post => {
          return (
            <div className='PostsListDropdown__post' key={post.id}>
              <h4 className='PostsListDropdown__titlePost'>{post.title}</h4>
              <div className='PostsListDropdown__body'>
                {post.body}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = ({postsUserActive}) => {
  return {postsUserActive}
}

export default connect(mapStateToProps, null)(PostsListDropdown);