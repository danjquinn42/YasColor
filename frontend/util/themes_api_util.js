export const getThemes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/themes'
  });
};

export const postTheme = (theme) => {
  return $.ajax({
    method: 'POST',
    url: 'api/themes',
    data: {theme}
  });
};//'api/themes


export const getTheme = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/themes/${id}`
  });
}; //'api/themes


export const patchTheme = (theme) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/themes/${theme.id}`,
    data: {theme}
  });
}; // 'api/themes/:id


export const deleteTheme = (theme) => {
  return $.ajax({
    method: 'DELETE',
  });
}; //'api/themes/:id



// export const putTheme //'api/themes/:id
