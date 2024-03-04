import { writeUp } from "../../assets/images";

function WriteUp() {
  return (
    <>
      <section
        className="z-0 flex flex-col xl:flex-row  bg-cover bg-[center_bottom_-30rem]"
        style={{ backgroundImage: `url(${writeUp})` }}
      >
        <div className="w-full h-[240px] text-white text-center z-1 bg-blue-950 bg-opacity-60 p-12">
          <h1 className="text-white text-4xl font-prompt mb-4">บริการของเรา</h1>
          <p className="text-lg font-prompt">
            ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
          </p>
          <p className="text-lg font-prompt">
            โดยพนักงานแม่บ้าน และช่างมืออาชีพ
          </p>
        </div>
      </section>
    </>
  );
}

export default WriteUp;
