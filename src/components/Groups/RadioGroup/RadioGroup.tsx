import { radioOptions } from '../../../shared/mockData'
import { RadioOption } from '../../../shared/types'
import { ControllerRadio } from '../../FormControllers/ControllerRadio'
import styles from './RadioGroup.module.scss'

interface RadioGroupProps {
    control: any
}

export const RadioGroup = (props: RadioGroupProps) => {
    const { control } = props

    return (
        <div className={styles.radioGroup}>
            <span className={styles.title}>Radio group</span>
            {radioOptions.map((item: RadioOption) => (
                <ControllerRadio
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    control={control}
                />
            ))}
        </div>
    )
}
