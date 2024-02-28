import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ServiceDetailSkeleton from "../skeleton/SeviceDetail";

function ServiceDetailList(props) {
  const { serviceList, serviceOrder, setServiceOrder } = props;

  const addOrder = (list) => {
    const tempOrder = [...serviceOrder];
    const existingIndex = serviceOrder.findIndex(
      (item) => item.service_list_id === list.service_list_id
    );

    if (existingIndex !== -1) {
      tempOrder[existingIndex].quantity += 1;
    } else {
      tempOrder.push({
        service_list_id: list.service_list_id,
        title: list.title,
        price: list.price,
        unit: list.unit,
        quantity: 1,
      });
    }

    setServiceOrder(tempOrder);
  };

  const subtractOrder = (listId) => {
    const tempOrder = [...serviceOrder];
    const existingIndex = serviceOrder.findIndex(
      (item) => item.service_list_id === listId
    );

    if (existingIndex !== -1) {
      if (tempOrder[existingIndex].quantity === 1) {
        const newOrder = tempOrder.filter(
          (item) => item.service_list_id !== listId
        );
        setServiceOrder(newOrder);
      } else {
        tempOrder[existingIndex].quantity -= 1;
        setServiceOrder(tempOrder);
      }
    }
  };

  const showQuantity = (listId) => {
    if (serviceOrder.length) {
      const existingIndex = serviceOrder.findIndex(
        (item) => item.service_list_id === listId
      );
      if (existingIndex !== -1) {
        return serviceOrder[existingIndex].quantity;
      }
    }

    return 0;
  };

  return (
    <div className="max-w-[735px] px-6 pt-8 pb-14 bg-white border border-gray-300 rounded-lg">
      <h3 className="text-xl text-gray-700">
        {serviceList[0] ? (
          "เลือกรายการบริการ" + serviceList[0]?.services.name
        ) : (
          <Skeleton width={200} />
        )}
      </h3>
      <div className="mt-11">
        {serviceList.length === 0 && <ServiceDetailSkeleton itemCount={3} />}
        {serviceList.map((list, index) => {
          return (
            <div key={list?.service_list_id}>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">{list?.title}</h4>
                  <div className="flex gap-3 mt-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-3 fill-gray-300"
                    >
                      <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <p className="text-sm text-gray-700">
                      {list?.price}.00 ฿ / {list?.unit}
                    </p>
                  </div>
                </div>
                <div className="basis-36 flex  justify-between items-center gap-5">
                  <button
                    onClick={() => subtractOrder(list.service_list_id)}
                    className="w-11 h-11 text-3xl text-blue-600 border border-blue-600 rounded-lg"
                  >
                    -
                  </button>
                  <p className="text-gray-800 font-medium">
                    {showQuantity(list.service_list_id)}
                  </p>
                  <button
                    onClick={() => addOrder(list)}
                    className="w-11 h-11 text-3xl text-blue-600 border border-blue-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              {index !== serviceList?.length - 1 && (
                <hr className="my-6 border-1 border-gray-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceDetailList;
