import { IconProps } from '.'

export function MainLogo({
    width = '130',
    height = '36',
    className = '',
    fill,
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <use
                href='https://thinkpro.vn/_nuxt/15192db9741f6ad15032e14b646f9a55.svg#i-logofull'
                xlinkHref='https://thinkpro.vn/_nuxt/15192db9741f6ad15032e14b646f9a55.svg#i-logofull'
            ></use>
        </svg>
    )
}
