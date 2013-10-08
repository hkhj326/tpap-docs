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

    {String} 【可选】 播放次序。取值如下：
        * "normal"：与其它动画同时播放。【默认值】
        * "sequence"：顺序播放，即上一动画播放完再播放该动画。

.. data:: overwrite

    {String} 当多个动画同时作用于同一个DOM节点，其设置的CSS属性相互冲突时，解决冲突处理方式。取值如下：
        * "auto"：分析当前正在播放的动画，如果发现有CSS值冲突，则覆盖该CSS值。尚未播放的动画不受影响。【默认值】
        * "all"：停止与该DOM节点相关的所有动画（包括未播放的动画）
        * "none"：不处理冲突

.. data:: repeat

    {Number} 【可选】 首次播放后的重复次数【默认：0】。例如：`repeat: 1`表示动画总共播放2次。 如果要无限重复，设置`repeat: -1`。


.. data:: repeatDelay

    {Number} 【可选】每次重复播放时的延迟时间（单位：秒）。

.. data:: yoyo

    {Boolean} 【可选】重复播放时，是否以相反顺序播放（每次都与上次播放顺序相反）【默认：false】

.. data:: degrade

    {Object} 【可选】浏览器降级设置。例如：

    .. code-block:: json

            {
                  ie: 7  // IE 8以上（包括IE 8）才显示该动画
            }



方法详情
-----------------------------------------------

.. method:: run

    | **on** (position)
    | 播放动画。无论动画是否播放完，默认都从头开始播放。

    :param Number position: 起始播放的时间点，单位：秒【可选参数，默认：0（从起始位置播放动画）】

.. method:: runReverse

    | **runReverse**
    | 反向播放动画。如果动画尚未播放，则调用该方法没有任何效果。

.. method:: pause

    | **pause**
    | 暂停播放动画。动画暂停后，可调用resume方法继续播放。

.. method:: resume

    | **resume** (position)
    | 从当前播放位置继续播放动画。如果动画已播放完，调用该方法没有任何效果。

.. method:: stop

    | **stop** (reset)
    | 停止播放动画，并跳转到初始位置。

    :param Boolean reset: 是否将动画起始值（from）或结束值（to）重置为当前的CSS值。如果不想从DOM节点的当前值重新播放动画，请设置为false。【可选参数，默认：true】

.. method:: seek

    | **seek** (position)
    | 跳转到指定位置，并暂停播放。

    :param Number position: 跳转到的时间点，单位：秒。【可选参数，默认：0（起始位置）】

.. method:: end

    | **end**
    | 跳转到动画结束时刻。该方法同时将CSS样式设置为结束值。

.. method:: kill

    | **kill**
    | 停止动画并释放相关资源，以便垃圾回收。如果动画不再播放，调用该方法可以减少内存等资源的占用。

.. method:: add

    | **add** (config)
    | 向分层动画中添加动画。动画被添加到最后位置。

    :param Object config: 要添加的动画配置参数，具体请参考配置参数。

.. method:: clear

    | **clear**
    | 删除所有分层动画。


事件详情
-----------------------------------------------

.. function:: start

    | **mouseenter**
    | 动画从头开始播放时，触发该事件。如果反复从头播放动画，则该事件会触发多次。

.. function:: update

    | **update**
    | 每帧动画更新时，触发该事件。动画播放时，会不断触发该事件。

.. function:: end

    | **end**
    | 动画播放结束时，触发该事件。


demo 代码样例
-----------------------------------------------


    **Layeranim 组件DEMO**

    .. raw:: html

        <iframe width="100%" height="800"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/gallery/layer-anim/1.1/layeranim.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/gallery/layer-anim/1.1/layeranim.php
        :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/gallery/layer-anim/1.1/layeranim.js
        :language: javascript




