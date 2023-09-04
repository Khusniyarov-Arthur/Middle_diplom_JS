import { animate } from "./helpers";

export const mySlider = () => {
  const row = document.getElementById("row");
  const mySlide = row.querySelectorAll(".mySlide");
  const servicesArrows = document.querySelector(".services-arrows");

  let step = 0;
  const moveSlide = (step) => {
    mySlide.forEach((item) => {
      item.style.display = "none";
    });

    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        if (step < 3) {
          mySlide[step].after(mySlide[step + 1]);
          mySlide[step].style.display = "block";
          mySlide[step].style.opacity = progress;

          if (window.document.documentElement.clientWidth > 576) {
            mySlide[step + 1].style.display = "block";
            mySlide[step + 1].style.opacity = progress;
          }
        }
        if (step == 3) {
          mySlide[step].after(mySlide[0]);
          mySlide[step].style.display = "block";
          mySlide[step].style.opacity = progress;
          if (window.document.documentElement.clientWidth > 576) {
            mySlide[0].style.display = "block";
            mySlide[0].style.opacity = progress;
          }
        }
      },
    });
  };

  addEventListener("resize", () => {
    setTimeout(() => {
      moveSlide(step);
    }, 2000);
  });

  servicesArrows.addEventListener("click", (e) => {
    if (e.target.classList.contains("left")) {
      if (step == 0) {
        step = 3;
      } else {
        step--;
      }
    }
    if (e.target.classList.contains("right")) {
      step++;
      if (step > 3) {
        step = 0;
      }
    }
    moveSlide(step);
  });
};
