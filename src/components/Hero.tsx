
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative h-full my-10 overflow-hidden z-5">
      <div className="text-white py-2 px-10 md:flex items-center justify-center lg:mx-20 xl:mx-30 rounded-3xl">
        <div className="w-full my-3 md:hidden">
          <img
            src="https://genk.mediacdn.vn/139269124445442048/2023/9/12/iphone-15-pro-colours-1-1694508349064-169450834927018103425-1694544876041-1694544876350746587871.jpg"
            alt="iPhone 15 Pro Max"
            className=" w-3/4 h-56 object-cover justify-self-center rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-center  md:items-start md:w-2/4">
          <h1 className="text-3xl font-extrabold md:text-6xl mb-4 justify-items-center ">
            iPhone <span className="text-red-500">16 Pro Max</span>

          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-6">
            เร็วแรงที่สุดที่เคยมีมา พร้อมด้วยชิป A18 Pro
          </h2>
          <p className="text-sm">
            iPhone 16 Pro Max เป็นสมาร์ตโฟนระดับเรือธงของ Apple
            มาพร้อมกับการออกแบบที่ทันสมัย วัสดุระดับพรีเมียม
            และฟีเจอร์ที่ล้ำสมัยที่สุดในตระกูล iPhone
          </p>
          <p className="text-sm mt-2">ราคาเริ่มต้นที่ 45,900 บาท</p>

          <div className="flex justify-center space-x-4 my-5">
            <Link
              to="section1"
              smooth={true} 
              duration={500}
              className="text-sm bg-red-700 hover:bg-red-600 text-white px-3 py-3 rounded-lg font-medium transition duration-300"
            >
              เลือกซื้อเลย
            </Link>
            <a
              href="https://www.apple.com/th/iphone-16-pro/?afid=p238%7CsStSRpg2z-dc_mtid_20925t5544931_pcrid_714315745103_pgrid_167302133036_pexid__ptid_kwd-2358105248835_&cid=wwa-th-kwgo-iphone-slid----Avail-"
              className="text-sm border border-gray-500 hover:border-white text-white px-3 py-3 rounded-lg font-medium transition duration-300"
            >
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </div>

        <div className="hidden md:grid md:grid-rows-2 md:w-2/4 flex-wrap md:gap-5">
          <div className="w-full">
            <img
              src="https://genk.mediacdn.vn/139269124445442048/2023/9/12/iphone-15-pro-colours-1-1694508349064-169450834927018103425-1694544876041-1694544876350746587871.jpg"
              alt="iPhone 15 Pro Max"
              className="w-1/2 xl:h-60 h-40 object-cover  justify-self-center rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>

          <div className="w-full">
            <img
              src="https://s3v2.interdata.vn:9000/s3-586-15343-storage/dienthoaigiakho/wp-content/uploads/2024/01/23085929/iphone-15-pro-max-co-nhung-mau-gi-dienthoaigiakho-vn-6.jpg"
              alt="iPhone 15 Pro Max"
              className="w-1/2 h-40 object-cover justify-self-end rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>

          <div className="w-full">
            <img
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/342/250/products/iphone-15-pro-max-2-jpeg.jpg?v=1694662952287"
              alt="iPhone 15 Pro Max"
              className="w-1/2 xl:h-60 h-40 justify-self-start object-cover rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
