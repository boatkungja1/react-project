const Person = (props) => {

        const person = props.person;
    // const  {img, text} = props;

    return ( 
        <div className="avatar">
        <img style={{width: "200px",}} src={person.img} alt={person.text} />
        <div className="name">{person.text}</div>
      </div>
     );
}
 
export default Person;