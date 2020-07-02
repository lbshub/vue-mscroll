/**
 * LBS vue-mscroll
 * Date: 2018-10-12
 **/

import MScroll from '@eyeear/mscroll'

export default {
    name: 'MScroll',
    props: {
        vertical: {
            type: Boolean,
            default: false
        },
        showScrollbar: {
            type: Boolean,
            default: false
        },
        scrollbarColor: {
            type: String,
            default: '#000'
        },
        scrollbarSize: {
            type: Number,
            default: 3
        },
        scrollbarOpacity: {
            type: Number,
            default: 0.5
        },
        lazyload: {
            type: Boolean,
            default: false
        },
        attribute: {
            type: String,
            default: 'data-src'
        },
        mouse: {
            type: Boolean,
            default: false
        },
        wheel: {
            type: Boolean,
            default: false
        },
        wheelStep: {
            type: Number,
            default: 40
        },
        wheelTime: {
            type: Number,
            default: 400
        },
        picker: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        },
        scrollTime: {
            type: Number,
            default: 600
        },
        rollTime: {
            type: Number,
            default: 300
        }
    },
    mounted() {
        this.$nextTick(() => {
            !this.scroll && this.initScroll()
        })
    },
    beforeDestroy() {
        this.scroll && this.scroll.destroy()
    },
    methods: {
        initScroll() {
            if (!MScroll) {
                console.log('need MScroll: npm i -S @eyeear/mscroll')
                return
            }
            this.scroll = new MScroll(this.$refs.wrapper, {
                vertical: this.vertical,
                showScrollbar: this.showScrollbar,
                scrollbarSize: this.scrollbarSize,
                scrollbarColor: this.scrollbarColor,
                scrollbarOpacity: this.scrollbarOpacity,
                lazyload: this.lazyload,
                attribute: this.attribute,
                mouse: this.mouse,
                wheel: this.wheel,
                wheelStep: this.wheelStep,
                wheelTime: this.wheelTime,
                picker: this.picker,
                index: this.index,
                scrollTime: this.scrollTime,
                rollTime: this.rollTime,
                setup: () => {
                    this.$emit('setup')
                },
                scrollStart: offset => {
                    this.$emit('scrollstart', offset)
                },
                scrollMove: offset => {
                    this.$emit('scrollmove', offset)
                },
                scrollEnd: (offset, maxOffset) => {
                    this.$emit('scrollend', offset, maxOffset)
                }
            })

            this.scroll.$on('scrollEnd', (offset, maxOffset) => {
                if (offset === maxOffset) {
                    this.$emit('loadmore')
                }
            })
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        scrollTo(offset, duration) {
            this.scroll && this.scroll.scrollTo(offset, duration)
        },
        moveTo(el, duration, center) {
            this.scroll && this.scroll.moveTo(el, duration, center)
        },
        pickTo(index, duration) {
            this.scroll && this.scroll.pickTo(index, duration)
        },
        getIndex() {
            if (this.scroll) {
                return this.scroll.index
            }
            return -1
        }
    },
    render(h) {
        return h(
            'div', {
                ref: 'wrapper',
                style: {
                    overflow: 'hidden'
                }
            },
            this.$slots.default
        )
    }
}