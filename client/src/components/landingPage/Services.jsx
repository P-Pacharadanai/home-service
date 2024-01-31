import { ourServices, } from "../../constants";
import ServiceLists from "../../components/ServiceLists";
import { Button } from "../../components/common";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap" >
      <div className="container flex flex-col justify-start gap-5">
      <h3 className="font-prompt font-semibold text-xl flex justify-center ">บริการยอดฮิตของเรา</h3>
      </div>

      <div className=" ax-container flex justify-center items-center mt-16 lg:grid-cols-4 mdgrid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {ourServices.map((service, index) => (
          <ServiceLists key={index} {...service} />
        ))}
      </div>

      <div className="container flex justify-center items-center p-10">
        <Button label="ดูบริการท้ังหมด"/>
      </div>
    </section>
  )
}

export default Services

