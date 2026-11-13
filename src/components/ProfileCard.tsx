import Link from 'next/link';
import {MapPin} from 'lucide-react';
import FavoritesButton from './FavoritesButton';
import type {Profile} from '../data/profiles';
export default function ProfileCard({profile:p}:{profile:Profile}){return <article className="profile-card"><div className={'portrait '+p.tone}><div className="portrait-art"><span>VELVET</span><span>PRIVATE SPA</span></div><span className="demo-label">ДЕМО АНКЕТА</span><FavoritesButton slug={p.slug}/></div><div className="profile-detail"><div className="profile-title"><h3>{p.name}, {p.age}</h3><strong>от {p.price.toLocaleString('ru-RU')} ₽</strong></div><p className="location"><MapPin size={14}/>{p.city} · {p.district}</p><div className="tags">{p.services.map(s=><span key={s}>{s}</span>)}</div><Link className="profile-link" href={'/profile/'+p.slug}>Смотреть анкету <span>↗</span></Link></div></article>}
