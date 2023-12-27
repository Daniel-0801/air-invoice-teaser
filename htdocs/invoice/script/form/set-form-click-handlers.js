MktoForms2.onFormRender(function() {
  // マルケト内のAA要件
  setPrivacyPolicyOnClick(function() {
    scCustomLink('invoice:document_request:privacy_policy', '', {'eVar2':'invoice:document_request:privacy_policy'});
  });
});

function setPrivacyPolicyOnClick(func) {
  const form = document.getElementById('mktoForm_3182');
  if (form === null) {
    return;
  }

  const links = form.getElementsByTagName('a');
  if (links.length === 0) {
    return;
  }

  const privacyPolicyLink = links[0];
  privacyPolicyLink.onclick = func;
}
