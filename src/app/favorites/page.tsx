'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import ProfileCard from '../../components/ProfileCard';
import {profiles} from '../../data/profiles';
export default function FavoritesPage(){const [slugs,setSlugs]=useState<string[]>([]);
 useEffect(()=>{const read=()=>{try{setSlugs(JSON.parse(localStorage.getItem('velvet:favorites')||'[]'));}catch{setSlugs([]);}};read();window.addEventListener('velvet:favorites-changed',read);return()=>window.removeEventListener('velvet:favorites-changed',read);},[]);
 const selected=profiles.filter(p=>slugs.includes(p.slug));return <main className="container favorites-page"><span className="eyebrow">SAVED PROFILES</span><h1>Избранное</h1>{selected.length?<div className="cards">{selected.map(p=><ProfileCard profile={p} key={p.slug}/>)}</div>:<div className="empty-state"><p>Пока нет сохранённых анкет.</p><Link className="primary-button" href="/catalog">Перейти в каталог ↗</Link></div>}</main>}
