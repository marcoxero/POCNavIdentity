window.AddButton = (caption, icon, code) => {
    var button = $('<a class="action noselect image-control-btn"><i class="fa ' + icon + ' fa-sm" aria-hidden="true"></i>' + caption + '</a>').click(code);
    $(".image-controls").append(button);
}

window.InitCanvas = ()=>{
    var $img = $(".doc-page img");
    var $canvas = $("<canvas id='annotations'></canvas>");
    $(".doc-page").append($canvas);
    window.Canvas = this.__canvas = new fabric.Canvas('annotations', { isDrawingMode: true });
    Canvas.freeDrawingBrush.width = 15;
    Canvas.freeDrawingBrush.color = 'rgba(255, 255, 0, 0.4)';

    const resizeObserver = new ResizeObserver(()=> {
        $(".canvas-container")
            .css("position", "absolute")
            .css('top', $img.css('top'))
            .css('left', $img.css('left'))
            .css('margin', $img.css('margin'))
            .css('transform', $img.css('transform'))
            .offset($img.offset())
            .height($img.height())
            .width($img.width()); 

            Canvas.setWidth($img.width());
            Canvas.setHeight($img.height());
        }).observe($(".doc-page")[0]);

    var documentId = $(".document-metadata").first().text().replace('Document ID:', '').trim();

    AddButton("Save", "fa-download", () => { localStorage.setItem(documentId, JSON.stringify(Canvas.toJSON())) });
    AddButton("Load", "fa-upload", () => { 
        var data = localStorage.getItem(documentId)
        if(data)
            Canvas.loadFromJSON(data); 
        else
            Canvas.clear();
    });    
    AddButton("Draw", "fa-edit", ()=>{ Canvas.isDrawingMode = !Canvas.isDrawingMode });
}

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js", InitCanvas);

