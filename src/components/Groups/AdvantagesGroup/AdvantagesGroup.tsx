// import { FC } from 'react'
// import { useAppDispatch, useAppSelector } from '../../../store/hooks'
// import { selectAdvantages } from '../../../store/slices/form.slice'
// import styles from './AdvantagesGroup.module.scss'
// import { Advantage } from '../../../shared/types/formDataTypes'
// import { Controller } from 'react-hook-form'
// import { ControllerAdvantage } from '../../FormControllers/ControllerAdvantage'

// interface AdvantagesGroupProps {
//     control: any
// }

// export const AdvantagesGroup: FC<AdvantagesGroupProps> = (props) => {
//     const { control } = props

//     const advantageId = new Date().getTime().toFixed()
//     const dispatch = useAppDispatch()
//     const advantages = useAppSelector(selectAdvantages)

//     return (
//         <div className={styles.advantagesGroup}>
//             <span className={styles.title}>Checkbox Group</span>
//             {advantages.map((advantage: Advantage) => (
//                 <ControllerAdvantage
//                     name={advantage.id /**temp */}
//                     id={advantageId /**temp */}
//                     control={control}
//                 />
//             ))}
//         </div>
//     )
// }
