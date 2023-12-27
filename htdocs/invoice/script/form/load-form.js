MktoForms2.loadForm("//pages.airregi.jp", "875-JJP-228", 3182, function(form) {
  removeLoading();

  form.onSuccess(function(values, followUpUrl) {
    location.href = "/invoice/document_request/thanks/";
    return false;
  });
});

MktoForms2.loadForm("//pages.airregi.jp", "875-JJP-228", 3282, function(form) {
  removeLoading();

  form.onSuccess(function(values, followUpUrl) {
    location.href = "/invoice/it-hojo/contact/thanks";
    return false;
  });
});

MktoForms2.loadForm("//pages.airregi.jp", "875-JJP-228", 3693, function(form) {
  removeLoading();

  form.onSuccess(function(values, followUpUrl) {
    location.href = "/invoice/inquiry/thanks";
    return false;
  });
})

function removeLoading() {
  // DocumentRequestForm で定義されているDOM
  const loading = document.querySelector("#mktoForm-spinner");
  if (loading === null) {
    return;
  }
  loading.remove();
}
