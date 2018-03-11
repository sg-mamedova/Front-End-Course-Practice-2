
export default function createCounter(n) {
    let value = -n;
    return () => value += n;
}
