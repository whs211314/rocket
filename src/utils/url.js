/**
 * 将对象拼接成url参数形式
 * @param {object} data
 */
export const transformData = (data) => {
  let ret = '';
  const keys = Object.keys(data);
  for (let i = 0, l = keys.length; i < l; i += 1) {
    const it = keys[i];
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`;
  }
  return ret;
};

/**
 * 获取参数上某个key的值
 * @param {String} name
 * 注意：说查询字符串search只能在取到“？”后面和“#”之前的内容，如果“#”之前没有“？”search取值为空
 */
export const getQueryString = (name) => {
  let r = null;
  const param = window.location.hash.split('?')[1];
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  if (param) {
    r = param.match(reg);
  }
  if (r !== null) return unescape(r[2]);
  return null;
};
