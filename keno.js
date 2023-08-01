const nums = [];
for (let i = 1; i <= 80; i++) {
    nums.push(i);
}

const keno = {
    nums,
    draw: (n = 20) => {
        const shuffled = nums.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }
};

export default keno;