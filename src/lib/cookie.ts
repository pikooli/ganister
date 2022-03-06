import Cookies from "js-cookie";

const set = (key: string, value: any) => {
  try {
    Cookies.set(key, JSON.stringify(value), { expires: 7 });
  } catch (e) {
    return "";
  }
};

const get = (key: string) => {
  const cookie = Cookies.get(key);
  if (!cookie) {
    return null;
  }
  try {
    return JSON.parse(cookie);
  } catch (e) {
    return "";
  }
};

const remove = (key: string) => {
  return Cookies.remove(key);
};

const cookie = {
  set,
  get,
  remove,
};

export default cookie;
