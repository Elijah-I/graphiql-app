import React = require("react");

interface InputProps {
    type: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, name, placeholder, value, onChange }: InputProps) => {
    return (<>
        <input type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </>)
}