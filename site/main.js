let d;
document.addEventListener('click', e => {

  const t = e.target;

  if (d?.open && t.closest('dialog') === d) {
    d.close();
    return;
  }

  const m = t.dataset.email;
  if (m) {
    e.preventDefault();
    window.location.href = `mailto:${ m.replace(/\{at\}/,'@').replace(/dot/g,'.').replace(/\s/g,'') }?subject=view%2019%20Rosebery%20Road`;
    return;
  }

  const i = t.src;
  if (i) {

    if (!d) {
      d = document.body.appendChild( document.createElement('dialog') );
      d.setAttribute('closedBy', 'any');
    }

    d.innerHTML = `<img src="${ i }">`;
    d.showModal();

  }

});
