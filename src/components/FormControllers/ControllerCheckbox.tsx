import { Controller } from 'react-hook-form'
import { Checkbox } from '../../shared/ui/Checkbox'

interface ControllerCheckboxProps {
    id: string
    name: string
    control: any
}

export const ControllerCheckbox = (props: ControllerCheckboxProps) => {
    const { name, control } = props

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Checkbox
                    {...props}
                    name={name}
                    onChangeChecked={(value: boolean) => {
                        field.onChange(value)
                    }}>
                    {name}
                </Checkbox>
            )}
        />
    )
}
