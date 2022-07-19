const outsideClick = (element, userEvents, callback) => {
  const html = document.documentElement;
  const outside = "data-outside";

  userEvents.forEach((userEvent) => {
    !element.hasAttribute(outside) &&
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    element.setAttribute(outside, "");
  });

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      callback();
      userEvents.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
        element.removeAttribute(outside);
      });
    }
  }
};
export default outsideClick;
