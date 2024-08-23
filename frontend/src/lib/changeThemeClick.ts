export function changeThemeClick(theme: string){
  if(theme === "light"){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else if(theme === "dark"){
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  if(theme === "system"){
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if(systemTheme === "dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", "system");
  }
}