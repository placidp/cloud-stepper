export const getInitials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('');

export const findOne = (arr: any[], id: string) => arr.findIndex((item) => item.id === id);
