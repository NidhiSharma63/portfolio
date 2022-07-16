

let CommonOptions = {
  root: document.querySelector('#scrollArea'),
  threshold: 0,
  rootMargin:'0px 0px -300px 0px'
}

export const AboutBannerTextAnim = () =>{
  
  const lists = document.querySelectorAll('.About-intro-container');

  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      lists.forEach(list => {
        list.classList.remove('About-text');
        observer.disconnect();
      });
    })
  }, CommonOptions);

  lists.forEach(list => {
    observer.observe(list);
  });
}

