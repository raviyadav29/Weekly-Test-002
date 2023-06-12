import { useState } from 'react'
import axios from "axios"

const UsersData = () => {

    const [users, setUsers] = useState([]);
    const [state, setState] = useState();

    const getData = () => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((res) => {
                console.log(res.data.results);
                setUsers(res.data.results);
                setState(res.data.results);
            })
            .catch(() => {
                alert("Failed To Fetch Users Data");
            })
    }

    return (
        <div style={{ padding: "30px" }}>
            <h2>Users Data</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, corrupti! Reprehenderit, consectetur deleniti culpa voluptatum sint a rerum dolores nam, doloremque laborum nisi temporibus velit animi recusandae! Aut dignissimos modi obcaecati molestias eius, eos maxime consequuntur delectus expedita eveniet nihil sapiente perferendis ducimus neque magnam non fugiat maiores eligendi quo facilis laudantium possimus beatae. Id, voluptate enim, quisquam blanditiis quod excepturi quae quia impedit rem repellat neque similique accusamus sed aspernatur? Consequatur est temporibus autem nesciunt vero, sed dolore quas reiciendis, nulla possimus mollitia optio, magnam distinctio maxime natus ipsam repudiandae rem ipsa velit labore. Consequuntur adipisci asperiores ea. Sit id expedita modi dolor dolorum placeat totam tempore molestias pariatur qui? Dolores provident iusto ab corrupti unde delectus ratione laboriosam officia vel laudantium! Officiis, velit. Et, modi dicta ea voluptatibus, inventore accusantium amet aperiam ratione eaque deleniti enim temporibus, cum tempora odit ipsa? Laborum nostrum delectus temporibus ullam quod accusantium nihil quis voluptatem? Laudantium, doloribus pariatur porro libero amet illo non est? Rem voluptatem repudiandae, esse aliquid repellat perferendis perspiciatis qui sunt nam illum omnis delectus hic nesciunt nostrum placeat doloremque sequi ipsam ad veniam quibusdam eaque nihil totam ea. Laborum soluta sequi repellat quo officiis quasi voluptatum dolorum consectetur?</p>
            <button onClick={getData}>Get User Data</button>

            <div style={{ width: "500px", display: "flex", justifyContent: "space-evenly", margin: "20px auto", }}>
                <div>
                    <input type='radio' name='gender' value="all" onChange={() => {
                        setUsers(state)
                    }} />All
                </div>
                <div>
                    <input type='radio' name="gender" value="male" onChange={() => {
                        setUsers(state.filter((user) => user.gender === "male"))
                    }} />Male
                </div>
                <div>
                    <input type='radio' name='gender' value="female" onChange={() => {
                        setUsers(state.filter((user) => user.gender === "female"))
                    }} />Female
                </div>
            </div>

            <table width="100%" frame="box" rules='all' style={{ textAlign: "center", margin: "20px" , backgroundColor:"black",color:"white",boxShadow:"0 0 10px black"}}>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Eamil</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((ele) => {
                            return (
                                <tr>
                                    <td>
                                        <img src={ele.picture.medium} width={100} height={100} />
                                    </td>
                                    <td>{ele.name.first}{ele.name.last}</td>
                                    <td>{ele.gender}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.location.city}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersData