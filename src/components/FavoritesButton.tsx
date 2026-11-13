'use client';
import {useEffect,useState} from 'react';
import {Heart} from 'lucide-react';
export default function FavoritesButton({slug}:{slug:string}){
 const [saved,setSaved]=useState(false);
 useEffect(()=>{try{setSaved(JSON.parse(localStorage.getItem('velvet:favorites')||'[]').includes(slug));}catch{}},[slug]);
 function toggle(){let arr:string[]=[];try{arr=JSON.parse(localStorage.getItem('velvet:favorites')||'[]');}catch{}const next=saved?arr.filter(x=>x!==slug):[...arr,slug];localStorage.setItem('velvet:favorites',JSON.stringify(next));setSaved(!saved);window.dispatchEvent(new Event('velvet:favorites-changed'));}
 return <button type="button" className={'favorite '+(saved?'active':'')} aria-label={saved?'Убрать из избранного':'Добавить в избранное'} aria-pressed={saved} onClick={toggle}><Heart size={18} fill={saved?'currentColor':'none'}/></button>;
}
