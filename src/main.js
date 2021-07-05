import { cube } from "./lib/math.js";

export default function myEdgeFunction(req, res) {
   const result = cube(Math.PI);
   // query type is URLSearchParams https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
   // e.g. if the url is http://example.com/push?foo=abc&foo=xyz
   // req.query.get("foo") returns abc
   console.log(req.query.get("foo"));
   // req.query.getAll("foo") returns [abc, xyz]
   console.log(req.query.getAll("foo"));
   // req and res headers type is Headers https://developer.mozilla.org/en-US/docs/Web/API/Headers
   console.log(req.headers.get("x-header"));
   res.headers.set('x-set', 'wow')
   res.headers.append("x-append", "foo");
   res.headers.append("x-append", "bar");
   // you can chain status and send
   // status function param type can be a number or a string
   res.status('200').send(`Welcome to Yahoo!! EdgeCast PI Cubed: ${result}`);
}
