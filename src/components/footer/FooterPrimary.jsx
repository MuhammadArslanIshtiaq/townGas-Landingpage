export default function FooterPrimary() {
  return (
    <footer className='bg-primary' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='lg:max-w-7xl px-6 mx-auto '>
        <div className='py-6 flex flex-wrap gap-4 md:items-center'>
          <p className='text-lg text-white mr-auto'>
            私隱政策 | 聲明免責聲明及使用條款
          </p>
          <p className='text-lg text-white'>
            © 2022 版權所有。香港中華煤氣有限公司
          </p>
        </div>
      </div>
    </footer>
  );
}
