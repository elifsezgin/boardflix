
export const fetchVideos = (category,
                            search,
                            success,
                            error) => {
  $.ajax({
    type: 'get',
    url: `api/videos?category=${category}&search=${search}`,
    success,
    error
  });
};

export const fetchVideo = (id, success, error) =>{
  $.ajax({
    type: 'get',
    url: `api/videos/${id}`,
    success,
    error
  });
};

export const createVideo = (video, success, error) =>{
  $.ajax({
    type: 'post',
    url: 'api/videos/',
    success,
    error
  });
};

export const updateVideo = (video, success, error) =>{
  $.ajax({
    type: 'patch',
    url: `api/videos/${video.id}`,
    success,
    error
  });
};

export const deleteVideo = (id, success, error) =>{
  $.ajax({
    type: 'delete',
    url: `api/videos/${id}`,
    success,
    error
  });
};
