const customFetch = async (url: string, options: Obj) => {
  return await fetch(url, options).then((res) => {
    return res;
  });
};

//
const urlWithParams = (url: string, params?: Obj) => {
  if (!params) {
    return url;
  }
  let i = 0;
  for (let key in params) {
    url += i ? `&${key}=${params[key]}` : `?${key}=${params[key]}`;
    i++;
  }
  return url;
};

//
export const get = async ({
  url,
  params,
  headers,
}: {
  url: string;
  params?: Obj;
  headers?: Obj;
}) => {
  url = urlWithParams(url, params);
  const options = headers
    ? {
        method: "GET",
        headers,
      }
    : {
        method: "GET",
      };
  return await customFetch(url, options).then((res) => {
    return res;
  });
};

//
export const post = async (url: string, body: Obj, header?: Obj) => {
  const headers = header
    ? { ...header, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
  return await customFetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => {
    return res;
  });
};
