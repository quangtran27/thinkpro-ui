import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'

import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import Button from '~/components/Button'
import styles from './Navigation.module.scss'

const cx = classNames.bind(styles)

type Category = {
    id: number
    name: string
    image: string
}

function Navigation() {
    // Fetch API to render
    const [categories, setCategories] = useState<Category[]>()

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const response = await fetch(
            process.env.REACT_APP_BASE_URL + '/categories/get-all/',
        )
        const data = await response.json()
        setCategories(data)
    }
    // **

    // Hanlder click to rotate slider
    const sliderRef = useRef<HTMLDivElement>(null)

    const [rotate, setRotate] = useState(0)
    const [canRotateLeft, setCanRotateLeft] = useState(false)
    const [canRotateRight, setCanRotateRight] = useState(true)

    const rotateSlider = (direction: 'left' | 'right') => {
        const step = sliderRef.current?.parentElement?.offsetWidth
        if (step) {
            if (direction === 'left') {
                if (rotate < step) {
                    setRotate(0)
                } else {
                    setRotate((prev) => prev - step)
                }
            } else {
                if (rotate > sliderRef.current.offsetWidth - step) {
                    setRotate(sliderRef.current.offsetWidth)
                } else {
                    setRotate((prev) => prev + step)
                }
            }

            setCanRotateLeft(rotate < step)
            setCanRotateRight(rotate > sliderRef.current.offsetWidth - step)
        } else {
            console.log('step length is undefinded')
        }
    }

    sliderRef?.current?.setAttribute(
        'style',
        `transform: translateX(${-rotate}px);`,
    )
    // **

    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('slider-wrapper')}>
                    <div className={cx('slider')} ref={sliderRef}>
                        {categories?.map((category, index) => (
                            <Button key={category.id}>
                                <img
                                    src={
                                        process.env.REACT_APP_BASE_URL +
                                        category.image
                                    }
                                    alt={category.name}
                                />
                                <span className='text-ui bold ml-8'>
                                    {category.name}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className='d-flex flex-1 ai-center pl-32'>
                    <Button
                        circle
                        disabled={!canRotateLeft}
                        onClick={() => {
                            rotateSlider('left')
                        }}
                    >
                        <AngleLeftIcon />
                    </Button>
                    <Button
                        circle
                        disabled={!canRotateRight}
                        onClick={() => {
                            rotateSlider('right')
                        }}
                    >
                        <AngleRightIcon />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
