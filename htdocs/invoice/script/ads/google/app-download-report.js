// Event snippet for Airインボイス_CV2_Appインストールボタンクリック(プロモ) conversion page
// In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-643791225/CA6VCPnN27MDEPny_bIC',
    'event_callback': callback
  });
  return false;
}
