import PropTypes from "prop-types";
import Link from 'next';
import React from "react";

const PostCardContent = ({ content }) => {
  return(
    <div>
      {content.split(/(#[^\s#]+)/g).map((value, index) => {
        if (value.match(/(#[^\s#]+)/g)) {
          return <Link href={`hashtag/${value.slice(1)}`} key={index}><a>{value}</a></Link>
        }
        return value;
      })}
    </div>
  )
}

// PostCardContent.propTypes = {
//   content: PropTypes.string.isRequired
// }

export default PostCardContent;