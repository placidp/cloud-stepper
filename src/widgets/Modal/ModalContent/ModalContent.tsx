import { FC, ReactNode } from 'react'
import { SuccessModalContent } from './SuccessModalContent/SuccessModalContent'
import { ErrorModalContent } from './ErrorModalContent/ErrorModalContent'
import { ResponseType } from '../../../shared/types'

interface ModalContent {
    children?: ReactNode
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    isSuccess: boolean
    isError: boolean
    response: ResponseType
    onClose: () => void
}

export const ModalContent: FC<ModalContent> = (props) => {
    const { children, isError, isSuccess, onClick, response, onClose } = props

    return (
        <div className='modalContent' onClick={onClick}>
            {isSuccess && <SuccessModalContent response={response} />}
            {isError && (
                <ErrorModalContent response={response} onClose={onClose} />
            )}
            {children}
        </div>
    )
}
