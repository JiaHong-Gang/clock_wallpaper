# clock_wallpaper
# Rotary Gear Clock

A minimalist rotary mechanical-style clock built with HTML, CSS, and JavaScript.

This project displays time using three rotating rings representing **hours, minutes, and seconds**. The active time values are highlighted along a horizontal indicator line, creating a visual effect similar to a mechanical gear clock.

The clock is designed for **fullscreen display**, making it suitable for **screensavers, wall displays, or ambient dashboards**.

---

# 旋转齿轮时钟

这是一个使用 **HTML、CSS 和 JavaScript** 编写的极简机械风格旋转时钟。

该时钟通过三个旋转圆环展示时间：

* 小时（24）
* 分钟（60）
* 秒（60）

当前时间会在中央水平指示线上被高亮显示，形成类似 **机械齿轮时钟** 的视觉效果。

该项目适合用于：

* 屏幕保护程序
* 全屏时间展示
* 桌面装饰
* 墙面显示设备

---

# Features / 功能

### English

* Minimalist dark UI
* Smooth continuous rotation animation
* Mechanical rotary style layout
* Highlighted current time markers
* Center date display
* Pure frontend implementation (no dependencies)

### 中文

* 极简深色界面设计
* 平滑连续旋转动画
* 机械齿轮式时间布局
* 当前时间高亮显示
* 中央日期显示
* 纯前端实现，无依赖库

---

# Project Structure / 项目结构

```
clock/
│
├── index.html      # Page structure / 页面结构
├── style.css       # Visual styles / 样式
├── config.js       # Clock configuration / 配置参数
├── ring.js         # Generate circular tick rings / 圆环生成逻辑
└── clock.js        # Time update and animation / 时间更新逻辑
```

---

# How It Works / 工作原理

### English

1. Three circular rings are generated using JavaScript.
2. Each ring represents a time unit:

   * Hours (24)
   * Minutes (60)
   * Seconds (60)
3. The rings rotate continuously according to the current system time.
4. A horizontal indicator line shows the active time value.
5. The current hour, minute, and second elements are highlighted.

### 中文

1. JavaScript 动态生成三个圆形刻度环。
2. 每个圆环代表一个时间单位：

   * 小时（24）
   * 分钟（60）
   * 秒（60）
3. 圆环会根据系统时间持续旋转。
4. 中央水平指示线表示当前时间位置。
5. 当前时间对应的刻度会被高亮显示。

---

# Running the Project / 运行项目

### English

Simply open the `index.html` file in any modern browser.

Recommended browsers:

* Safari
* Chrome
* Edge
* Firefox

### 中文

直接使用浏览器打开 `index.html` 即可运行。

推荐浏览器：

* Safari
* Chrome
* Edge
* Firefox

---

# Possible Improvements / 可能的改进

### English

* Responsive layout for different screen sizes
* Theme switching
* Multiple clock styles
* GPU performance optimization
* Multi-language date display

### 中文

* 支持不同屏幕尺寸的自适应布局
* 主题切换
* 多种时钟样式
* GPU 性能优化
* 多语言日期显示

---

# License / 许可证

This project is free to use and modify.

You may use it for personal projects, displays, or experiments.

本项目可自由使用和修改，适用于个人项目、展示或实验用途。
