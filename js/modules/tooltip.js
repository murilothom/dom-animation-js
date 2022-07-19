const tooltips = document.querySelectorAll("[data-tooltip]");

const tooltip = () => {
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const tooltipBox = document.createElement("div");
      const text = item.getAttribute("aria-label");

      item.addEventListener("mousemove", cbListenerMove);

      function cbListenerMove(e) {
        tooltipBox.style.top = e.pageY + 20 + "px";
        tooltipBox.style.left = e.pageX + 20 + "px";
      }

      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);

      item.addEventListener("mouseleave", cbListenerLeave);

      function cbListenerLeave() {
        tooltipBox.remove();
        item.removeEventListener("mouseleave", cbListenerLeave);
        item.removeEventListener("mousemove", cbListenerMove);
      }
    });
  });
};

export default tooltip();
