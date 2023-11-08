import Link from "next/link";

const Layouts = ({children}:any) => {
    type Header = {
        name:string,
        href:string,
      }
      
      const headerHref:Header[] = [
        {name : "ホーム",href:"/"},
        {name : "トーク",href:"/talk"},
        {name : "設定",href:"/setting"},
      ]
    
    return (
        <div className="pb-16 bg-slate-50 min-h-screen lg:block flex flex-col items-center">
            <main className="w-full">{children}</main>
            <footer className='z-20 h-16 mt-10 fixed w-full bottom-0 bg-white shadow-2xl shadow-black'>
                <ul className='flex justify-around h-full items-center pt-2'>
                    {headerHref && headerHref.map((e,key) => (
                        <li key={key} className="h-full"><Link href={e.href} className="h-full block px-10">{e.name}</Link></li>
                    ))}
                </ul>
            </footer>
        </div>
    );
}

export default Layouts;