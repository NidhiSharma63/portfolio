
export const MyProjectsChildAnim = () =>{
  const Item = document.querySelectorAll('.projects-container');
  let options = {
    root: document.querySelector('#scrollArea'),
    threshold: 0.25,
    rootMargin:'0px 0px 0px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      Item.forEach(list => {
        list.classList.remove('projects-container-anim');
        observer.disconnect();
      });
    })
  }, options);
  Item.forEach(list => {
    observer.observe(list);
  }
  );
  // observer.observe(Item);
};