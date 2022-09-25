export default function polynomial(n, s0, s1, s2, s3) {
    return s3 * Math.pow(n, 3) + s2 * Math.pow(n, 2) + s1 * n + s0;
}