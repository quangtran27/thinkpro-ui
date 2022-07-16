import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

type ProductItemProps = {
    image?: string
    title: string
    price: string
    highlight: Array<number>
    to: string
}

function ProductItem({
    image = '',
    title,
    price,
    highlight,
    to,
}: ProductItemProps) {
    return (
        <Link to={to}>
            <div className={cx('wrapper')}>
                <div className='d-flex ml-4 mr-12'>
                    <Image src={image} alt={title} />
                </div>
                <div className={cx('info')}>
                    <span className='text-ui bold'>{title}</span>
                    <span className='text-ui bold text-primary mt-8'>
                        {price}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem
