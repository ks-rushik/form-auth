'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { ISignUpFormData } from '@/app/components/auth/SignUpForm'

export async function signUp(formData: ISignUpFormData) {
  const supabase = await createClient()

 
  const Objdata = {
    email: formData.email,
    password: formData.password,
    name: formData.name,
    confirmpassword: formData.confirmpassword,
  }

  const { data , error } = await supabase.auth.signUp(Objdata)

  // console.log(data , error);
  
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/auth/login')
}
