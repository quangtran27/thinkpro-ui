import classNames from 'classnames/bind'
import { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import style from './MainLayout.module.scss'

const cx = classNames.bind(style)

type MainLayoutProps = {
    children: ReactNode | JSX.Element
}

function MainLayout(props: MainLayoutProps) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('spliter')}></div>
            <Navigation />
            <div style={{ height: 1000 }} className={cx('container')}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
