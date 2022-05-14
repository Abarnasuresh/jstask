let a="network connection";
document.getElementById("a").innerHTML = a;
    
    const MyInterval = setInterval(function () {
        let Internetstatus = navigator.onLine ? "Online" : "Offline";
        document.getElementById("status").innerHTML = Internetstatus;
    }, 1000);
    setTimeout(() => {
        clearInterval(MyInterval);
        document.getElementById("status").innerHTML = "";
    }, 120000);
 