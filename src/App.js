import React from 'react';
import CommentDetail from './components/CommentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          // author={author} 
          author="Sara"
          // time={time} 
          time="Now"
          // text={text}
          text="Cool post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
