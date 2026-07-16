function User({props}){
    return(
        <div>
            <h2>User component</h2>
            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
            <h4>{props.email}</h4>
            <hr></hr>
        </div>
    )
}
// function User({name,age,email}){
//     return (
//         <div>
//             <h2>User Component</h2>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//             <h4>{email}</h4>

//         </div>
//     )
// }
export default User;