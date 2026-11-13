import Link from 'next/link';
import {Heart,MapPin} from 'lucide-react';
export default function Header(){return <header className="site-header"><div className="container header-inner"><Link className="logo" href="/">✦ VELVET <span>18+</span></Link><nav aria-label="Основная навигация"><Link href="/catalog">Каталог</Link><Link href="/#about">О платформе</Link><Link href="/favorites" aria-label="Избранное"><Heart size={18}/><span>Избранное</span></Link></nav><div className="header-city"><MapPin size={15}/> Волгоград · Волжский</div></div></header>}
