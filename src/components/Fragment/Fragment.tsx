import { ReactNode } from 'react'

type FragmentProps = {
    children: ReactNode | JSX.Element
}

function Fragment(props: FragmentProps) {
    return <>{props.children}</>
}

export default Fragment
