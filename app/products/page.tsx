import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { ProductsGallery } from "@/components/products/ProductsGallery";

export default function ProductsPage() {
  return (
    <AppShell>
      <Header />
      <ProductsGallery />
    </AppShell>
  );
}
