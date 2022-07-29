export function changeCssVariablesForTheme(theme: string) {
  const root = document.querySelector(":root") as HTMLElement;
  const components = [
    "--body-background",
    "--components-background",
    "--card-background",
    "--card-shadow",
    "--svg-background",
    "--svg-fill",
    "--error-notification-background",
    "--text-color",
    "--search-field-background",
  ];

  components.forEach((component) => {
    root.style.setProperty(
      `${component}-default`,
      `var(${component}-${theme})`
    );
  });
}
