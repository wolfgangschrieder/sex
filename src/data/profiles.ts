export type Profile = { slug:string; name:string; age:number; city:'Волгоград'|'Волжский'; district:string; price:number; services:string[]; description:string; tone:string; };
export const profiles:Profile[]=[
{slug:'alina',name:'Алина',age:28,city:'Волгоград',district:'Центральный',price:4000,services:['Релакс','SPA'],description:'Атмосфера спокойствия, расслабления и заботы о себе.',tone:'rose'},
{slug:'viktoria',name:'Виктория',age:30,city:'Волгоград',district:'Ворошиловский',price:5000,services:['Релакс','Аромамассаж'],description:'Тёплая атмосфера и индивидуальный подход к отдыху.',tone:'gold'},
{slug:'maria',name:'Мария',age:27,city:'Волжский',district:'Новый город',price:3500,services:['SPA','Аромамассаж'],description:'Ритуалы расслабления и восстановления гармонии.',tone:'plum'},
{slug:'sofia',name:'София',age:29,city:'Волжский',district:'Старый город',price:4500,services:['Релакс','SPA'],description:'Уютная эстетика, мягкий свет и неторопливый отдых.',tone:'clay'}
];
