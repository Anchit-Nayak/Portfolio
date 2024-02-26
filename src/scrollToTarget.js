function scrollToTarget(targetElementId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      const { top } = targetElement.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + top - 200, behavior: 'smooth' });
      // Adjust the value (-50 in this case) to determine how much above the target you want to scroll
    }
}

export default scrollToTarget;