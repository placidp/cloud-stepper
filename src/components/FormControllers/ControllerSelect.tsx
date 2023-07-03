import { Controller } from 'react-hook-form'
import { Dropdown } from '../../shared/ui/Dropdown'
import { SexOption } from '../../shared/types'

interface ControllerSelectProps {
    placeholder?: string
    labeltext?: string
    options: any[]
    name: string
    control: any
    id?: string
    error?: any
}

export const ControllerSelect = (props: ControllerSelectProps) => {
    const { id, name, options, labeltext, placeholder, control, error } = props

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }: any) => (
                <Dropdown
                    {...field}
                    id={id}
                    name={name}
                    labeltext={labeltext}
                    options={options}
                    placeholder={placeholder}
                    value={field.value}
                    onChangeOption={(option: SexOption) => {
                        field.onChange(option.value)
                    }}
                    error={error}
                />
            )}
        />
    )
}
