(function () {
    var style = document.createElement('style');
    style.textContent =
        '.cursor-follower{' +
            'position:fixed;' +
            'width:14px;' +
            'height:14px;' +
            'background:#E5202E;' +
            'border-radius:50%;' +
            'pointer-events:none;' +
            'z-index:99999;' +
            'transform:translate(-50%,-50%);' +
            'opacity:0;' +
            'transition:opacity .3s ease;' +
            'box-shadow:0 0 8px rgba(229,32,46,.7),0 0 18px rgba(229,32,46,.35);' +
        '}';
    document.head.appendChild(style);

    var dot = document.createElement('div');
    dot.className = 'cursor-follower';
    document.body.appendChild(dot);

    var mouseX = 0, mouseY = 0;
    var dotX   = 0, dotY   = 0;
    var visible = false;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!visible) {
            dot.style.opacity = '1';
            dotX = mouseX;
            dotY = mouseY;
            visible = true;
        }
    });

    document.addEventListener('mouseleave', function () {
        dot.style.opacity = '0';
        visible = false;
    });

    function tick() {
        dotX += (mouseX - dotX) * 0.12;
        dotY += (mouseY - dotY) * 0.12;
        dot.style.left = dotX + 'px';
        dot.style.top  = dotY + 'px';
        requestAnimationFrame(tick);
    }
    tick();
}());
