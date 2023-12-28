const debug = false;
let urlBase:string;
if (debug){
    urlBase = "http://localhost:3000" 
}
else{
    urlBase =
      "https://fakedb-json-server.artembusov3991.repl.co"; 
}
export default urlBase