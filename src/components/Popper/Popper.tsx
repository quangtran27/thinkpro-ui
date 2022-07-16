import classNames from 'classnames/bind'
import { CloseIcon } from '~/components/Icon'
import { DefaultAccount } from './Default/DefaultAccount'
import { DefaultNoti } from './Default/DefaultNoti'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

type PopperProps = {
    defaultContent?: JSX.Element | 'account' | 'noti'
    children?: string | JSX.Element | JSX.Element[]
    closeBtn?: boolean
    contentWidth?: string | number
    title?: string
}

function Popper({
    defaultContent = <></>,
    children,
    closeBtn = true,
    contentWidth = 400,
    title,
}: PopperProps) {
    if (defaultContent === 'noti') {
        defaultContent = <DefaultNoti />
    } else if (defaultContent === 'account') {
        defaultContent = <DefaultAccount />
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>{title}</div>
                {closeBtn && (
                    <button className='d-flex ai-center close-btn'>
                        <CloseIcon />
                    </button>
                )}
            </div>
            <div className={cx('body')}>
                <div style={{ width: contentWidth }}>
                    {defaultContent}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popper
