export default {
  async submitForm() {
    try {
      const data = {
        title: title.text,
        location: {
          "lat": parseFloat(Input1.text), // Chuyển đổi thành số thực
          "long": parseFloat(Input2.text), // Chuyển đổi thành số thực
          "address": Input3.text,
        },
        type: "emergency_alert",
        content: content.text,
        priority: "urgent",
        notificationChannels: {
          sms: notification_channels.selectedValues.includes("sms") ? "true" : "false",
          email: notification_channels.selectedValues.includes("Email") ? "true" : "false",
        },
      };

      console.log("data", data);
      const response = await fetch("http://34.67.28.143:1337/api/communities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        showAlert("Form submitted successfully!", "success");
        this.resetForm();
      } else {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        showAlert(`Error: ${errorData.message}`, "error");
      }
    } catch (error) {
      showAlert(`Something went wrong: ${error.message}`, "error");
    }
  },

  resetForm() {
    resetWidget("title");
    resetWidget("map1");
    resetWidget("content");
    resetWidget("notification_channels");
  },
};