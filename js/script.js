



// window.addEventListener('load', function () {
//     const loader = 
// })

(function () {





    var circle = document.querySelector('circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;

    setProgress(0);


    function id(v) { return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("loader-container"),
            stat = id("perc"),
            img = document.images,
            c = 0;
            tot = img.length;
        // console.log('tot :>> ', tot);

        function imgLoaded() {
            c += 1;
            var valuePerc = ((100 / tot * c) << 0);
            var perc = ((100 / tot * c) << 0) + "%";
            // console.log('c :>> ', c);

            if (valuePerc < 101 && valuePerc > -1) {
                setProgress(valuePerc);
            }
            console.log('perc :>> ', perc);
            // prog.style.width = perc;
            stat.innerHTML = perc;
            if (c === tot) return doneLoading();
        }
        function doneLoading() {
            setTimeout(function () {
                ovrl.style.opacity = 0;
                setTimeout(function () {
                    ovrl.style.display = "none";
                }, 1200);
            }, 1200);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
            console.log('tImg :>> ', tImg);
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);




    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }


}());