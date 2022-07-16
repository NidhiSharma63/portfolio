export const MainWrapperAnim = ({selector,classes}) =>{
  const Item = document.querySelector(`.${selector}`);

  let options = {
    root: document.querySelector('#scrollArea'),
    threshold: 0.1,
    rootMargin:'0px 0px 100px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      Item.classList.remove(`${classes}`);
      observer.disconnect();
    })
  }, options);
  observer.observe(Item);
};


export const childTranslateX = ({selector,classes}) =>{
  const Item = document.querySelector(`.${selector}`);

  let options = {
    root: document.querySelector('#scrollArea'),
    threshold: 0.1,
    rootMargin:'0px 0px 100px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      console.log('intersecting');
      Item.classList.remove(`${classes}`);
      observer.disconnect();
    })
  }, options);
  observer.observe(Item);
};