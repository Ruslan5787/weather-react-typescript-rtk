export const Storage = {
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
  },

  getItem: (name: string) => {
    const localStorageName = localStorage.getItem(name);

    if (localStorageName) {
      return JSON.parse(localStorageName);
    }
  },
};
