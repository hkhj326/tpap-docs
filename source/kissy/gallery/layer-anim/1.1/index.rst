.. module:: layeranim


Layer-anim


|  ``�ֲ㶯�����``

.. hint::

    �����Դ�� `���� <http://gallery.kissyui.com/layer-anim/1.1/guide/index.html>`_


.. important::

    ������뷽ʽ

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/gallery/layer-anim/1.1/index" />


���캯��
-----------------------------------------------

  * :class:`LayerAnim`

��������
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


ʵ������
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

�¼�
-----------------------------------------------

  * :func:`start`
  * :func:`update`
  * :func:`end`


���캯������
-----------------------------------------------

.. class:: LayerAnim

    | **KISSY.LayerAnim** (config)

    :param Object config: ������, ��ϸ���·� **������������** .

������������
-----------------------------------------------

.. data:: node

    {String / HTMLNode / [HTMLNode]} -  ����DOM�ڵ�

.. data:: from

    {Object} ������ʼֵ����������ʼʱ��CSS����ֵ��

.. data:: to

    {Object} ��������ֵ������������ʱ��CSS����ֵ��from��to����������һ����ͬʱ���á�

.. data:: duration

    {Number} ����ʱ������λ���룩��

.. data:: easing

    {String} ����ѡ��ƽ������Ч��


.. data:: delay

    {Number} �ӳٲ���ʱ�䣨��λ���룩��

.. data:: align

    {String} ����ѡ��

.. data:: labelIndside

    label��ע������������

.. data:: anim

    �������� - type { string } �������� ��ѡ"r","sector" - easing { string } ����Ч�� - duration { number } ��������ʱ��


.. data:: tip

    ��ʾ, ͬlinechart��tip

.. data:: label

    ��Ϊfalse����ʾ��չʾlabel������չʾ

.. data:: labelline

    ��ͼ��ע���������� - attr { object } ����������


��������
-----------------------------------------------

.. method:: on

    | **on** (type, fnc)
    | �¼�ע��

    :param String type: �¼�����, �ο��¼�����
    :param Function fnc: �ص�����



�¼�����
-----------------------------------------------

.. function:: mouseenter

    | **mouseenter**
    | ������

.. function:: mouseleave

    | **mouseleave**
    | ����뿪

.. function:: click

    | **click**
    | ���

.. function:: afterRender

    | **afterRender**
    | ��Ⱦ����


demo ��������
-----------------------------------------------


    **KCharts���linechart,barchart,piechart DEMO**

    .. raw:: html

        <iframe width="100%" height="800"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/gallery/kcharts/1.1/kcharts.php"></iframe>

    **��ӦDEMO html/php�Ĵ���**

    .. literalinclude:: /raw/tpap/kissy/gallery/kcharts/1.1/kcharts.php
        :language: html

    **��ӦDEMO javascript�Ĵ���**

    .. literalinclude:: /raw/tpap/kissy/gallery/kcharts/1.1/kcharts.js
        :language: javascript




