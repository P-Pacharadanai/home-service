import { ourServices } from "../../constants";
import ServiceLists from "./ServiceLists";
import { GeneralBtn } from "../../components/common";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap">
      <div className="container flex flex-col justify-start gap-5">
        <h3 className="font-prompt font-semibold text-2xl flex justify-center mt-12 mb-9">
          บริการยอดฮิตของเรา
        </h3>
      </div>

      <div className=" max-container gap-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-9">
        {ourServices.map((service, index) => (
          <ServiceLists key={index} {...service} />
        ))}
      </div>

      <div className="container flex justify-center items-center p-12 mt-2 mb-15">
        <GeneralBtn label="ดูบริการท้ังหมด" />
      </div>
    </section>
  );
};

export default Services;
