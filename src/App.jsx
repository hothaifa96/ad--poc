import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import SplashScreen from "./pages/SplashScreen";
import CategoriesPage from "./pages/CategoriesPage";
import ItemsPage from "./pages/ItemsPage";
import AuthPage from "./pages/AuthPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";
import DeliveryPage from "./pages/DeliveryPage";

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<SplashScreen />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/items/:categoryId' element={<ItemsPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/delivery' element={<DeliveryPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </CartProvider>
    </LanguageProvider>
  );
}
