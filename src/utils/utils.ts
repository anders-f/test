export const css = (...classes: string[]) => {
  return classes.reduce((acc, cssClass) => acc + " " + cssClass, "");
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("sv-SE").format(number);
};
