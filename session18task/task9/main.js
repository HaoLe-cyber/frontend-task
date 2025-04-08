let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

if (
    isNaN(hour) || isNaN(minute) || isNaN(second) ||
    hour < 0 || hour > 23 ||
    minute < 0 || minute > 59 ||
    second < 0 || second > 59
) {
    alert("Vui lòng nhập giá trị hợp lệ cho giờ, phút và giây.");
} else {
    let period;
    let displayHour;

    if (hour === 0) {
        displayHour = 12;
        period = "AM";
    } else if (hour === 12) {
        displayHour = 12;
        period = "PM";
    } else if (hour > 12) {
        displayHour = hour - 12;
        period = "PM";
    } else {
        displayHour = hour;
        period = "AM";
    }

    alert(`Thời gian theo định dạng 12 giờ: ${displayHour}:${minute}:${second} ${period}`);
}
