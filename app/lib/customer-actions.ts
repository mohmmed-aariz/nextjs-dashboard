"use server"
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const FormSchema = z.object({
    // id: z.string(),
    // customerId: z.string(),
    name: z.string(),
    email: z.string(),
    // status: z.enum(['pending', 'paid']),
    // date: z.string()
})
export async function createInvoice(formData: FormData) {
    // const rawFormData = {
    // const { customerId, amount, status } = CreateInvoice.parse({
    const { name,email } = FormSchema.parse({
            // customerId: formData.get('customerId'),
        name: formData.get('customerName'),
        email: formData.get("customerEmail"),
        // status: formData.get('status'),
    });
    // const amountInCents = amount * 100;

    const firstLetter = name.charAt(0).toLowerCase();
    // console.log(firstLetter);
    const image_url = `/customers/default/icons8-circled-${firstLetter}-100.png`

    const query = await sql`
        INSERT INTO customers ( name, email, image_url)
        VALUES (${name}, ${email}, ${image_url})
        ON CONFLICT (id) DO NOTHING;
      `;


    console.log(query);
    revalidatePath('/dashboard/customers');
    redirect('/dashboard/customers');
}