# vue-mscroll

MScroll插件vue封装 --- 模拟滚动(条)，支持水平、垂直方向选择，滚动条显示，图片懒加载，鼠标拖动、滚动，选择器模式。

## install
```
npm i -S vue-mscroll

```

## usage
```
import MScroll from 'vue-mscroll'

export default {
  ...
  components: { MScroll },
  ...
}
```

```
  <!-- 默认 水平方向 -->
  <m-scroll class="wrapper" ref="scroll">
      <div class="scroller">
          <div class="item">...</div>
          <div class="item"><img src="placeholder.png" data-src="1.jpg" /></div>
          ...
      </div>
  </m-scroll>

  <!-- 垂直方向 -->
  <m-scroll class="wrapper" ref="scroll" vertical>
      ...
  </m-scroll>

  <!-- 显示滚动条 -->
  <m-scroll 
    class="wrapper" 
    ref="scroll" 
    scrollbar
    :scrollbar-color="#f00"
    :scrollbar-size="5"
    :scrollbar-opacity="0.8"
  >
      ...
  </m-scroll>

  <!-- 图片懒加载 -->
  <m-scroll class="wrapper" ref="scroll" lazyload :attribute="mysrc">
      ...
  </m-scroll>

  <!-- 鼠标 -->
  <m-scroll class="wrapper" ref="scroll" mouse wheel>
      ...
  </m-scroll>

  <!-- 选择器模式 -->
  <m-scroll class="wrapper" ref="scroll" picker vertical>
      ...
  </m-scroll>

```

## props
```
    - vertical 是否垂直方向 默认false 
    - scrollbar 是否显示滚动条 默认false
      - scrollbarColor 滚动条颜色 默认 '#000' 
      - scrollbarSize 滚动条大小 默认 3 (px) 
      - scrollbarOpacity 滚动条透明度 默认 0.5 (0 - 1) 
    - lazyload 是否图片懒加载 默认false
      - attribute 放置图片地址的特性 默认 data-src  
    - mouse 是否使用鼠标拖动 默认false 
    - wheel 是否使用鼠标滚动 默认false
      -wheelStep 滚动动画步长 40 (px)
      -wheelTime 滚动动画持续时间 默认 400 (ms)
    - picker 是否使用选择器模式 默认false 
      - index 默认选择第几项 默认0第一项
    - scrollTime 手指、鼠标触发滚动动画的持续时间 默认 600 (ms)
    - rollTime 手指、鼠标触发复位动画的持续时间 默认 300 (ms)
```

## emit event
```
    - setup 第一次设置完成、浏览器resize 执行回调
    - scrollstart 滚动开始执行回调
    - scrollmove 滚动中执行回调
    - scrollend 滚动结束执行回调
    - loadmore 到底加载更多执行回调
```

## methods
```
    - refresh() scroller滚动容器尺寸发生变化时 手动刷新
    - scrollTo(offset, duration) scroller滚动到指定位置 
    - moveTo(el, duration, center) scroller滚动到内部元素所在位置 center为true则元素位于中间位置
    - pickTo(index, duration) 选择器模式时 选择指定的元素
    - getIndex() 选择器模式下获取当前index
```