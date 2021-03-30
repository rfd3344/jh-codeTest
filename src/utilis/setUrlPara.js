
/**
* @used  added parameters to url
* @param {string} url
* @param {object} para
* @return {string} new url with parameters
*/
export default function setUrlPara(url = '', para = {}) {
	let res = `${url}?`;
	Object.keys(para).forEach((key) => {
		res = res.concat(`${key}=${para[key]}&`);
	});
	res = res.slice(0, -1);
	return res;
}
