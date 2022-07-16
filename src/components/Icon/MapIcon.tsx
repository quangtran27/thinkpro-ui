import { IconProps } from '.'

export function MapIcon({
    className,
    width = 20,
    height = 20,
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
            xmlSpace='preserve'
        >
            <g id='XMLID_1_'>
                <path
                    id='XMLID_7_'
                    d='M335.9,96.2L176.1,31.8L0,96.2v384l176.1-64.4l159.8,64.4L512,415.8v-384L335.9,96.2z M191.6,72.6l128,51.4
	   v315.5l-128-51.4V72.6z M31.8,118.2l128-46.5v316.3l-128,46.5V118.2L31.8,118.2z M480.2,393.8l-128,46.5V123.9l128-46.5V393.8z'
                />
            </g>
        </svg>
    )
}
