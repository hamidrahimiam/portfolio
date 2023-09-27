window.onload = function() {
    document.getElementById('toggleMedium').onclick = function(){
        var body = document.getElementsByTagName("body")[0];
        if(body.classList.contains('responsive')){
            body.classList.remove("responsive");
            body.classList.remove("medium");
        }else{
            body.classList.toggle("medium");
        }
    };
    document.getElementById('toggleResponsive').onclick = function(){
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("medium");
        body.classList.toggle("responsive");
    };
    document.getElementById('toggleLanguageBox').onclick = function(){
        var languageBox = document.getElementById("languageBox");
        languageBox.classList.toggle("d-none");
    };
    document.getElementById('btnUrlTab').onclick = function(){
        var btnUrlTab = document.getElementById("btnUrlTab");
        var ctnUrlTab = document.getElementById("ctnUrlTab");

        var btnFileTab = document.getElementById("btnFileTab");
        var ctnFileTab = document.getElementById("ctnFileTab");

        btnUrlTab.classList.remove("active");
        btnFileTab.classList.remove("active");

        ctnFileTab.classList.add("d-none");

        btnUrlTab.classList.add("active");
        ctnUrlTab.classList.remove("d-none");
    };
    document.getElementById('btnFileTab').onclick = function(){
        var btnUrlTab = document.getElementById("btnUrlTab");
        var ctnUrlTab = document.getElementById("ctnUrlTab");

        var btnFileTab = document.getElementById("btnFileTab");
        var ctnFileTab = document.getElementById("ctnFileTab");

        btnUrlTab.classList.remove("active");
        btnFileTab.classList.remove("active");

        ctnUrlTab.classList.add("d-none");

        btnFileTab.classList.add("active");
        ctnFileTab.classList.remove("d-none");
    };

    // dashboard chart js
    // Chart.defaults.global.defaultFontFamily = "'Vazir'";
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد'],
            datasets: [{
                label: 'MB',
                data: [8, 2, 3, 5, 2, 3],
                backgroundColor: [
                    '#FFBF3A'
                ],
                borderColor: [
                    '#FFBF3A',
                ],
                borderWidth: 4,
            }]
        },
        options: {
            plugins: {
                legend: {
                  display: false
                }
            }
        }
    });
    Chart.defaults.global.defaultFontFamily = "Georgia";
}