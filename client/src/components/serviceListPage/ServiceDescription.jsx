import { houseLarge } from "../../assets/images";

function ServiceDescription() {
  return (
    <>
      <section className="z-0 relative flex flex-col xl:flex-row   bg-cover bg-center">
        <div className="w-full h-[248px] text-white  flex justify-center relative items-center text-center z-1 bg-blue-600">
          <p className="text-lg">
            เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร
            โดยทีมช่างมืออาชีพมากกว่า 100 ทีม
            <br />
            สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง
            <br />
            ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม.
            โดยทีมช่างมืออาชีพมากกว่า 100 ทีม
            <br />
            มั่นใจ ช่างไม่ทิ้งงาน พร้อมรับประกันคุณภาพงาน
          </p>
          <img src={houseLarge} className="h-[248px] absolute right-[10%]" />
        </div>
      </section>
    </>
  );
}

export default ServiceDescription;
