var S = KISSY;

    log("S.all('.dom-father').len() = "+(S.all('.dom-father').len()));

    log("S.all('div').getDOMNodes().length = "+(S.all('div').getDOMNodes().length));

    log("S.all('.dom-child1').add('.dom-child2').slice(1, 2).equals(S.all('.dom-child2')) = "+(S.all('.dom-child1').add('.dom-child2').slice(1, 2).equals(S.all('.dom-child2'))));

    log("S.all('.dom-child1').all('.dom-child2').end().equals(S.all('.dom-child1')) = "+ (S.all('.dom-child1').all('.dom-child2').end().equals(S.all('.dom-child1'))));

    log("S.all('.dom-father').children().item(0).add(S.all('.dom-father').children().item(0).siblings()).equals(S.all('.dom-father').children()) = "+S.all('.dom-father').children().item(0).add(S.all('.dom-father').children().item(0).siblings()).equals(S.all('.dom-father').children()));






