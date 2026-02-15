import { ref, watch } from "vue";

const isDark = ref(localStorage.getItem("theme") === "dark");

function applyTheme(dark: boolean) {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

// Apply on init
applyTheme(isDark.value);

// React to changes
watch(isDark, (val) => applyTheme(val));

export function useDarkMode() {
  return { isDark };
}
