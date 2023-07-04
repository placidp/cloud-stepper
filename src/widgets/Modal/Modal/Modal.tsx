import { createPortal } from 'react-dom'
import { ModalContent } from '../ModalContent/ModalContent'
import { ResponseType } from '../../../shared/types'
import styles from './Modal.module.scss'

interface ModalProps {
    setIsModalOpen: (value: boolean) => void
    isSuccess: boolean
    isError: boolean
    response: ResponseType
}
export const Modal = (props: ModalProps) => {
    const { setIsModalOpen, isError, isSuccess, response } = props

    return (
        <>
            {createPortal(
                <div
                    className={styles.modalOverlay}
                    onClick={() => setIsModalOpen(false)}>
                    <ModalContent
                        isSuccess={isSuccess}
                        isError={isError}
                        onClick={(e) => e.stopPropagation()}
                        response={response}
                        onClose={() => setIsModalOpen(false)}></ModalContent>
                </div>,
                document.getElementById('modal') as Element,
            )}
        </>
    )
}
