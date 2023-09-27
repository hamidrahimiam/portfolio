var elements = {
    nav: {
        self: $('.cNav'),
        search: {
            self: $('.cNav .search'),
            input: {
                self: $('.cNav .search .search_input')
            },
            result:{
                self: $('.cNav .search .search_results')
            }
        },
        control:{
            parents: $('.cNav button[data-navtog-parent]'),
            btn: $('.cNav button[data-navtog]'),
            toggle: function(item){
                
            },
        }
    },
    side: {
        menu:{
            li: $('.cSide .menu li'),
            link:{
                self: $('.cSide .menu li a'),
                have_child: $('.cSide .menu li.have_childern > a:first-of-type'),
            }
        }    
    },
    main:{
        block:{
            minimize:{
                self: $('.cMainBlocks .cBlock_header .control .contMinimize')
            }
        }
    }
};


$(document).ready(function(){
    //search
    if(elements.nav.search.input.self.length > 0)
        if(elements.nav.search.input.self.text().length == 0)
            elements.nav.search.input.self.text(elements.nav.search.input.self.attr('data-placeholder'));
        
    elements.nav.search.input.self.click(function(){
        $(this).addClass('active');
        if($(this).text() == $(this).attr('data-placeholder'))
            $(this).text('');
    });
    elements.nav.search.input.self.focusout(function(){
        $(this).removeClass('active');
        if($(this).text().length == 0){
            $(this).text($(this).attr('data-placeholder'));
        }
        elements.nav.self.removeClass('inSearching');
        elements.nav.search.self.removeClass('haveResults');
    });
    elements.nav.search.input.self.keyup(function(){
        if($(this).text().length > 0){
            elements.nav.search.self.addClass('haveResults');
            elements.nav.self.addClass('inSearching');
        }else{
            elements.nav.search.self.removeClass('haveResults');
        }
    });
    
    elements.main.block.minimize.self.click(function(){
        var blockParent = $(this).parent().parent().parent();
        if(!blockParent.hasClass('minimize')){
            blockParent.addClass('minimize');
            $(this).addClass('active');
        }else{
            blockParent.removeClass('minimize');
            $(this).removeClass('active');
        }
    });    
    elements.side.menu.link.have_child.click(function(e){
        e.preventDefault();
        var linkParent = $(this).parent();
        if(!linkParent.hasClass('show_childrent')){
            elements.side.menu.li.removeClass('show_childrent');
            linkParent.addClass('show_childrent');
            $(this).addClass('show_childrent');
        }else{
            linkParent.removeClass('show_childrent');
            $(this).removeClass('show_childrent');
        }
    });
    elements.nav.control.btn.click(function(){
        var par = $(this).parent();
        if(!par.hasClass('show')){
            elements.nav.control.parents.removeClass('show');
            par.addClass('show');
        }else{
            par.removeClass('show');
        }
    });
});







var chart_h = 40;
var chart_w = 80;
var stepX = 77 / 14;

var chart_1_y = [
  15, 25, 40, 30, 45, 40, 35, 55, 37, 50, 60, 45,70, 78
];
var chart_2_y = [
  80, 65, 65, 40, 55, 34, 54, 50, 60, 64, 55, 27, 24, 30
];

function point(x, y) {
    x: 0;
    y: 0;
}
/* DRAW GRID */
function drawGrid(graph) {
    var graph = Snap(graph);
    var g = graph.g();
    g.attr('id', 'grid');
    for (i = 0; i <= stepX + 2; i++) {
        var horizontalLine = graph.path(
            "M" + 0 + "," + stepX * i + " " +
            "L" + 77 + "," + stepX * i);
        horizontalLine.attr('class', 'horizontal');
        g.add(horizontalLine);
    };
    for (i = 0; i <= 14; i++) {
        var horizontalLine = graph.path(
            "M" + stepX * i + "," + 38.7 + " " +
            "L" + stepX * i + "," + 0)
        horizontalLine.attr('class', 'vertical');
        g.add(horizontalLine);
    };
}
drawGrid('#chart-2');
drawGrid('#chart-1');

