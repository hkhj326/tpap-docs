var S = KISSY;

KISSY.all('.appendTo').on('click',function(e){
    S.all('.dom-child1').appendTo(S.all('.dom-child2'));
});
KISSY.all('.prependTo').on('click',function(e){
    S.all('.dom-child1').prependTo(S.all('.dom-child2'));
});
KISSY.all('.insertBefore').on('click',function(e){
    S.all('.dom-child1').insertBefore(S.all('.dom-child2'));
});
KISSY.all('.insertAfter').on('click',function(e){
    S.all('.dom-child1').insertAfter(S.all('.dom-child2'));
});






