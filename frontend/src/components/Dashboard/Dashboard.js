import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="dashboard-icons">
            <Link to={'/customerrfqs'} className="customerrfqs">
                Customer RFQ Database
            </Link>
            <Link to={'/prosecrfqs'} className="prosecrfqs">
                Prosec RFQ Database
            </Link>
            <Link to={'/vendorquotes'} className="vendorquotes">
                Vendor Quote Database
            </Link>
            <Link to={'/prosecquotes'} className="prosecquotes">
                Prosec Quote Database
            </Link>
            <Link to={'/customerpos'} className="customerpos">
                Customer PO Database
            </Link>
            <Link to={'/prosecpos'} className="prosecpos">
                Prosec PO Database
            </Link>
            <Link to={'/prosecinvoices'} className="prosecinvoices">
                Prosec Invoice & Packing List Database
            </Link>
            <Link to={'/vendorinvoices'} className="vendorinvoices">
                Vendor Invoice Database
            </Link>
        </div>
    );
}

export default Dashboard;