import Link from "next/link";

const Page = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

      <div className="flex items-center justify-center min-h-screen bg-white py-48 text-color-accent">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="text-indigo-500 font-bold text-7xl">404</div>

            <div className="font-bold text-3xl xl:text-5xl lg:text-4xl md:text-4xl mt-10">Halaman Ini Tidak Tersedia Untuk Kamu</div>
          </div>

          <div className="flex flex-col mt-48">
            <div className="text-gray-400 font-bold uppercase">Klik dibawah ini aja</div>

            <div className="flex flex-col items-stretch mt-5">
              <Link href="/" className="hover:text-color-primary transition-all">
                  <div className="flex flex-row group px-4 py-8 border-t hover:cursor-pointer transition-all duration-200 delay-100">
                    <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                      <i className="mdi mdi-home-outline mx-auto text-indigo-900 text-2xl md:text-3xl"></i>
                    </div>
                  
                    <div className="grow flex flex-col pl-5 pt-2">
                      <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">Khusus Untuk Kamu</div>
                  
                      <div className="font-semibold text-sm md:text-md lg:text-lg text-gray-400 group-hover:text-gray-500 transition-all duration-200 delay-100">Coba Saja :)</div>
                    </div>
                  
                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2 group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                  </div>
              </Link>

              {/* Sisipkan kode untuk opsi lainnya di sini */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
