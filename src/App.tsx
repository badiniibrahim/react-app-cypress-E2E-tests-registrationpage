import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { PostFormInput } from './types'

const App = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name  can't be empty"),
    lastName: Yup.string().required("Last name can't be empty"),
    age: Yup.string().required("Age can't be empty"),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PostFormInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  })

  const onSubmitClick = (data: PostFormInput) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center mt-[90px]">
      <>
        <h2>Create User</h2>
        <form className="flex flex-col w-[300px]" onSubmit={handleSubmit(onSubmitClick)}>
          <label className="text-[10px] text-black">First Name</label>
          <input
            {...register('firstName')}
            data-cy="first-name-input"
            type="text"
            placeholder="First name"
            className="rounded-sm px-1 placeholder:text-[10px] text-[10px] h-[25px] border-2 border-indigo dark:bg-white dark:text-black "
          />
          <span data-cy="error-first-name" className="text-[10px] text-red-600">
            {errors.firstName?.message}
          </span>

          <label className="text-black text-[10px] pt-2">Last name</label>
          <input
            placeholder="Last name"
            {...register('lastName')}
            data-cy="last-name-input"
            type="text"
            className="border-2 border-indigo dark:bg-white rounded-sm px-1 placeholder:text-[10px] text-[10px] h-[25px]  dark:text-black"
          />
          <span data-cy="error-last-name" className="text-[10px] text-red-600">
            {errors.lastName?.message}
          </span>

          <label className="text-black text-[10px] pt-2">Age</label>
          <input
            placeholder="Age"
            {...register('age')}
            type="text"
            data-cy="age-input"
            className="border-2 border-indigo dark:bg-white rounded-sm px-1 placeholder:text-[10px] text-[10px] h-[25px]  dark:text-black"
          />
          <span data-cy="error-age" className="text-[10px] text-red-600">
            {errors.lastName?.message}
          </span>

          <button
            data-cy="submit"
            type="submit"
            className="mt-4 bg-yellow-400 rounded-sm text-xs h-7"
          >
            Create user
          </button>
        </form>
      </>
    </div>
  )
}

export default App
