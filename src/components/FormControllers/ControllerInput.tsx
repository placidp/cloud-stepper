import { Controller } from 'react-hook-form'
import { Input } from '../../shared/ui/Input'

interface ControllerInputProps {
    id?: string
    name: string
    placeholder?: string
    labeltext?: string
    control: any
    type?: string
    theme?: string
    error?: any
}

export const ControllerInput = (props: ControllerInputProps) => {
    const { name, placeholder, labeltext, control, id, type, theme, error } =
        props

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=''
            render={({ field }: any) => (
                <Input
                    {...field}
                    type={type}
                    id={id}
                    labeltext={labeltext}
                    placeholder={placeholder}
                    value={field.value}
                    theme={theme}
                    onChange={(value) => {
                        field.onChange(value)
                    }}
                    error={error}
                />
            )}
        />
    )
}
