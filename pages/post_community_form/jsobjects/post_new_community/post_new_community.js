export default {
  // Hàm chính để xử lý Submit Form
  async submitForm() {
    try {
      // Thu thập dữ liệu từ các widget
      const data = {
        title: title.text, // Lấy Tiêu đề
				location:location1.text,
        type: "emergency_alert", // Mặc định "emergency_alert"
        content: content.text, // Nội dung từ Rich Text Editor
        priority: "urgent",
				createdAt:time.formattedDate,// Mặc định "urgent"
        notificationChannels: {
          sms: notification_channels.selectedValues.includes("sms"), // True nếu "SMS" được chọn
          email: notification_channels.selectedValues.includes("Email") // True nếu "Email" được chọn
        }
      };

      // Gửi API request
      const response = await fetch("http://34.67.28.143:1337/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }), // Truyền dữ liệu vào API
      });

      // Kiểm tra phản hồi từ API
      if (response.ok) {
        showAlert("Form submitted successfully!", "success");
			
        // Reset các widget sau khi thành công
        this.resetForm();
      } else {
        const errorData = await response.json();
        showAlert(`Error: ${errorData.message}`, "error");
      }
    } catch (error) {
      // Xử lý lỗi
      showAlert(`Something went wrong: ${error.message}`, "error");
    }
  },

  // Hàm để reset các widget
  resetForm() {
    // resetWidget("Title"); // Reset Tiêu đề
    // resetWidget("locaiton"); // Reset Địa điểm
    // resetWidget("content"); // Reset Nội dung
    // resetWidget("notification_channels"); // Reset Notification Channels
    // resetWidget("time"); // Reset Thời gian
  }
};
