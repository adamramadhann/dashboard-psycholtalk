
interface pathUrl {
    path : string,
    namaPage : string,
    children? : pathUrl[]
}

export const dataPathUrl: pathUrl[] =  [
    {path : "/", namaPage : "Home", children:[]},
    {path : "", namaPage : "list ", children : [
        {path : '/listDoctor', namaPage:'Doctor'},
        {path : '/listPasient', namaPage:'Pasient'},
    ]} 
]