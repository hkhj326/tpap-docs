.. module:: layeranim


Layer-anim


|  ``分层动画组件``

.. hint::

    组件来源于 `这里 <http://gallery.kissyui.com/layer-anim/1.1/guide/index.html>`_


.. important::

    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/gallery/layer-anim/1.1/index" />


构造函数
-----------------------------------------------

  * :class:`LayerAnim`

参数配置
-----------------------------------------------

  * :data:`node`
  * :data:`from`
  * :data:`to`
  * :data:`duration`
  * :data:`easing`
  * :data:`delay`
  * :data:`align`
  * :data:`overwrite`
  * :data:`repeat`
  * :data:`repeatDelay`
  * :data:`yoyo`
  * :data:`degrade`


实例方法
-----------------------------------------------

  * :meth:`run`
  * :meth:`runReverse`
  * :meth:`pause`
  * :meth:`resume`
  * :meth:`stop`
  * :meth:`seek`
  * :meth:`end`
  * :meth:`kill`
  * :meth:`add`
  * :meth:`clear`

事件
-----------------------------------------------

  * :func:`start`
  * :func:`update`
  * :func:`end`


构造函数详情
-----------------------------------------------

.. class:: LayerAnim

    | **KISSY.LayerAnim** (config)

    :param Object config: 配置项, 详细见下方 **参数配置详情** .

参数配置详情
-----------------------------------------------

.. data:: node

    {String / HTMLNode / [HTMLNode]} -  动画DOM节点

.. data:: from

    {Object} 动画起始值，即动画初始时的CSS属性值。

.. data:: to

    {Object} 动画结束值，即动画结束时的CSS属性值。from与to必须设置其一，或同时设置。

.. data:: duration

    {Number} 动画时长（单位：秒）。

.. data:: easing

    {String} 【可选】平滑过渡效果


.. data:: delay

    {Number} 延迟播放时间（单位：秒）。

.. data:: align

    {String} 【可选】

.. data:: labelIndside

    label标注在扇形区域内

.. data:: anim

    动画配置 - type { string } 动画类型 可选"r","sector" - easing { string } 动画效果 - duration { number } 动画运行时间


.. data:: tip

    提示, 同linechart的tip

.. data:: label

    设为false，表示不展示label，否则展示

.. data:: labelline

    饼图标注线条的配置 - attr { object } 线条的属性


方法详情
-----------------------------------------------

.. method:: on

    | **on** (type, fnc)
    | 事件注册

    :param String type: 事件类型, 参考事件详情
    :param Function fnc: 回调函数



事件详情
-----------------------------------------------

.. function:: mouseenter

    | **mouseenter**
    | 鼠标进入

.. function:: mouseleave

    | **mouseleave**
    | 鼠标离开

.. function:: click

    | **click**
    | 点击

.. function:: afterRender

    | **afterRender**
    | 渲染结束


demo 代码样例
-----------------------------------------------


    **KCharts组件linechart,barchart,piechart DEMO**

    .. raw:: html

        <iframe width="100%" height="800"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/gallery/kcharts/1.1/kcharts.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/gallery/kcharts/1.1/kcharts.php
        :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/gallery/kcharts/1.1/kcharts.js
        :language: javascript




