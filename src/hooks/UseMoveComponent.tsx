export const UseMoveComponent = (ref: HTMLDivElement | null) => {
    if (ref) {
      const domPlace = ref.getBoundingClientRect();
      window.scrollTo({
        top: domPlace.top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };