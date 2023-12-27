yahoo_report_conversion = function(url) {
  var opt = {
    "yahoo_conversion_id": 1001233452,
    "yahoo_conversion_label": "SkuMCMOY3LMDEMqwi7Qo",
    "yahoo_conversion_value": 0,
    "yahoo_remarketing_only": false,
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yss_call_conversion", "config": opt});

  // 資料ダウンロードページ到達時のスクリプト
  var opt1 = {
    "yahoo_conversion_id": 1001233452,
    "yahoo_conversion_label": "KIGSCIKkp88YEMqwi7Qo",
    "yahoo_conversion_value": 0,
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yss_conversion", "config": opt1});

  var opt2 = {
    "yahoo_ydn_conv_io": "VEG7HID1xZx47NaDEGFH4g..",
    "yahoo_ydn_conv_label": "2J9S33LJZTPWS94EEE1037441",
    "yahoo_ydn_conv_transaction_id": "",
    "yahoo_ydn_conv_value": 0,
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yjad_conversion", "config": opt2});

  // 問い合わせ完了ページのタグ
  var opt3 = {
    "yahoo_conversion_id": "1001233452",
    "yahoo_conversion_label": "-XwWCLrPqNMYEMqwi7Qo",
    "yahoo_conversion_value": 0,
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yss_conversion", "config": opt3});

  var opt4 = {
    "yahoo_ydn_conv_io": "VEG7HID1xZx47NaDEGFH4g..",
    "yahoo_ydn_conv_label": "D7IJOBQ7VT45Y5U9PL1038391",
    "yahoo_ydn_conv_transaction_id": "",
    "yahoo_ydn_conv_value": 0,
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yss_conversion", "config": opt4});

  // 問い合わせページ到達時のタグ
  var opt5 = {
    "yahoo_conversion_id": "1001233452",
    "yahoo_conversion_label": "c704CP2iq9MYEMqwi7Qo",
    "yahoo_conversion_value": "0",
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yss_conversion", "config": opt5});

  var opt6 = {
    "yahoo_ydn_conv_io": "VEG7HID1xZx47NaDEGFH4g..",
    "yahoo_ydn_conv_label": "1HTPJXP1I11ZKJLMQS1038392",
    "yahoo_ydn_conv_transaction_id": "",
    "yahoo_ydn_conv_value": "0",
    "onload_callback": function() {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    }
  };
  ytag({"type":"yjad_conversion", "config": opt6});
}
