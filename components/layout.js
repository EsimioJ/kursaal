
import Footer from '../components/footer';
import Meta from '../components/meta';
import Menu from '../components/menu';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
