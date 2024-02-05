import { writeUp } from "../../assets/images";

function WriteUp() {
  return (
    <>
      <section
        className="w-full z-0 relative flex flex-col xl:flex-row max-container  bg-cover bg-center"
        style={{ backgroundImage: `url(${writeUp})` }}
      >
        <div className="w-full h-[240px] text-white text-center z-1 bg-blue-900 bg-opacity-70 p-12">
          <h1 className="text-4xl font-prompt mb-4">บริการของเรา</h1>
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
