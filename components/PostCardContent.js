import PropTypes from "prop-types";
import Link from 'next';

const PostCardContent = ({ content }) => {
  content.split(/(#[^\s#]+)/g).map((value) => {
    if (value.match(/(#[^\s#]+)/g)) {
      return <Link href={`hashtag/${value.slice(1)}`}><a>{value}</a></Link>;
    }
    return value;
  })
}

PostCardContent.propTypes = {
  content: PropTypes.string.isRequired
}

export default PostCardContent;