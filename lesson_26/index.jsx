import React from 'react';
import ReactDOM from 'react-dom';

const Raw = (props) => {
    // console.log(props);
    return (
        <tr>
            <td> { props.name } </td>
            <td> { props.value } </td>
            <td> { props.suffix }</td>
       </tr>
    );
};


const Game = () => {
    return (
        
        <table style={ {background: "#f4fcffc9", fontSize: "18px"} }>
            <Raw name='&#10027; ZOO &#10027;'/>  
            <Raw name="№" value='Quantity' suffix="Animals" />  
            <Raw name="1" value={10} suffix="Elephants" />
            <Raw name="2" value={15} suffix="Lions" />
            <Raw name="3" value={30} suffix="Birds" />
            <Raw name="4" value={33} suffix="Monkeys" />
            <Raw name="5" value={42} suffix="Turtles" />
        </table>
    );
}

const Animal = (props) => {
    // console.log(props);
    return (
        <div className="myzoo">	&#10027; - <span>{ props.content + props.index }</span> </div>
    );
};


const Work = () => {
    return (  
        <div style={ {background: "#f4fcffc9", marginTop: '50px', cursor: 'pointer'} }>
            <Animal content="Opening Hours: " index='8:00-17:00' />  
            <Animal content="Holidays: " index='Saturday, Sunday' /> 
            <Animal content="Locall: " index='Str. Peremogy, 32, Kyiv' /> 
        </div>
    );
}


ReactDOM.render(
    <Game />,
    document.getElementById("root"),
);
ReactDOM.render(
    <Work />,
    document.getElementById("block"),
);