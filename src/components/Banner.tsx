
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="text-sm flex items-center md:text-lg bg-white justify-center py-10  space-x-2 ">
      <h3 className="">เลือกซื้อ iPhone ที่คุณชอบ จ่ายดอกเบี้ย 0% นานสูงสุด 10 เดือน</h3>
      <Link
        to="section1"
        smooth={true} 
        duration={500}
        className="text-sm bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded-lg font-medium transition duration-300"
      >
        ซื้อ
      </Link>
    </section>
  );
};

export default Banner;
