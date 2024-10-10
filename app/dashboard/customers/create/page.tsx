import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from '@/app/ui/customers/create-form';

export default function Page() {

  return <div>
    {/* Create Page */}
    <Breadcrumbs breadcrumbs={[
      {label: "Customers", href: '/dashboard/customers'},
      {
        label: "Add Customers",
        href: "/dashboard/customers/create",
        active: true,
      }
    ]}
    />

    <Form />
    {/* <Form customers={customers} /> */}
  </div>
}