import http from "k6/http";
import { check } from "k6";

export let options = {
    stages: [
        {duration: '2m', rps: 100, target: 10},
        {duration: '2m', rps:500, target: 50},
        {duration: '2m', rps:1000, target:100}
    ]
}

export default function() {
  let res = http.get("http://localhost:4000");
  check(res, {
    "status was 200": r => r.status == 200,
    "transaction time OK": r => r.timings.duration < 200
  });
};