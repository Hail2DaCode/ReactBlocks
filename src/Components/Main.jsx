import React from 'react';

const mainStyle = {
    width: '75.2%',
    height: '70%',
    backgroundColor: "red",
    border: '2px solid black',
    display: 'inline-block',
    margin: '10px'

}

const Main = (props) => {
    return (
        <div style={mainStyle}>
            { props.children }
        </div>
    );
}
export default Main;