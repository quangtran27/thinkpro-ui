import { IconProps } from '.'

export function WalletIcon({
    className,
    width = 32,
    height = 32,
    fill,
}: IconProps) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 512 512'
        >
            <g>
                <path
                    d='M504.5,110.2c-4.6-4.6-11-7.5-18-7.5h-0.1h-18.1V60.1c0-14.1-11.4-25.5-25.5-25.5H75.2C33.7,34.6,0,68.2,0,109.8v292.5
       c0,41.5,33.7,75.2,75.2,75.2h410.3c14.1,0,25.5-11.4,25.5-25.5l1-323.6v-0.2C512,121.2,509.2,114.8,504.5,110.2L504.5,110.2z
        M476.9,443.3H75.2c-22.7,0-41.1-18.4-41.1-41.1V109.7C34,87,52.5,68.6,75.2,68.6h359.1v34.1H76.6v34.1h401.2L476.9,443.3z'
                />
                <rect x='400.3' y='264.5' width='34.1' height='34.1' />
            </g>
        </svg>
    )
}
