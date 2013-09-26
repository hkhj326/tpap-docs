function log(s){
	KISSY.DOM.query(".divLog")[0].innerHTML += '<br/>'+s;
}

var ImageZoom = KISSY.ImageZoom;
var iz = new ImageZoom({
		prefixCls:'taeapp-myzoom-',
        imageNode:'.taeapp-standard',
        align:{
            node: '.taeapp-standard',
            points: ["tr","tl"],
            offset: [10, 0]
        },
		type:'standard',
        bigImageSrc: "http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg",
        bigImageWidth:900,
        bigImageHeight:900,
	    width:300,
		height:300,
		hasZoom:true
    }
);



KISSY.Event.on('.taeapp-imgList img','click',function(e){
	var data = KISSY.DOM.attr(this, 'data-ks-imagezoom');
	iz.set('hasZoom', KISSY.DOM.attr(this, 'data-has-zoom'));
	iz.set('imageSrc', data + '_310x310.jpg');
	if (data && iz.get('hasZoom')) {
		iz.set('bigImageSrc', data);
		iz.set("bigImageWidth", parseInt(KISSY.DOM.attr(this, 'data-bigimagewidth')));
		iz.set("bigImageHeight", parseInt(KISSY.DOM.attr(this, 'data-bigimageheight')));
	}
});

log('demo js loaded');
