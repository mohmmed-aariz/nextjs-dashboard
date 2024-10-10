import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";


export default async function Page() {
    const customers_info = await fetchFilteredCustomers();
    return <div>
        {/* <p>Customers Page</p> */}
        <CustomersTable customers={customers_info}/>
    </div>
}