const p1 = result => new Promise();
const p2 = result => new Promise();
const p3 = result => new Promise();
const p4 = result => new Promise();

p1(1).then(res => {
    p2(res)
}).catch(err => {
    p3(err)
}).finally(() => {
    p4();
})

const func = async () => {
    try {
        const res = await p1(1);
        p2(res);
    } catch (err) {
        p3(err);
    } finally {
        p4();
    }
}