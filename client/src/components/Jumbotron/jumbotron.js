import React from 'react';
import { Jumbotron} from 'reactstrap';

const JumbotronR = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 text-center">Gbooks - Created with React</h1>
        <hr className="my-2" />
        <p className="lead text-center">A place for people to Learn, Read, Save and Discover!</p>
      </Jumbotron>
    </div>
  );
};



export default JumbotronR;