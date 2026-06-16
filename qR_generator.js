javascript:(function() {  var url = encodeURIComponent(window.location.href);  var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + url;  window.open(qrCodeUrl, "_blank");})();
