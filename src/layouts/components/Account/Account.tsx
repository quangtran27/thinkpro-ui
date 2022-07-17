import { Instance, Props } from 'tippy.js'
import { useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'

import {
    AngleRightIcon,
    BookMarkIcon,
    BoxIcon,
    CartIcon,
    CommentStarIcon,
    LocationIcon,
    LogoutIcon,
    MapIcon,
    NotebookIcon,
    PhoneCallIcon,
    SearchIcon,
    ShieldCheck,
    TruckIcon,
    UserIcon,
    WalletIcon,
} from '~/components/Icon'
import styles from './Account.module.scss'
import Button from '~/components/Button'
import Popper from '~/components/Popper'
import MenuItem from '~/components/MenuItem'

const cx = classNames.bind(styles)

function Account() {
    const [activeAccount, setActiveAccount] = useState(false)

    const handleShowPopper = (
        instance: Instance<Props>,
        setStateFunction: (value: React.SetStateAction<boolean>) => void,
    ) => {
        setStateFunction(true)
        instance.popper
            .querySelector('button.close-btn')
            ?.addEventListener('click', () => {
                instance.hide()
            })
    }

    return (
        <div>
            <HeadlessTippy
                interactive
                placement='bottom-end'
                trigger='click'
                zIndex={100}
                render={() => (
                    <Popper title='Tài khoản' defaultContent={'account'}>
                        <section className='w-100 mt-12 mb-12'>
                            <MenuItem
                                content='Thông tin tài khoản'
                                disabled
                                iconLeft={<UserIcon className='fill-cyan' />}
                                iconRight={<AngleRightIcon />}
                            />
                            <MenuItem
                                content='Thông tin liên hệ & số địa chỉ'
                                to='thong-tin-lien-he'
                                disabled
                                iconLeft={
                                    <LocationIcon className='fill-blue' />
                                }
                                iconRight={
                                    <AngleRightIcon className={cx('arrow')} />
                                }
                            />
                        </section>
                        <div className={cx('splitter')} />
                        <section>
                            <div className='w-100 mt-12 mb-12'>
                                <MenuItem
                                    to='quan-li-don-hang'
                                    content='Lịch sử mua hàng'
                                    iconLeft={
                                        <CartIcon className='text-blue' />
                                    }
                                    iconRight={<AngleRightIcon />}
                                />
                                <div className='d-flex mt-8'>
                                    <MenuItem
                                        content='Chờ'
                                        content2='Thanh toán'
                                        iconLeft={
                                            <WalletIcon className='fill-cyan' />
                                        }
                                        vertical
                                    />
                                    <MenuItem
                                        vertical
                                        content='Có tại'
                                        content2='Cửa hàng'
                                        iconLeft={
                                            <BoxIcon className='fill-cyan' />
                                        }
                                    />
                                    <MenuItem
                                        vertical
                                        content='Đang'
                                        content2='Vận chuyển'
                                        iconLeft={
                                            <TruckIcon
                                                width={32}
                                                height={32}
                                                className='fill-cyan'
                                            />
                                        }
                                    />
                                    <MenuItem
                                        vertical
                                        content='Chờ'
                                        content2='Đánh giá'
                                        iconLeft={
                                            <CommentStarIcon className='fill-cyan' />
                                        }
                                    />
                                </div>
                            </div>
                        </section>
                        <div className='splitter' />
                        <section>
                            <MenuItem
                                content='Tra cứu bảo hành'
                                iconLeft={<SearchIcon width={24} height={24} />}
                                iconRight={<AngleRightIcon />}
                            />
                            <MenuItem
                                disabled
                                content='Đã lưu / đã xem'
                                iconLeft={
                                    <BookMarkIcon
                                        width={20}
                                        height={20}
                                        className='fill-blue'
                                    />
                                }
                                iconRight={<AngleRightIcon />}
                            />
                        </section>
                        <div className={cx('splitter')}></div>
                        <section>
                            <MenuItem
                                iconLeft={<MapIcon className='fill-blue' />}
                                content='Hệ thống cửa hàng'
                                digit={3}
                                iconRight={<AngleRightIcon />}
                            />
                            <MenuItem
                                iconLeft={
                                    <ShieldCheck className='fill-green' />
                                }
                                content='Bảo hành, dổi trả'
                                iconRight={<AngleRightIcon />}
                            />
                            <MenuItem
                                iconLeft={
                                    <TruckIcon className='fill-primary' />
                                }
                                content='Vận chuyển, thanh toán'
                                iconRight={<AngleRightIcon />}
                            />
                            <MenuItem
                                iconLeft={
                                    <NotebookIcon className='fill-blue' />
                                }
                                content='Bảng giá dịch vụ'
                                iconRight={<AngleRightIcon />}
                            />
                            <MenuItem
                                iconLeft={
                                    <PhoneCallIcon className='fill-primary' />
                                }
                                content='Gọi hotline 1900.63.3579'
                                iconRight={<AngleRightIcon />}
                            />
                        </section>
                        <section className='mt-12 mb-12'>
                            <MenuItem
                                iconLeft={
                                    <LogoutIcon className='fill-primary' />
                                }
                                content='Đăng xuất'
                                iconRight={<AngleRightIcon />}
                            />
                        </section>
                    </Popper>
                )}
                onHide={() => {
                    setActiveAccount(false)
                }}
                onShow={(instance) => {
                    handleShowPopper(instance, setActiveAccount)
                }}
            >
                <Tippy
                    arrow='false'
                    content='Tài khoản'
                    delay={[300, 200]}
                    zIndex={99}
                >
                    <div id='account'>
                        <Button
                            className='h-100 ml-8'
                            width='42px'
                            height='42px'
                            circle
                            active={activeAccount}
                        >
                            <UserIcon />
                        </Button>
                    </div>
                </Tippy>
            </HeadlessTippy>
        </div>
    )
}

export default Account
