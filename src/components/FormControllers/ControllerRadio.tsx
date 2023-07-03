import { Controller } from 'react-hook-form'
import { Radio } from '../../shared/ui/Radio/Radio'

interface ControllerRadioProps {
    id: string
    name: string
    value: string
    control: any
}

export const ControllerRadio = (props: ControllerRadioProps) => {
    const { id, name, value, control } = props

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Radio
                    {...props}
                    id={id}
                    name={name}
                    value={value}
                    onChangeChecked={(value) => {
                        field.onChange(value)
                    }}>
                    {name}
                </Radio>
            )}
        />
    )
}
