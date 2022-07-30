import axios from 'axios';

const instance = axios.create({
  baseURL: "http://122.248.212.102:5001/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if ((originalConfig.url !== "/user/signin" || originalConfig.url !== "/register") && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          const userId = localStorage.getItem("id");
          const rs = await refresh({refreshToken, userId})
          localStorage.setItem("accessToken", rs.data.accessToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export const signUp = (data) => {
  return new Promise((resolve, reject) => {
    instance
      .post(`register`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (data) => {
  return new Promise((resolve, reject) => {
    instance.post(`user/signin`, data).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    instance.post(`logout`).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

const refresh = (data) => {
  return new Promise((resolve, reject) => {
    instance.put(`refresh`, data).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

// get Profile

export const getProfile = (id) => {
  return new Promise((resolve, reject) => {
    instance.get(`user/details?id=`+id).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

// Update Profie

export const updateProfile = (data) => {
  return new Promise((resolve, reject) => {
    instance.put(`user`,data).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

// Delete Existing Image

export const deleteImage = (modelName,imageUrl) => {
  return new Promise((resolve, reject) => {
    instance.delete(`deleteImage?modelName=`+modelName+`Imagename=`+imageUrl).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

// Upload Image 

export const uploadImage = (data) => {
  return new Promise((resolve, reject) => {
    instance.put(`uploadImages`,data).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

// Get Theme 

export const getTheme = () => {
  return new Promise((resolve, reject) => {
    instance.get(`records?recordType=gallerythemes`).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
