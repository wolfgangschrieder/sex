'use client';
import {useMemo,useState} from 'react';
import Link from 'next/link';
import {Search} from 'lucide-react';
import {profiles} from '../data/profiles';
import ProfileCard from './ProfileCard';
export default function Catalog({compact=false}:{compact?:boolean}){const [city,setCity]=useState('Все города');const [service,setService]=useState('Все направления');const [q,setQ]=useState('');
 const matches=useMemo(()=>profiles.filter(p=>(city==='Все города'||p.city===city)&&(service==='Все направления'||p.services.includes(service))&&[p.name,p.district,p.city].join(' ').toLowerCase().includes(q.toLowerCase())),[city,service,q]);
 const shown=compact?matches.slice(0,3):matches;
 return <section className="container catalog" id="catalog"><div className="section-heading"><div><span className="eyebrow">PRIVATE DIRECTORY</span><h2>{compact?'Знакомство с VELVET':'Каталог специалистов'}</h2></div><span className="muted">{matches.length} анкеты</span></div><div className="filters"><label className="search-field"><Search size={18}/><input type="search" placeholder="Имя, район или город" aria-label="Поиск" value={q} onChange={e=>setQ(e.target.value)}/></label><select aria-label="Город" value={city} onChange={e=>setCity(e.target.value)}><option>Все города</option><option>Волгоград</option><option>Волжский</option></select><select aria-label="Направление" value={service} onChange={e=>setService(e.target.value)}><option>Все направления</option><option>Релакс</option><option>SPA</option><option>Аромамассаж</option></select></div><div className="cards">{shown.map(p=><ProfileCard profile={p} key={p.slug}/>)}</div>{shown.length===0&&<p className="empty">По заданным фильтрам ничего не найдено.</p>}{compact&&<Link className="outline-button" href="/catalog">Перейти в каталог <span>↗</span></Link>}<p className="disclaimer">Все анкеты, имена, цены и описания вымышлены. Публикация реальных анкет пока отключена.</p></section>
}
