import AdminProducts from "../components/adminProducts";
import "./admin.css";

function Admin() {
    return (
        <div className="admin">
            <h1>Store Administration</h1>

            <div className="admininfo">

                <AdminProducts></AdminProducts>
                
            </div>
        </div>
    );
}

export default Admin;