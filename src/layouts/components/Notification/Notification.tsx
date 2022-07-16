import { Instance, Props } from 'tippy.js'
import { useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'

import Popper from '~/components/Popper'
import Button from '~/components/Button'
import { BellIcon } from '~/components/Icon'

function Notification() {
    const [activeNoti, setActiveNoti] = useState(false)

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
                render={() => (
                    <Popper
                        title='Thông báo'
                        defaultContent={'noti'}
                        contentWidth={391}
                    />
                )}
                zIndex={100}
                onHide={() => {
                    setActiveNoti(false)
                }}
                onShow={(instance) => {
                    handleShowPopper(instance, setActiveNoti)
                }}
            >
                <Tippy
                    arrow='false'
                    content='Thông báo'
                    delay={[300, 200]}
                    zIndex={99}
                >
                    <div id='noti'>
                        <Button
                            className='h-100 ml-8'
                            width='42px'
                            height='42px'
                            circle
                            active={activeNoti}
                        >
                            <BellIcon />
                        </Button>
                    </div>
                </Tippy>
            </HeadlessTippy>
        </div>
    )
}

export default Notification
