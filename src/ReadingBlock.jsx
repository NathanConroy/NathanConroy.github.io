/*
 * Container for text-based content.
 */
import { useMediaQuery } from 'react-responsive'

import './ReadingBlock.css';

const MOBILE_POST_MOD = 'reading-block--mobile';
const DEF_POST_MOD = 'reading-block--desktop-laptop-or-tablet';

function ReadingBlock(props) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={readingBlockStyle(isMobile)}>
      { props.children }
    </div>
  );
}

function readingBlockStyle(isMobile) {
  if (isMobile) {
    return MOBILE_POST_MOD;
  }
  return DEF_POST_MOD;
}

export default ReadingBlock;
