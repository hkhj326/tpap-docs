<!--include kissy core and kcharts file-->
<cajamodules include="kissy/1.3.0/core,kissy/gallery/layer-anim/1.1/index"/>

<!--refer js file-->
<script src="/assets/javascripts/log.js"></script>

<script src="/kissy/gallery/layer-anim/1.1/layer-anim.js"></script>


<h1>DEMO</h1>

<style>
    .layerAnimTest {
        position: relative;
        height: 400px;
        width: 400px;
    }
    .layer1,
    .layer2,
    .layer3,
    .layer4,
    .layer5{
        position: absolute;
        background: red;
        height: 20px;
        width: 20px;
    }
    .layer2 {
        background: blue;
        top: 20px;
    }
    .layer3 {
        background: green;
        top: 40px;
    }
    .layer4 {
        background: yellow;
        top: 60px;
    }
    .layer5 {
        background: purple;
        top: 80px;
    }
    .msg {
        color:red;
    }
</style>
<div class="layerAnimTest">
    <div class="layer1"></div>
    <div class="layer2"></div>
    <div class="layer3"></div>
    <div class="layer4"></div>
    <div class="layer5"></div>
</div>

<button class="run">run</button>
<button class="runReverse">runReverse</button>
<button class="pause">pause</button>
<button class="resume">resume</button>
<button class="stop1">stop[rest]</button>
<button class="stop2">stop[not reset]</button>
<button class="seek">seek(1s)</button>
<button class="end">end</button>
<button class="kill">kill</button>
<button class="add">add</button>
<button class="clear">clear</button>

<p class="msg"></p>



