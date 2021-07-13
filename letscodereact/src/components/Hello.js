import React from 'react';

/*
primeira froma de fazer
export default function Hello(props){
    return (<h1>{props.text}</h1>);
}

 segunda forma de fazer
export default function Hello({children}){
  return <>{children}</>;
}
*/

const Hello = ({text}) => <h1>{text}</h1>;
export default Hello;