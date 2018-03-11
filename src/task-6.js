
export default function findPath(obj, keyPath) {
    let path = keyPath ? `${keyPath}.` : '';

    if(!Object.keys(obj).length) {
        return null;
    } else {
        for (const key in obj) {
        if(obj[key] === 15) {
            return path + key;
        } else if (typeof obj[key] === "object") {
            if(Array.isArray(obj[key])){
            let pathlast = `${key}.` + obj[key].map((a, i) => findPath(a,i)).filter(item => item)[0];

                path += pathlast;
            } else {
                path += findPath(obj[key], key);
            }
        }
    }
        return path || null;
    }

}
