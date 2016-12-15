export const patchUser = ({user}) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: user
  });
}; // 'api/users/:id
