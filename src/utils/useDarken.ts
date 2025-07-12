import { useEffect } from "react";

export function useDarken() {
  
  useEffect(() => {
    const contentDiv = document.getElementById('content');
    if (!contentDiv) return;
    
    function handleScroll() {
      if (!contentDiv) return;
      if (contentDiv.scrollTop > 0) contentDiv.classList.add('dark');
      else contentDiv.classList.remove('dark');
    }
    
    contentDiv.addEventListener('scrollend', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
}