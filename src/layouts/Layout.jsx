import Style from "../styles/Layout.module.scss"
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className={Style.containerLayout}>
            <div className={Style.containerLinks}>
                <div className={Style.title}><p>Pelisplus Administrador</p></div>
                <div className={Style.Links}>
                    <Link href={'/'}>
                        <p>Dashboard</p>
                    </Link>
                    <Link href={'/pelis/page'}>
                        <p>Peliculas</p>
                    </Link>
                    <Link href={'/'}>
                        <p>Vista previa</p>
                    </Link>
                </div>
            </div>
            <div className={Style.containerChildren}>
                {
                    children
                }
            </div>
        </div>
    )
}