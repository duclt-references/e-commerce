export const getAccessTokenFromLS = () =>
  localStorage.getItem('access_token') || '';

export const getCurrentUserFromLS = () => {
  const result = localStorage.getItem('current_user');
  return result ? JSON.parse(result) : null;
};
