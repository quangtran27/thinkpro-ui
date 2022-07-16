import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { MenuIcon, CartIcon, TruckIcon } from '~/components/Icon'
import images from '~/assets/images'
import styles from './Header.module.scss'
import Button from '~/components/Button'
import Notification from '~/layouts/components/Notification'
import Search from '~/layouts/components/Search'
import Account from '../Account'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className='d-flex flex-1 ai-center'>
                    <Link to='/' className={cx('main-logo')}>
                        <img
                            src={images.logo}
                            alt='ThinkPro'
                            width='100%'
                            height='100%'
                        />
                    </Link>
                    <div className={cx('btn-group-catalog ml-20')}>
                        <div className='d-flex'>
                            <Button circle>
                                <MenuIcon />
                            </Button>
                            <span className='d-flex ai-center text-ui bold ml-4 c-pointer'>
                                Danh mục
                            </span>
                            <Link className={cx('btn-promo')} to='/khuyenmai'>
                                Khuyến mại
                            </Link>
                        </div>
                    </div>
                    <Search title='Tên sản phẩm, nhu cầu, hãng' />
                </div>
                <div className='d-flex ai-center ml-20'>
                    <Tippy arrow='false' content='Giỏ hàng' delay={[300, 200]}>
                        <Link to='/giohang'>
                            <Button
                                className='h-100 d-flex ai-center'
                                height='42px'
                                rounded
                            >
                                <>
                                    <CartIcon className='mr-8' />
                                    <span className='ml-4 text-body'>0</span>
                                </>
                            </Button>
                        </Link>
                    </Tippy>
                    <Tippy
                        arrow='false'
                        content='Đang vận chuyển'
                        delay={[300, 200]}
                    >
                        <Link to='/quanlydonhang'>
                            <Button
                                className='h-100 ml-16'
                                width='42px'
                                height='42px'
                                circle
                            >
                                <TruckIcon />
                            </Button>
                        </Link>
                    </Tippy>
                    <Notification />
                    <Account />
                </div>
            </div>
        </header>
    )
}

export default Header
