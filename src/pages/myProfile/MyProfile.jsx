import UserForm from "../../components/forms/userForm/userForm.jsx"

function MyProfile(){

    let data ={
        page: "profile"
    }

    return(
        <div>
            <UserForm data={data}/>
        </div>
    )
}

export default MyProfile