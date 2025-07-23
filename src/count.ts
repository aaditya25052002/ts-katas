export const count = <T>(target: T, list: T[]) => {
  return list.filter((item) => item === target).length;
};
