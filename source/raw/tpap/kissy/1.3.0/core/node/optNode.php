<!--include kissy core and calendar file-->
<cajamodules include="kissy/1.3.0/core"/>

<!--refer js file-->

<script src="/kissy/1.3.0/core/node/optNode.js"></script>

<button class="appendTo">S.all('.dom-child1').appendTo(S.all('.dom-child2'))</button>
<button class="prependTo">S.all('.dom-child1').prependTo(S.all('.dom-child2'))</button>
<button class="insertBefore">S.all('.dom-child1').insertBefore(S.all('.dom-child2'))</button>
<button class="insertAfter">S.all('.dom-child1').insertAfter(S.all('.dom-child2'))</button>


<div class="dom-father" id="father" style="width: 400px;height: 100px;background: yellow;">
    dom-father
    <div class="dom-child1" style="
    background: red;width: 300px;height: 30px;">dom-child1</div>
    <div class="dom-child2" style="
    background: #add8e6;width: 300px;height: 30px;">dom-child2</div>
</div>







