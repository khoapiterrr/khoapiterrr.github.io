document.addEventListener(
  'DOMContentLoaded',
  () => {
    const btnSideBar = document.getElementById('btnSideBar'),
      page = document.getElementById('page'),
      overlay = document.getElementById('overlay'),
      navRight = document.getElementById('navRight'),
      crtSidebarClose = document.getElementById('crtSidebarClose');
    const aboutMe = document.getElementById('aboutMe'),
      skills = document.getElementById('skills'),
      education = document.getElementById('education'),
      interested = document.getElementById('interested'),
      btnAboutme = document.getElementById('btnAboutme'),
      btnSkill = document.getElementById('btnSkill'),
      btnEducation = document.getElementById('btnEducation'),
      btnLove = document.getElementById('btnLove'),
      scroolToTop = document.getElementById('scroolToTop');
    const sectionPage = [aboutMe, skills, education, interested];
    // scroll to div
    btnLove.onclick = () => {
      interested.scrollIntoView();
    };
    btnEducation.onclick = () => {
      education.scrollIntoView();
    };
    btnSkill.onclick = () => {
      skills.scrollIntoView();
    };
    btnAboutme.onclick = () => {
      aboutMe.scrollIntoView();
    };

    btnSideBar.onclick = () => {
      page.classList.add('hidden-scroll'),
        overlay.classList.remove('hidden-overlay'),
        navRight.classList.remove('nav-right-hidden');
    };
    overlay.onclick = () => {
      page.classList.remove('hidden-scroll'),
        overlay.classList.add('hidden-overlay'),
        navRight.classList.add('nav-right-hidden');
    };
    crtSidebarClose.onclick = overlay.onclick;
    document.getElementById('scroolToTop').onclick = () => {
      scroolToTop.classList.add('hidden-scroll'),
        scroolToTop.classList.remove('visibility-scroll'),
        setTimeout(() => (scroolToTop.style.display = 'none'), 600),
        document.body.scrollIntoView();
    };
    for (const item of sectionPage) {
      if (
        !checkExitedAnimated(item) &&
        window.scrollY + screen.height > item.offsetTop
      ) {
        item.classList.add('section-animated');
        item.classList.remove('section-animate');
      }
    }
    window.onscroll = () => {
      const crollCurrent = window.scrollY,
        heighScroll = document.body.scrollHeight;
      crollCurrent > 0.1 * heighScroll
        ? (scroolToTop.classList.add('visibility-scroll'),
          scroolToTop.classList.remove('hidden-scroll'),
          setTimeout(() => (scroolToTop.style.display = 'block'), 600))
        : (scroolToTop.classList.add('hidden-scroll'),
          scroolToTop.classList.remove('visibility-scroll'),
          setTimeout(() => (scroolToTop.style.display = 'none'), 600));

      for (const item of sectionPage) {
        if (
          !checkExitedAnimated(item) &&
          crollCurrent + screen.height > item.offsetTop
        ) {
          item.classList.add('section-animated');
          item.classList.remove('section-animate');
        }
      }
    };
  },
  false,
);

const checkExitedAnimated = (e) => e.classList.contains('section-animated');
