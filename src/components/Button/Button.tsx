import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = {
    active?: boolean
    children?: JSX.Element | JSX.Element[] | string
    circle?: boolean
    className?: string
    disabled?: boolean
    fill?: string
    height?: string
    large?: boolean
    primary?: boolean
    rounded?: boolean
    small?: boolean
    style?: object
    width?: string
    onClick?: () => void
}

function Button({
    active,
    children,
    circle,
    className = '',
    disabled,
    fill,
    height,
    large,
    primary,
    rounded,
    small,
    style,
    width,
    onClick,
}: ButtonProps) {
    if (disabled) {
        if (onClick) {
            onClick = undefined
        }
    }

    const classes = cx(
        {
            active,
            circle,
            disabled,
            large,
            primary,
            small,
            rounded,
            [className]: className,
        },
        'wrapper',
    )

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: fill,
                width: width,
                height: height,
                ...style,
            }}
            className={classes}
        >
            {children}
        </button>
    )
}
export default Button
