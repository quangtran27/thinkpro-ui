import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button'
import styles from './Default.module.scss'

const cx = classNames.bind(styles)

export function DefaultAccount() {
    return (
        <section className={cx('wrapper')}>
            <img
                src={images.personLaptop}
                width={108}
                height={172}
                alt='person_laptop'
            />
            <div className='d-flex flex-1 flex-col ml-12 ai-start'>
                <span className='bold text-cyan text-ui'>
                    ThinkPro xin chào!
                </span>
                <span className='text-ui mt-4'>
                    Hãy đăng nhập để theo dõi đơn hàng và bảo hành dễ dàng nhé
                </span>
                <Button className='w-100 mt-16' primary>
                    Đăng nhập
                </Button>
                <Link to='/dangky' className='mt-12 mb-16 hover-blue'>
                    <span className='text-ui'>
                        Chưa có tài khoản?{' '}
                        <span className='text-blue text-ui bold text-underline'>
                            Đăng ký
                        </span>
                    </span>
                </Link>
            </div>
        </section>
    )
}
