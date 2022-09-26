import polynomial from "./polynomial";

export default function bisection(form, a, b, step = 0) {
    const fa = polynomial(a, form.s0, form.s1, form.s2, form.s3);
    const fb = polynomial(b, form.s0, form.s1, form.s2, form.s3);
    const mid = (a + b) / 2;
    const fmid = polynomial(mid, form.s0, form.s1, form.s2, form.s3);
    if (fa * fb > 0) form.result.push({err: 'f(a) và f(b) cùng dấu'}); 
    else if (step <= form.p) {
        if (fmid === 0) form.result.push({step: step, mid: mid, a: a, fa: fa, b: b, fb: fb, fmid: fmid}); else {
            form.result.push({step: step, mid: mid, a: a, fa: fa, b: b, fb: fb, fmid: fmid});
            fa * fmid < 0? b = mid: a = mid;
            bisection(form, a, b, ++step);
        }
    }
}