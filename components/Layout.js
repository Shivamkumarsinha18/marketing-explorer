import Navbar from './Navbar';
import Footer from './Footer';
import SettingsPanel from './SettingsPanel';
import CursorEffects from './CursorEffects';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorEffects />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <SettingsPanel />
    </div>
  );
}