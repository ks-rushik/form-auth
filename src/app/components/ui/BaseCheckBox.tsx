import { Checkbox, CheckboxProps } from "@mantine/core";

type ICheckBoxProp = CheckboxProps & {
    className?:string
}

export default function BaseCheckBox(prop : ICheckBoxProp){
    const {className ,...other} = prop
    return (
        <Checkbox className={`${className}`} {...other}/>
    )
}