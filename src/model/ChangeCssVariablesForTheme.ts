export function changeCssVariablesForTheme(theme: string) {
  const root = document.querySelector(":root") as HTMLElement;
  const components = [
    "--body-background",
    "--components-background",
    "--card-background",
    "--card-shadow",
    "--svg-background",
    "--search-field-background",
    "--svg-fill",
    "--text-color",
  ];

  components.forEach((component) => {
    root.style.setProperty(
      `${component}-default`,
      `var(${component}-${theme})`
    );
  });
}
