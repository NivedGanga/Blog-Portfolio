import React from 'react'

interface Props<T extends string | number | undefined> {
    name: string,
    type: "text" | "email" | "tel",
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    helperText: string | undefined
    isTouched?: boolean
    handleBlur: React.FocusEventHandler<HTMLInputElement>
    value: T,
    required?: boolean
}

function ContactTextField<T extends string | number | undefined>(props: Props<T>) {
    const { name, type, handleChange, helperText, isTouched = false, handleBlur, value, required = false } = props

    return (
        <div className='flex-1'>
            <input
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={name + (required? '*':'')}
                value={value}
                autoComplete=''
                name={name.toLowerCase()}
                className='border w-full border-[#ffffff4f] bg-[#ffffff1f] rounded-lg px-3 py-2 placeholder:text-[#ffffff7f]'
                type={type}
            />
            {
                helperText && isTouched && (
                    <p>{helperText}</p>
                )
            }
        </div>
    )
}

export default ContactTextField
