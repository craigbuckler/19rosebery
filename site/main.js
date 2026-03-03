let d;
document.addEventListener('click', e => {

  const t = e.target;

  if (d?.open && t.closest('dialog') === d) {
    d.close();
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

  const m = t.dataset.mto;
  if (m) {
    e.preventDefault();
    window.location.href = 'ma'+`ilto:${ m }@roseberyroad.co.uk?subject=Rosebery%20Road%20viewing`;
  }

});
