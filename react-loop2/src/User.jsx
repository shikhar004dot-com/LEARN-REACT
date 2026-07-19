let User=({user})=>{
    return(
        <div >
            <h3><span style={{color:"red"}}>Name:</span>{user.name}</h3>
            <h3>age: {user.age}</h3>
            <h3>email: {user.email}</h3>
        </div>
    )
}
export default User;