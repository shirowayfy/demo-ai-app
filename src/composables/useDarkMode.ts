import { ref, watch } from "vue";

const isDark = ref(localStorage.getItem("theme") === "dark");

function applyTheme(dark: boolean) {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

// Apply on init
applyTheme(isDark.value);

export function useDarkMode() {
  watch(isDark, (val) => applyTheme(val));

  function toggleDark(value?: boolean) {
    isDark.value = value ?? !isDark.value;
  }

  return { isDark, toggleDark };
}
