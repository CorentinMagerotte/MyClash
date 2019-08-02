const API_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBjNDE0NDkxLWI3NmYtNDBmMS04ODAxLTQ5ZGU0MDc4M2UxNyIsImlhdCI6MTU2NDY2MDUwNywic3ViIjoiZGV2ZWxvcGVyLzNjYWE1NzU3LTY2MGItODkzOS05ZGZkLTQzYjljOTJhY2UxYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE0OS4xNTQuMjIwLjEyMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.vFiC-W_AHlLov_yxvwFm8orQOjmcgJJ_GA-xEIT903Q9LEjGVghxLQzejLpd2sKyCTXUYvSVHDM9xf8EDn5V3g";

let url =
  "https://api.clashofclans.com/v1/players/%232YROR22LC?authorization=" +
  API_TOKEN;

import axios from "axios";
import Search from "../Components/Search";

const config = {
  headers: { Accept: "application/json", Authorization: "Bearer " + API_TOKEN }
};

export function getPlayer(player) {
  console.log("handleClick");
  axios
    .get("https://api.clashofclans.com/v1/players/" + player, config)
    .then(response => {
      return response;

      //return response.data;
    })
    .catch(error => console.log(error));
}
