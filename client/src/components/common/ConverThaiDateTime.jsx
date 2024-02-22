function ConvertThaiDateTime(isoString) {
  const dateObject = new Date(isoString);

  dateObject.setHours(dateObject.getHours() + 7);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = dateObject
    .toLocaleDateString("en-EN", options)
    .split(",")
    .join("");

  return `${formattedTime.slice(0, 16)}${formattedTime.slice(-2)}`;
}

export default ConvertThaiDateTime;
