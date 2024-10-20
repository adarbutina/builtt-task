import NavigationHeader from '@/components/NavigationHeader';
import GridProducts from '@/components/GridProducts';
import products from '@/store/products.js';

const PageCollection = () => {
  return (
    <>
      <div className="page" data-name="Collection">
        <NavigationHeader />
        <GridProducts products={products}/>
      </div>
    </>
  );
};

export default PageCollection;
