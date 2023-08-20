export const getFormattedDate = (dateString: string) => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString),
  );
};
