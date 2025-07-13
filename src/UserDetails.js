function UserDetails(props) {
  return (
    <div>
      <p>Hello my name is {props.name}</p>
      <p> my age is {props.age}</p>
      <p> my current location is {props.location}</p>
    </div>
  );
}

export default UserDetails;
