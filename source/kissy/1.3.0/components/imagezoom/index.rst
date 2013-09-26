.. module:: imagezoom


ImageZoom
===============================================

|  这是一个图片放大镜控件.
|  支持单图和多图的放大。多图放大请看demo

.. hint::

    组件来源于 `这里 <http://docs.kissyui.com/docs/html/api/component/imagezoom/>`_


.. important::
    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/1.3.0/imagezoom" />


构造函数
-----------------------------------------------

  * :class:`ImageZoom`

参数配置
-----------------------------------------------

  * :data:`imageNode`
  * :data:`align`
  * :data:`type`
  * :data:`bigImageSrc`
  * :data:`bigImageWidth`
  * :data:`bigImageHeight`
  * :data:`width`
  * :data:`height`
  * :data:`hasZoom`
  * :data:`prefixCls`


属性
-----------------------------------------------
  * :data:`bigImageWidth`
  * :data:`bigImageHeight`
  * :data:`imageSrc`
  * :data:`bigImageSrc`
  * :data:`hasZoom`

实例方法
-----------------------------------------------

  * :meth:`set`
  * :meth:`get`

事件
-----------------------------------------------



构造函数详情
-----------------------------------------------

.. class:: ImageZoom

    | **ImageZoom** (config)
    
    :param Object config: 配置项, 详细见下方 **参数配置详情** .


参数配置详情
-----------------------------------------------

.. data:: imageNode

    {String} - 必选, 小图元素选择器.

.. data:: align

    {Object} - 可选, 放大镜对齐方式，格式为：{node: '.standard',points: ["tr","tl"],offset: [10, 0]}

.. data:: type

    {String} - 可选, 缩放显示类型, 默认是标准模式 ‘standard’, 或者内嵌模式 ‘inner’.

.. data:: bigImageSrc

    {String} - 可选, 大图路径, 为 ‘’ 时, 取触点上的 data-ks-imagezoom 属性值. 默认为 ‘’.

.. data:: bigImageWidth

    {Number} - 必选！ 大图宽度

.. data:: bigImageHeight

    {Number} - 必选！ 大图高度
	
.. data:: width

    {Number|String} - 可选, 放大区域宽度. 默认为 ‘auto’, 当取 ‘auto’ 时, 宽度取小图的宽度.
	
.. data:: height

    {Number|String} - 可选, 放大区域高度. 默认为 ‘auto’, 当取 ‘auto’ 时, 高度取小图的高度.

.. data:: hasZoom

    {Boolean} - 可选, 初始时是否显示放大效果. 默认为 true, 显示放大. 在多图切换时, 可重设该值来开启或关闭显示放大功能. 如果多个图都不需要放大显示, ImageZoom 不会生成任何东西.

.. data:: prefixCls

    {String} - 可选, 样式css名前缀。isv请使用‘taeapp’开头的否则会被过滤掉，如本例的：‘taeapp-myzoom-’ 。样式控制请参照
    样式说明：xxxx-imagezoom-lens 小图蒙板样式
              xxxx-imagezoom-viewer 放大镜样式
	      xxxx-imagezoom-icon 放大镜图标样式


属性详情
-----------------------------------------------

.. data:: bigImageWidth

    {Number} - 大图宽度

.. data:: bigImageHeight

    {Number} - 大图高度

.. data:: imageSrc

    {String} - 小图路径

.. data:: bigImageSrc

    {String} - 大图路径

.. data:: hasZoom

    {String} - 初始时是否显示放大效果

方法详情
-----------------------------------------------

.. method:: set

    | **set** (attr,value)
    | 设置属性值

.. method:: get

    | **get** (attr)
    | 获取属性值
    


demo 代码样例
-----------------------------------------------


    **三个简单的demo例子**

    .. raw:: html

        <iframe width="100%" height="560"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/1.3.0/component/imagezoom/imagezoom.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/imagezoom/imagezoom.php
        :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/imagezoom/imagezoom.js
        :language: javascript


    **对应DEMO css的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/imagezoom/imagezoom.css
        :language: css
