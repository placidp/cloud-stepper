import { ButtonHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import { classNames } from '../../helpers'
import { ButtonThemes, RouteEndpoints } from '../../enums'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes
    to?: RouteEndpoints
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        theme = ButtonThemes.Primary,
        children,
        className,
        to,
        ...otherProps
    } = props

    if (to) {
        return (
            <Link
                to={to}
                style={{ textDecoration: 'none' }}
                tabIndex={0}
                className={classNames(
                    styles.root,
                    { [styles[theme]]: true },
                    [],
                )}>
                {children}
            </Link>
        )
    }

    return (
        <button
            className={classNames(styles.root, { [styles[theme]]: true }, [])}
            {...otherProps}>
            {children}
        </button>
    )
}
