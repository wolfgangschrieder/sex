import type {Metadata} from 'next';
import './globals.css';
import Header from '../components/Header';
export const metadata:Metadata={title:'VELVET — каталог массажа 18+',description:'Демонстрационный каталог массажа для Волгограда и Волжского. Все анкеты вымышлены.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Header/>{children}<footer className="site-footer"><div className="container footer-inner"><strong>✦ VELVET</strong><p>Демо-платформа · Волгоград и Волжский · Только для совершеннолетних 18+</p><p>© {new Date().getFullYear()} VELVET</p></div></footer></body></html>}
