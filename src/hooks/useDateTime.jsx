const formatDateTime = (createdAt) => {
    const dateObj = new Date(createdAt);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();
    return { date, time };
};

export default formatDateTime;