function drawLineGraph(graph, points, container, id) {


    var graph = Snap(graph);


    /*END DRAW GRID*/

    /* PARSE POINTS */
    var myPoints = [];
    var shadowPoints = [];

    function parseData(points) {
        for (i = 0; i < points.length; i++) {
            var p = new point();
            var pv = points[i] / 100 * 40;
            p.x = 83.7 / points.length * i + 1;
            p.y = 40 - pv;
            if (p.x > 78) {
                p.x = 78;
            }
            myPoints.push(p);
        }
    }

    var segments = [];

    function createSegments(p_array) {
        for (i = 0; i < p_array.length; i++) {
            var seg = "L" + p_array[i].x + "," + p_array[i].y;
            if (i === 0) {
                seg = "M" + p_array[i].x + "," + p_array[i].y;
            }
            segments.push(seg);
        }
    }

    function joinLine(segments_array, id) {
        var line = segments_array.join(" ");
        var line = graph.path(line);
        line.attr('id', 'graph-' + id);
        var lineLength = line.getTotalLength();

        line.attr({
            'stroke-dasharray': lineLength,
                'stroke-dashoffset': lineLength
        });
    }

    function calculatePercentage(points, graph) {
        var initValue = points[0];
        var endValue = points[points.length - 1];
        var sum = endValue - initValue;
        var prefix;
        var percentageGain;
        var stepCount = 1300 / sum;

        function findPrefix() {
            if (sum > 0) {
                prefix = "+";
            } else {
                prefix = "";
            }
        }

        var percentagePrefix = "";

        function percentageChange() {
            percentageGain = initValue / endValue * 100;
            
            if(percentageGain > 100){
              console.log('over100');
              percentageGain = Math.round(percentageGain * 100*10) / 100;
            }else if(percentageGain < 100){
              console.log('under100');
              percentageGain = Math.round(percentageGain * 10) / 10;
            }
            if (initValue > endValue) {
              
                percentageGain = endValue/initValue*100-100;
                percentageGain = percentageGain.toFixed(2);
              
                percentagePrefix = "";
                $(graph).find('.percentage-value').addClass('negative');
            } else {
                percentagePrefix = "+";
            }
          if(endValue > initValue){
              percentageGain = endValue/initValue*100;
              percentageGain = Math.round(percentageGain);
          }
        };
        percentageChange();
        findPrefix();

        var percentage = $(graph).find('.percentage-value');
        var totalGain = $(graph).find('.total-gain');
        var hVal = $(graph).find('.h-value');

        function count(graph, sum) {
            var totalGain = $(graph).find('.total-gain');
            var i = 0;
            var time = 1300;
            var intervalTime = Math.abs(time / sum);
            var timerID = 0;
            if (sum > 0) {
                var timerID = setInterval(function () {
                    i++;
                    totalGain.text(percentagePrefix + i);
                    if (i === sum) clearInterval(timerID);
                }, intervalTime);
            } else if (sum < 0) {
                var timerID = setInterval(function () {
                    i--;
                    totalGain.text(percentagePrefix + i);
                    if (i === sum) clearInterval(timerID);
                }, intervalTime);
            }
        }
        count(graph, sum);

        percentage.text(percentagePrefix + percentageGain + "%");
        totalGain.text("0%");
        setTimeout(function () {
            percentage.addClass('visible');
            hVal.addClass('visible');
        }, 1300);

    }


    function showValues() {
        var val1 = $(graph).find('.h-value');
        var val2 = $(graph).find('.percentage-value');
        val1.addClass('visible');
        val2.addClass('visible');
    }

    function drawPolygon(segments, id) {
        var lastel = segments[segments.length - 1];
        var polySeg = segments.slice();
        polySeg.push([78, 38.4], [1, 38.4]);
        var polyLine = polySeg.join(' ').toString();
        var replacedString = polyLine.replace(/L/g, '').replace(/M/g, "");

        var poly = graph.polygon(replacedString);
        var clip = graph.rect(-80, 0, 80, 40);
        poly.attr({
            'id': 'poly-' + id,
            /*'clipPath':'url(#clip)'*/
                'clipPath': clip
        });
        clip.animate({
            transform: 't80,0'
        }, 1300, mina.linear);
    }

      parseData(points);
      
      createSegments(myPoints);
      calculatePercentage(points, container);
      joinLine(segments,id);
 
      drawPolygon(segments, id);
    

    /*$('#poly-'+id).attr('class','show');*/

    /* function drawPolygon(segments,id){
      var polySeg = segments;
      polySeg.push([80,40],[0,40]);
      var polyLine = segments.join(' ').toString();
      var replacedString = polyLine.replace(/L/g,'').replace(/M/g,"");
      var poly = graph.polygon(replacedString);
      poly.attr('id','poly-'+id)
    }
    drawPolygon(segments,id);*/
}
function drawCircle(container,id,progress,parent){
  var paper = Snap(container);
  var prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
  var lineL = prog.getTotalLength();
  var oneUnit = lineL/100;
  var toOffset = lineL - oneUnit * progress;
  var myID = 'circle-graph-'+id;
  prog.attr({
    'stroke-dashoffset':lineL,
    'stroke-dasharray':lineL,
    'id':myID
  });
  
  var animTime = 1300/*progress / 100*/
  
  prog.animate({
    'stroke-dashoffset':toOffset
  },animTime,mina.easein);
  
  function countCircle(animtime,parent,progress){
    var textContainer = $(parent).find('.circle-percentage');
    var i = 0;
    var time = 1300;
    var intervalTime = Math.abs(time / progress);
    var timerID = setInterval(function () {
      i++;
      textContainer.text(i+"%");
      if (i === progress) clearInterval(timerID);
    }, intervalTime);           
  }
  countCircle(animTime,parent,progress);
}

$(window).on('load',function(){
    drawCircle('#chart-3',1,77,'#circle-1');
    drawCircle('#chart-4',2,53,'#circle-2');
    drawCircle('#chart-5',2,100,'#circle-5');
    drawLineGraph('#chart-1', chart_1_y, '#graph-1-container', 1);
    drawLineGraph('#chart-2', chart_2_y, '#graph-2-container', 2);
});
