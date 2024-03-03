function ConvertThaiDateTime(isoString) {
  const dateObject = new Date(isoString);

  dateObject.setHours(dateObject.getHours() + 7);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = dateObject
    .toLocaleDateString("th-TH-u-ca-gregory", options)
    .split(",")
    .join("");

  const newDate = formattedTime.slice(0, 16);
  const amPm = dateObject.getHours() >= 12 ? "PM" : "AM";

  return `${newDate}${amPm}`;
}

export default ConvertThaiDateTime;
