var S = KISSY;

KISSY.all('.all').on('click',function(e){
     S.all('.dom-father').show(5).hide(5).toggle(5).fadeIn().fadeOut().fadeToggle().slideDown().slideUp().slideToggle();
});
KISSY.all('.show').on('click',function(e){
    S.all('.dom-father').show(5);
});
KISSY.all('.hide').on('click',function(e){
    S.all('.dom-father').hide(5);
});
KISSY.all('.toggle').on('click',function(e){
    S.all('.dom-father').toggle(5);
});
KISSY.all('.fadeIn').on('click',function(e){
    S.all('.dom-father').fadeIn();
});
KISSY.all('.fadeOut').on('click',function(e){
    S.all('.dom-father').fadeOut();
});
KISSY.all('.fadeToggle').on('click',function(e){
     S.all('.dom-father').fadeToggle();
});
KISSY.all('.slideDown').on('click',function(e){
   S.all('.dom-father').slideDown();
});
KISSY.all('.slideUp').on('click',function(e){
    S.all('.dom-father').slideUp();
});
KISSY.all('.slideToggle').on('click',function(e){
    S.all('.dom-father').slideToggle();
});