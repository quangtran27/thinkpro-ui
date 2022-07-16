import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import { SearchIcon } from '~/components/Icon'
import Button from '~/components/Button'
import ProductItem from '~/components/ProductItem'

const cx = classNames.bind(styles)

type SearchProps = {
    title?: string
}

function Search({ title = 'Type to search' }: SearchProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <button className='d-flex mr-8'>
                    <SearchIcon />
                </button>
                <input placeholder={title} spellCheck='false' type='search' />
                <Button
                    className={cx('btn', 'ml-8', 'text-ui', 'bold')}
                    primary
                    rounded
                    height='32'
                >
                    Tìm kiếm
                </Button>
            </div>
            <div className={cx('search-result-wrapper')}>
                <div className='extra-bold text-label mt-8 mb-12'>
                    SẢN PHẨM (0)
                </div>
                <div className={cx('search-results')}>
                    <ProductItem
                        to='/product'
                        title='Balo Laptop Lenovo 15.6"'
                        price='199.000'
                        highlight={[0]}
                    />
                    <ProductItem
                        to='/product'
                        title='Balo Laptop Lenovo 15.6"'
                        price='1.999.000'
                        highlight={[0]}
                    />
                    <ProductItem
                        to='/product'
                        title='Balo Acer Predator SUV'
                        price='1.700.000'
                        highlight={[0]}
                    />
                    <ProductItem
                        to='/product'
                        title='Balo Lenovo Gaming Packback'
                        price='900.000'
                        highlight={[0, 26]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search
