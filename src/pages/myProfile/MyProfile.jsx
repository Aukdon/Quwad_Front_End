import UserForm from "../../components/forms/userForm/userForm.jsx"

function MyProfile(){

    let data ={
        page: "profile"
    }

    return(
        <div className="grid gap-5">
            <UserForm data={data}/>

            <div className="p-5 bg-white border rounded-lg">
                <p>For any enquiries.</p>
                <p>Contact us: Email</p>
            </div>
        </div>
    )
}

export default MyProfile