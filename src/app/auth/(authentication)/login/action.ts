'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { LoginFormData } from '@/app/components/auth/LoginForm'

export async function login(formData: LoginFormData) {
  const supabase = await createClient()

  const data = {
    email: formData.email,
    password: formData.password,
  }  

  const { error } = await supabase.auth.signInWithPassword(data)
//  console.log(error);
 
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
