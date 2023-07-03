import { Controller, useWatch } from 'react-hook-form'
import { FC } from 'react'
import { Textarea } from '../../shared/ui/Textarea'

interface ControllerTextareaProps {
    id?: string
    name: string
    placeholder?: string
    labeltext?: string
    textLength?: any
    textMaxLength?: any
    control: any
    error?: any
}

export const ControllerTextarea: FC<ControllerTextareaProps> = (props) => {
    const { name, placeholder, labeltext, control, id, error, textMaxLength } =
        props
    const aboutTextValue = useWatch({ control, name: 'aboutTextValue' })

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Textarea
                    {...field}
                    id={id}
                    textLength={aboutTextValue.length ?? 0}
                    placeholder={placeholder}
                    labeltext={labeltext}
                    textMaxLength={textMaxLength}
                    value={field.value}
                    onChange={(value) => {
                        field.onChange(value)
                    }}
                    error={error}
                />
            )}
        />
    )
}
