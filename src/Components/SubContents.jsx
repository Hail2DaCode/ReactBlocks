import React from 'react';

const SubContentsStyle = {
    width: '29.26%',
    height: '75%',
    backgroundColor: "yellow",
    border: '2px solid black',
    display: 'inline-block',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '0px'

}

const SubContents = (props) => {
    return (
        <div style={SubContentsStyle}></div>
    );
}
export default SubContents;